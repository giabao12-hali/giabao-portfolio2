# Blog CRM System

Hệ thống quản lý nội dung blog được xây dựng với Next.js, Prisma và SQLite.

## Tính năng

### 🎯 Quản lý Blog Posts
- ✅ Tạo, chỉnh sửa, xóa bài viết
- ✅ Rich text editor với Tiptap
- ✅ Hỗ trợ categories và tags
- ✅ Chế độ draft/published
- ✅ SEO-friendly với metadata
- ✅ Responsive design

### 🔐 Authentication & Authorization
- ✅ JWT-based authentication
- ✅ Cookie-based session management
- ✅ Admin panel bảo mật
- ✅ Role-based access control

### 🗄️ Database
- ✅ Prisma ORM với SQLite
- ✅ Relationship management
- ✅ Migration support
- ✅ Seed data

### 🎨 User Interface
- ✅ Clean admin interface
- ✅ Rich text editing
- ✅ Blog display pages
- ✅ Category/tag filtering

## Cách sử dụng

### 1. Truy cập Admin Panel
- Vào `http://localhost:3000/admin`
- Đăng nhập với:
  - Email: `admin@example.com`
  - Password: `admin123`

### 2. Quản lý Blog Posts
- Tạo bài viết mới: `/admin/blog/new`
- Danh sách bài viết: `/admin/blog`
- Chỉnh sửa bài viết: Click "Edit" trên từng bài viết

### 3. Xem Blog
- Trang blog chính: `http://localhost:3000/blog`
- Bài viết cụ thể: `http://localhost:3000/blog/[slug]`

## Cấu trúc Database

### User Model
- `id`: Unique identifier
- `email`: Email đăng nhập
- `password`: Mật khẩu (hashed)
- `name`: Tên hiển thị
- `role`: ADMIN hoặc EDITOR

### Post Model
- `id`: Unique identifier
- `title`: Tiêu đề bài viết
- `slug`: URL-friendly identifier
- `content`: Nội dung HTML
- `summary`: Tóm tắt ngắn
- `image`: URL hình ảnh đại diện
- `published`: Trạng thái xuất bản
- `publishedAt`: Thời gian xuất bản
- `authorId`: ID tác giả

### Category & Tag Models
- Hỗ trợ phân loại nội dung
- Many-to-many relationship với posts

## API Endpoints

### Blog Management
- `GET /api/blog` - Lấy danh sách blog posts
- `POST /api/blog` - Tạo blog post mới (admin only)
- `GET /api/blog/[id]` - Lấy chi tiết blog post
- `PUT /api/blog/[id]` - Cập nhật blog post (admin only)
- `DELETE /api/blog/[id]` - Xóa blog post (admin only)

### Categories & Tags
- `GET /api/categories` - Lấy danh sách categories
- `POST /api/categories` - Tạo category mới (admin only)
- `GET /api/tags` - Lấy danh sách tags
- `POST /api/tags` - Tạo tag mới (admin only)

### Authentication
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/logout` - Đăng xuất
- `GET /api/auth/me` - Kiểm tra trạng thái đăng nhập

## Security Features
- JWT tokens với expiration
- HTTP-only cookies
- Input validation
- SQL injection protection với Prisma
- XSS protection

## Development
- Hot reload với Next.js
- TypeScript support
- ESLint và Prettier
- Prisma Studio để quản lý database
- PWA support