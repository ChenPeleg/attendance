# נוחכות פיסטוק (Pistachio Attendance)

A modern, Hebrew-language Progressive Web App (PWA) for tracking student attendance in after school activity.

![Attendance App Screenshot](https://github.com/user-attachments/assets/2a03b1b3-3510-40b3-bfea-88d021830ec0)

## 🌟 Features

### Core Functionality
- **📊 Student Attendance Tracking** - Track which students are present, absent, or taking the school bus
- **👥 Student Management** - Add, remove, and manage student information
- **🚌 School Bus Tracking** - Special mode for tracking students who take the bus when a grown up guide is accompanying the bus
- **📱 Progressive Web App** - Install on mobile devices for native app-like experience

### User Experience
- **🌓 Dark/Light Theme** - Toggle between light and dark modes
- **🔤 Multiple Sorting Options** - Sort by class (א-ג), name (א-ת), or gender
- **📱 Responsive Design** - Works seamlessly on mobile and desktop
- **🔒 Privacy-First** - All data stored locally on device, never sent to external servers
- **🌐 Hebrew Language Support** - Full Hebrew interface with proper RTL support

### Technical Features
- **⚡ Built with Lit** - Modern web components for fast performance
- **🎨 Tailwind CSS** - Utility-first CSS framework for consistent styling
- **📦 Vite Build System** - Fast development and optimized production builds
- **🧪 End-to-End Testing** - Playwright testing for reliability
- **📱 PWA Capabilities** - Offline support and installable

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChenPeleg/attendance.git
   cd attendance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Build for GitHub Pages
npm run build:pages

# Preview production build
npm run preview
```

## 📖 Usage Guide

### Main Interface

The application has three main modes accessible via the top navigation:

1. **נוכחות (Attendance)** - Main attendance tracking mode
   - Click on student names to mark them as present/absent
   - View attendance count in real-time

2. **נמצאים (Present Today)** - View and manage currently present students
   - Shows only students marked as present
   - Toggle individual student status

3. **הסעה (School Bus)** - Track students taking the school bus
   - Special view for bus transportation tracking

### Side Menu Features

Access the side menu by clicking the hamburger menu (☰) to:

- **הוספת ילדה/ילד** - Add new students to the system
- **איפוס נתונים** - Reset all attendance data
- **עיצוב** - Toggle between light and dark themes
- **פריסת תצוגה** - Switch between grid and list view
- **מיון לפי** - Sort students by:
  - כיתה (Class): א-ג or ג-א
  - שם (Name): א-ת or ת-א  
  - מין (Gender): בנות בנים or בנים בנות
- **התקנה** - Install the app as PWA (when available)

### Data Privacy

The app prioritizes privacy:
- All data is stored locally on your device
- No data is transmitted to external servers
- No user accounts or login required
- Data persists between sessions until manually reset

## 🛠️ Development

### Technology Stack

- **Frontend Framework**: [Lit](https://lit.dev/) - Modern web components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast build tool and dev server
- **Language**: TypeScript - Type-safe development
- **Testing**: [Playwright](https://playwright.dev/) - End-to-end testing
- **PWA**: Native web app capabilities

### Project Structure

```
src/
├── assets/          # SVG icons and images
├── components/      # Reusable UI components
├── css/            # Global CSS styles
├── layout/         # Layout components (navbar, sidebar)
├── main/           # Main application component
├── models/         # TypeScript interfaces and types
├── services/       # Business logic and utilities
├── store/          # State management
├── styles/         # Compiled stylesheets
├── theme/          # Theme switching logic
├── translations/   # Hebrew text constants
└── ui/             # UI-specific components
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run build:pages  # Build for GitHub Pages deployment
npm run preview      # Preview production build

# Testing
npm run e2e          # Run end-to-end tests
```

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/attendance.git
   cd attendance
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Make your changes** and test thoroughly

6. **Run tests**
   ```bash
   npm run e2e
   ```

### Environment Configuration

The app supports different environments:
- `.env.development` - Development environment settings
- `.env.production` - Production environment settings  
- `.env.test` - Testing environment settings

## 🌐 Deployment

### GitHub Pages

The app is configured for easy deployment to GitHub Pages:

```bash
npm run build:pages
```

This builds the app with the correct base path for GitHub Pages deployment.

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your web server

3. Configure your server to serve `index.html` for all routes (SPA mode)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Chen Peleg** - [@ChenPeleg](https://github.com/ChenPeleg)

## 🙏 Acknowledgments

- Built with love for the educational community
- Thanks to all contributors and users
- Special thanks to the Lit and Vite communities for excellent tooling

---

**Made with ❤️ for better attendance tracking**
