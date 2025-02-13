# Cấu trúc folder
# ├── 📦 project-root
### Source Front End (aka client)
## $~$ ├──📂 App 
### $~~~~~~~~~~~$ ├─📂 assets: chứa assets hoặc style cần hash
### $~~~~~~~~~~~$ ├─📂 composables:  Chứa các hooks sử dụng trong Vue (cũng tự động import).
### $~~~~~~~~~~~$ ├─📂 components: Chứa các thành phần giao diện (tự động import).
### $~~~~~~~~~~~$ ├─📂 layouts: Chứa các bố cục (layout) dùng trong toàn bộ app.
### $~~~~~~~~~~~$ ├─📂 middleware:  Chứa các middleware (defineNuxtRouteMiddleware).
### $~~~~~~~~~~~$ ├─📂 pages: Chứa các trang (.vue) trong ứng dụng.
### $~~~~~~~~~~~$ ├─📂 plugins: Chứa các plugin để inject vào ứng dụng.
### $~~~~~~~~~~~$ ├─📂 stores:Chứa các biến lưu trữ toàn cục với pinia
### $~~~~~~~~~~~$ ├─📂 utils: Chứa các helper function tái sử dụng.
### $~~~~~~~~~~~$ ├─📂 services:
### $~~~~~~~~~~~~~$ ├─📂 api:
### $~~~~~~~~~~~~~~~$ 👉 index.ts: file custom useFetch theo response của backend
### $~~~~~~~~~~~~~~~$ ├─📂 handler: chứa các function tuỳ chỉnh của api
### $~~~~~~~~~~~~~$ ├─📂 ws:
### $~~~~~~~~~~~~~~~$ ├─📂 handler: chứa các function là action của socket
### $~~~~~~~~~~~~~~~$ ├─📂 manager: chứa các function lắng nghe và bóc tách message
### $~~~~~~~~~~~~~~~$ 👉 ws.ts: cấu hình tuỳ chỉnh ws
$~~~~~~~~~~~~~$ ├─📂 sub: chứa các sub-service của thư biện bên thứ 3
# Source Server (aka nitro server)
## $~$ ├──📂 server 
### $~~~~~~~~~~~$ ├─📂 middleware: chứa các middleware server
### $~~~~~~~~~~~$ ├─📂 plugin: chứa plugin backend
### $~~~~~~~~~~~$ ├─📂 utils: chứa các helper backend
### $~~~~~~~~~~~$ ├─📂 api: chứa file logic api của backend