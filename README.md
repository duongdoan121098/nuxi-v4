# Project Structure

## 📦 project-root
### ├── 📂 src
#### ├── 📂 services
##### ├── 📂 api
- **index.ts**: file index custom lại useFetch
###### ├── 📂 handler
- **(*).ts**: file chứa các function call api
###### ├── 📂 manager: nơi chứ config và các chuyển đổi dữ liệu
##### ├── 📂 socket
###### ├── 📂 handler
- **(*).ts**: file chứa ác action của socket
###### ├── 📂 manager
- **(*).ts**: file listen messages từ socket
##### ├── 📂 sub-services
- folder chứa các services của bên thứ 3 
#### ├── 📂 components
- chứa các component tái sử dụng của dự án
#### ├── 📂 layouts
- **default.vue**: Layout mặc định
- **pc.vue**: Layout cho PC
- **mobile.vue**: Layout cho Mobile

#### ├── 📂 middleware
- **auth.global.ts**: Middleware kiểm tra authentication
- **seo.global.ts**: Middleware xử lý SEO

#### ├── 📂 modules
- **seo.module.ts**: Module bật/tắt SEO
- **auth.module.ts**: Module xử lý đăng nhập
- **socket.module.ts**: Module kết nối socket

#### ├── 📂 pages
- **index.vue**: Trang chủ
- **login.vue**: Trang đăng nhập
- **profile.vue**: Trang hồ sơ người dùng
- **dashboard.vue**: Dashboard cho user
- **settings.vue**: Trang cài đặt

#### ├── 📂 plugins
- nơi chứa plugin chủ yêu convert các plugin từ vue3 hoặc từ npm manager
#### ├── 📂 public
- **fonts/**: Font chữ
- **icons/**: Icon SVG
- **images/**: Ảnh static

#### ├── 📂 server
- **middleware/**: Middleware cho API
- **routes/**: Routes API backend
- **controllers/**: Controller xử lý API
- **services/**: Business logic

#### ├── 📂 stores
- global store
#### ├── 📂 styles
- **main.scss**: SCSS chính
- **variables.scss**: Biến SCSS
- **mixins.scss**: SCSS Mixins
- **themes.scss**: Dark/Light mode

#### ├── 📂 utils
- **seo.ts**: Helper xử lý SEO
- **format.ts**: Helper xử lý định dạng dữ liệu
- **validation.ts**: Helper xử lý validation

#### ├── 📂 types
- **auth.ts**: Type của Auth
- **user.ts**: Type của User
- **settings.ts**: Type của Settings

### ├── .env: Biến môi trường chung
### ├── .env.production: Biến môi trường production
### ├── .env.local: Biến môi trường local
### ├── nuxt.config.ts: Cấu hình chính của Nuxt 3
### ├── package.json: Dependencies
### ├── tsconfig.json: Cấu hình TypeScript
### ├── eslint.config.js: Cấu hình ESLint
### ├── prettier.config.js: Cấu hình Prettier
