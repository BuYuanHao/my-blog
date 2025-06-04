# Java开发者技术博客

这是一个现代化、充满科技感的个人技术博客网站，专为Java开发者设计。

## ✨ 特色功能

- 🎨 **现代化设计**：深色主题，霓虹色彩，充满科技感
- 📱 **响应式布局**：完美适配桌面端和移动端设备
- ⚡ **高性能**：基于Vue 3 + Vite构建，加载速度极快
- 🎯 **专业内容**：专注Java后端开发技术分享
- 🔥 **动画效果**：丰富的CSS动画和过渡效果
- 🛠️ **技术栈展示**：全面展示Java生态系统技能

## 🛠️ 技术栈

- **前端框架**：Vue 3 + Composition API
- **构建工具**：Vite 4
- **路由管理**：Vue Router 4
- **样式框架**：Tailwind CSS
- **图标库**：Lucide Vue Next
- **字体**：Inter + JetBrains Mono

## 📦 快速开始

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发运行

```bash
# 启动开发服务器
pnpm dev

# 或
npm run dev
```

在浏览器中打开 [http://localhost:5173](http://localhost:5173) 查看效果。

### 构建部署

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 🎨 设计特色

### 颜色主题
- **主色调**：科技蓝 (#0ea5e9)
- **辅助色**：霓虹紫 (#d946ef)
- **强调色**：青色 (#00ffff)、霓虹绿 (#39ff14)
- **背景色**：深灰渐变

### 动画效果
- 悬浮动画
- 发光效果
- 滑入动画
- 粒子背景

### 组件特色
- 毛玻璃效果的卡片
- 渐变按钮
- 霓虹边框
- 科技感网格背景

## 📄 页面结构

- **首页**：英雄区域 + 技能展示 + 精选项目 + 最新博客
- **关于页**：个人简介 + 工作经历 + 教育背景 + 技能认证
- **项目页**：项目展示网格，包含技术栈标签
- **博客页**：技术文章列表，按分类展示
- **联系页**：联系信息 + 联系表单

## 🔧 自定义配置

### 修改个人信息

在以下文件中修改个人信息：

1. `src/views/Home.vue` - 首页内容
2. `src/views/About.vue` - 个人简介
3. `src/components/Footer.vue` - 联系方式
4. `src/components/Navbar.vue` - 品牌名称

### 添加新项目

在 `src/views/Projects.vue` 的 `projects` 数组中添加新项目。

### 添加新博客文章

在 `src/views/Blog.vue` 的 `blogPosts` 数组中添加新文章。

## 📱 响应式设计

- **桌面端**：1200px+ 宽屏布局
- **平板端**：768px-1199px 适中布局  
- **移动端**：<768px 竖屏布局

## 🚀 部署建议

### Vercel (推荐)
1. 连接GitHub仓库
2. 选择框架预设：Vite
3. 自动部署

### Netlify
1. 连接Git仓库
2. 构建命令：`npm run build`
3. 发布目录：`dist`

### GitHub Pages
1. 设置GitHub Actions
2. 构建并部署到gh-pages分支

## 📈 性能优化

- 路由懒加载
- 图片优化
- CSS代码分割
- Tree Shaking
- 现代浏览器优化

## 🤝 贡献

欢迎提交Issues和Pull Requests！

## 📄 许可证

MIT License

---

⭐ 如果这个项目对您有帮助，请给一个Star！