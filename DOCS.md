# Blog CRM System Documentation

## Overview
Hệ thống CRM blog được xây dựng với Next.js 14, Prisma ORM, PostgreSQL và Prisma Accelerate để quản lý và hiển thị blog posts trên portfolio.

## 🗄️ Database Management

### Environment Variables
```bash
# Direct PostgreSQL URL (chỉ dùng cho migrations)
POSTGRES_URL="postgres://..."

# Prisma Accelerate URL (dùng cho application)
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=..."
```

### Database Commands

#### 1. Reset Database (Xóa toàn bộ data + migrations)
```bash
# Xóa hoàn toàn database và migration history
npx prisma migrate reset --force

# Hoặc reset với confirmation
npx prisma migrate reset
```

#### 2. Push Schema Changes (Development)
```bash
# Push schema changes mà không tạo migration files
npx prisma db push

# Push với force reset (xóa data)
npx prisma db push --force-reset
```

#### 3. Generate Prisma Client
```bash
# Generate client sau khi thay đổi schema
npx prisma generate

# Generate without engine (cho Accelerate)
npx prisma generate --no-engine
```

#### 4. Seed Database
```bash
# Chạy seed script để tạo admin user và sample data
npx tsx prisma/seed.ts
```

**Seed tạo:**
- Admin user: `nguyenhiengiabao12@gmail.com` / `giabao12122003`
- Sample categories và tags
- Sample blog posts

#### 5. View Database
```bash
# Mở Prisma Studio để xem data
npx prisma studio
```

### Migration Workflow
```bash
# 1. Thay đổi schema trong prisma/schema.prisma
# 2. Tạo migration
npx prisma migrate dev --name "description_of_change"

# 3. Apply migrations to production
npx prisma migrate deploy
```

## 🔐 Authentication System

### Admin Credentials
- **Email:** `nguyenhiengiabao12@gmail.com`
- **Password:** `giabao12122003`

### JWT Configuration
- JWT tokens được lưu trong HTTP-only cookies
- Token expires: 7 days
- Secret được define trong `JWT_SECRET` env variable

## 📡 API Documentation

### Authentication APIs
**Base URL:** `/api/auth`

#### POST `/api/auth/login`
Đăng nhập admin
```javascript
// Request Body
{
  "email": "nguyenhiengiabao12@gmail.com",
  "password": "giabao12122003"
}

// Response Success (200)
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "email",
    "name": "name"
  }
}

// Response Error (401)
{
  "error": "Invalid credentials"
}
```

#### GET `/api/auth/me`
Lấy thông tin user hiện tại
```javascript
// Response Success (200)
{
  "user": {
    "id": "user_id",
    "email": "email", 
    "name": "name"
  }
}

// Response Error (401)
{
  "error": "Unauthorized"
}
```

#### POST `/api/auth/logout`
Đăng xuất
```javascript
// Response (200)
{
  "success": true
}
```

### Blog APIs
**Base URL:** `/api/blog`

#### GET `/api/blog`
Lấy danh sách blog posts (public - chỉ published)
```javascript
// Query Parameters
?page=1&limit=10&category=tech&tag=nextjs

// Response
{
  "posts": [...],
  "totalPages": 5,
  "currentPage": 1,
  "totalPosts": 50
}
```

#### POST `/api/blog` 🔒
Tạo blog post mới (cần authentication)
```javascript
// Request Body
{
  "title": "Post Title",
  "content": "HTML content from Tiptap editor",
  "excerpt": "Short description",
  "published": true,
  "categoryId": "category_id",
  "tagIds": ["tag1_id", "tag2_id"]
}

// Response (201)
{
  "success": true,
  "post": {...}
}
```

#### GET `/api/blog/[id]`
Lấy blog post theo ID (public - chỉ published)

#### PUT `/api/blog/[id]` 🔒
Cập nhật blog post (cần authentication)

#### DELETE `/api/blog/[id]` 🔒
Xóa blog post (cần authentication)

### Admin APIs
**Base URL:** `/api/admin`

#### GET `/api/admin/blog`
Lấy tất cả blog posts (bao gồm unpublished) - cần authentication
```javascript
// Query Parameters
?page=1&limit=10&status=all|published|draft

// Response
{
  "posts": [...],
  "totalPages": 5,
  "currentPage": 1,
  "totalPosts": 50
}
```

#### GET `/api/admin/blog/[id]`
Lấy blog post để edit (bao gồm unpublished) - cần authentication

### Category APIs
**Base URL:** `/api/categories`

#### GET `/api/categories`
Lấy tất cả categories

#### POST `/api/categories` 🔒
Tạo category mới (cần authentication)

### Tag APIs
**Base URL:** `/api/tags`

#### GET `/api/tags`
Lấy tất cả tags

#### POST `/api/tags` 🔒
Tạo tag mới (cần authentication)

## 🚀 Development Workflow

### 1. Setup Project
```bash
# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma db push
npx tsx prisma/seed.ts

# Start development server
npm run dev
```

### 2. Making Schema Changes
```bash
# 1. Edit prisma/schema.prisma
# 2. Push changes
npx prisma db push
# 3. Regenerate client
npx prisma generate
# 4. Restart dev server
```

### 3. Adding New Features
- **Components:** `/src/components/`
- **Pages:** `/src/app/`
- **API Routes:** `/src/app/api/`
- **Utilities:** `/src/lib/`
- **Data/Types:** `/src/data/`

## 📁 File Structure

```
src/
├── app/
│   ├── admin/              # Admin CRM pages
│   │   ├── blog/           # Blog management
│   │   │   ├── new/        # Create new post
│   │   │   └── edit/[id]/  # Edit existing post
│   │   └── page.tsx        # Admin dashboard
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── blog/           # Public blog endpoints
│   │   ├── admin/          # Admin-only endpoints
│   │   ├── categories/     # Category management
│   │   └── tags/           # Tag management
│   ├── blog/               # Public blog pages
│   │   ├── [slug]/         # Individual blog post
│   │   └── page.tsx        # Blog listing
│   └── globals.css         # Global styles
├── components/
│   ├── admin/              # Admin-specific components
│   │   ├── rich-text-editor.tsx  # Tiptap editor
│   │   ├── blog-form.tsx   # Create/edit form
│   │   └── blog-list.tsx   # Admin blog listing
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── prisma.ts          # Prisma client setup
│   └── utils.ts           # Utility functions
└── data/
    └── blog.ts            # Blog-related types/functions
```

## 🔍 Debugging

### Common Issues

1. **P6001 Error**: Database URL format incorrect
   - Ensure `DATABASE_URL` uses `prisma+postgres://` for Accelerate
   - Use `POSTGRES_URL` for direct connection (migrations only)

2. **Authentication Issues**: 
   - Check JWT_SECRET in .env
   - Verify cookie settings in browser

3. **Tiptap SSR Issues**:
   - Component has `immediatelyRender: false` to prevent hydration mismatch

### Logs Location
- Browser DevTools Console
- Terminal running `npm run dev`
- Network tab for API requests

## 🚀 Deployment

### Environment Variables Required
```bash
DATABASE_URL=prisma+postgres://accelerate.prisma-data.net/?api_key=...
POSTGRES_URL=postgres://...
JWT_SECRET=your-production-jwt-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://yourdomain.com
ADMIN_EMAIL=your-admin-email
ADMIN_PASSWORD=your-admin-password
```

### Deploy Steps
```bash
# 1. Build application
npm run build

# 2. Run migrations on production DB
npx prisma migrate deploy

# 3. Seed production data (if needed)
npx tsx prisma/seed.ts

# 4. Start production server
npm start
```

## 📱 Usage

1. **Access Admin Panel**: `http://localhost:3000/admin`
2. **Login** với credentials đã seed
3. **Create/Edit Posts** với rich text editor
4. **Manage Categories/Tags** 
5. **View Public Blog**: `http://localhost:3000/blog`

---

**Lưu ý**: 🔒 = Requires Authentication