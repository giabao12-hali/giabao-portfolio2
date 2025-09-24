import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10)
  
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@example.com' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  console.log('✅ Admin user created:', admin.email)

  // Create sample categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'technology' },
      update: {},
      create: {
        name: 'Technology',
        slug: 'technology',
        description: 'Posts about technology and programming',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'personal' },
      update: {},
      create: {
        name: 'Personal',
        slug: 'personal',
        description: 'Personal thoughts and experiences',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'tutorials' },
      update: {},
      create: {
        name: 'Tutorials',
        slug: 'tutorials',
        description: 'Step-by-step tutorials and guides',
      },
    }),
  ])

  console.log('✅ Categories created:', categories.length)

  // Create sample tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'react' },
      update: {},
      create: { name: 'React', slug: 'react' },
    }),
    prisma.tag.upsert({
      where: { slug: 'nextjs' },
      update: {},
      create: { name: 'Next.js', slug: 'nextjs' },
    }),
    prisma.tag.upsert({
      where: { slug: 'typescript' },
      update: {},
      create: { name: 'TypeScript', slug: 'typescript' },
    }),
    prisma.tag.upsert({
      where: { slug: 'javascript' },
      update: {},
      create: { name: 'JavaScript', slug: 'javascript' },
    }),
  ])

  console.log('✅ Tags created:', tags.length)

  // Create sample blog post
  const samplePost = await prisma.post.upsert({
    where: { slug: 'welcome-to-my-blog' },
    update: {},
    create: {
      title: 'Welcome to My Blog',
      slug: 'welcome-to-my-blog',
      content: `# Welcome to My Blog

This is my first blog post using the new CRM system built with Prisma and Next.js!

## Features

- 📝 Rich text editing
- 🏷️ Categories and tags
- 🔒 Admin authentication
- 📱 Responsive design

## Getting Started

You can create new posts, edit existing ones, and manage your content all from the admin panel.

Happy blogging! 🎉`,
      summary: 'My first blog post using the new CRM system.',
      published: true,
      publishedAt: new Date(),
      authorId: admin.id,
    },
  })

  // Link post with categories and tags
  await prisma.postCategory.upsert({
    where: {
      postId_categoryId: {
        postId: samplePost.id,
        categoryId: categories[0].id, // Technology
      },
    },
    update: {},
    create: {
      postId: samplePost.id,
      categoryId: categories[0].id,
    },
  })

  await prisma.postTag.upsert({
    where: {
      postId_tagId: {
        postId: samplePost.id,
        tagId: tags[1].id, // Next.js
      },
    },
    update: {},
    create: {
      postId: samplePost.id,
      tagId: tags[1].id,
    },
  })

  console.log('✅ Sample blog post created:', samplePost.title)
  console.log('🎉 Database seeded successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })