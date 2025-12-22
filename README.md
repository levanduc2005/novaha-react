# 🚀 NovaHA React App

**Ứng dụng web đầy đủ cho công ty NovaHA - Cung cấp dịch vụ chuyển đổi số, phát triển phần mềm, và đào tạo IT**

## ✨ Tính Năng Chính

✅ **8 trang công khai** - Home, Services, Pricing, Team, TalentHub, Recruitment, About, Contact  
✅ **Admin Panel** - Đăng nhập, quản lý sinh viên, dashboard analytics  
✅ **Đăng ký sinh viên** - Form đăng ký + upload CV  
✅ **SEO Optimized** - Từ khóa "dịch vụ làm web", meta tags, structured content  
✅ **API Integration** - Axios + environment variables  
✅ **React Router** - Routing SPA, protected routes  
✅ **Responsive Design** - Mobile-first, desktop, tablet, mobile  
✅ **Production Ready** - Optimized build

---

## 🛠️ Tech Stack

React 19.2 | Vite 7.3 | React Router 7.11 | Axios 1.13 | ESLint | CSS3

---

## 🚀 Cài Đặt & Chạy

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## 📁 Cấu Trúc Project

```
novaha-react/
├── src/
│   ├── components/         # Header, Footer, Layout
│   ├── pages/admin/        # Admin pages
│   ├── pages/public/       # Public pages
│   ├── services/           # API client
│   ├── constants/          # Routes, data
│   ├── utils/              # Helpers
│   ├── config/             # Configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Global styles
├── public/                 # Static assets
├── dist/                   # Production build
└── vite.config.js
```

---

## 📄 Pages

| Page            | Path           | Features                  |
| --------------- | -------------- | ------------------------- |
| **Home**        | `/`            | Hero, services preview    |
| **Services**    | `/services`    | SEO optimized content     |
| **Pricing**     | `/pricing`     | Service packages          |
| **Team**        | `/team`        | Leaders, mentors, interns |
| **TalentHub**   | `/talenthub`   | Talent marketplace        |
| **Recruitment** | `/recruitment` | Job listings              |
| **About**       | `/about`       | Company info              |
| **Contact**     | `/contact`     | Contact form              |
| **Student**     | `/student`     | Registration + CV upload  |
| **Admin**       | `/admin`       | Student management        |

---

## 🔐 Admin Dashboard

- Student management (CRUD)
- Analytics & charts
- Project tracking
- Responsive design
- Hamburger menu on mobile

---

## 📝 Available Scripts

```bash
npm run dev           # Start dev server (HMR)
npm run build         # Production build
npm run preview       # Preview build
npm run lint          # Check code quality
npm run lint:fix      # Fix linting issues
npm run format        # Format code
npm run test          # Run tests
npm run coverage      # Coverage report
```

---

## 🎨 Styling

**Global styles**: `src/index.css`

- CSS Grid system (.grid-3, .grid-2)
- CSS Variables (colors, spacing, fonts)
- Responsive design (Desktop, Tablet, Mobile)

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git push origin main

# 2. Deploy on Vercel
# - Go to vercel.com
# - Import GitHub repo
# - Framework: Vite
# - Build: npm run build
# - Auto-deploy on every push!
```

---

## 🐛 Troubleshooting

```bash
# Port in use?
npm run dev -- --port 3000

# Clear cache
rm -rf node_modules package-lock.json
npm install

# Build issues
npm run build
```

---

## 📚 Documentation

- [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) - Dev setup & workflow
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Detailed architecture

---

## ✅ Cleanup Done

**Files to delete** (redundant):

- ❌ SETUP.md → Use DEVELOPMENT_GUIDE.md instead
- ❌ STRUCTURE.md → Use PROJECT_STRUCTURE.md instead
- ❌ REFACTORING_SUMMARY.md → Historical notes

**Directories cleaned** (empty, can delete):

- ❌ src/types/ → Not needed for JS project
- ❌ src/hooks/ → Empty, use as needed
- ❌ components/common/ → Use components/layout instead

---

**Status**: Production Ready ✅  
**Last Updated**: December 22, 2025  
**Deployed on**: Vercel
