# Deployment Guide

This document provides comprehensive deployment instructions for the Pistachio Attendance application.

## 🌐 Deployment Options

### 1. GitHub Pages (Recommended)

GitHub Pages is the simplest deployment option for this static PWA.

#### Automatic Deployment

The repository can be configured for automatic deployment:

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as the source
   - Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build:pages
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Manual Deployment

1. **Build the application**
   ```bash
   npm run build:pages
   ```

2. **Deploy to GitHub Pages**
   - Push the built files to the `gh-pages` branch
   - Or use the GitHub Pages settings to deploy from the `dist` folder

#### Configuration

The `vite.config.ts` should include the correct base path:

```typescript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/attendance/' : '/',
  // ... other config
})
```

### 2. Netlify

Netlify provides easy deployment with automatic builds.

#### Setup

1. **Connect Repository**
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   Set up environment variables in Netlify dashboard if needed.

#### Netlify Configuration

Create `netlify.toml` in the project root:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/manifest.webmanifest"
  [headers.values]
    Content-Type = "application/manifest+json"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.svg"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 3. Vercel

Vercel offers seamless deployment for frontend applications.

#### Setup

1. **Connect Repository**
   - Import project from GitHub
   - Vercel auto-detects the framework

2. **Build Settings**
   ```
   Build Command: npm run build
   Output Directory: dist
   ```

#### Vercel Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/manifest.webmanifest",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/manifest+json"
        }
      ]
    }
  ]
}
```

### 4. Static Hosting (Apache/Nginx)

For self-hosted deployment on traditional web servers.

#### Apache Configuration

Create `.htaccess` in the `dist` folder:

```apache
RewriteEngine On
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Serve manifest with correct MIME type
<Files "manifest.webmanifest">
    Header set Content-Type "application/manifest+json"
</Files>
```

#### Nginx Configuration

Add to your Nginx config:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/attendance/dist;
    index index.html;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|svg|png|jpg|jpeg|gif|ico|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Serve manifest with correct MIME type
    location = /manifest.webmanifest {
        add_header Content-Type application/manifest+json;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

## 🔧 Build Configuration

### Environment Variables

Create environment-specific files:

**.env.production**
```env
VITE_HTML_BASE_URL=/attendance
VITE_APP_ENV=production
```

**.env.development**
```env
VITE_HTML_BASE_URL=
VITE_APP_ENV=development
```

### Build Commands

```bash
# Development build
npm run dev

# Production build
npm run build

# GitHub Pages build
npm run build:pages

# Preview production build
npm run preview
```

### Build Optimization

The Vite configuration includes optimizations:

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['lit'],
        },
      },
    },
    target: 'esnext',
    minify: 'terser',
  },
})
```

## 📱 PWA Configuration

### Service Worker

The app includes PWA capabilities with a service worker for offline functionality.

### Manifest Configuration

The `manifest.webmanifest` includes:

```json
{
  "name": "נוחכות פיסטוק",
  "short_name": "נוחכות",
  "description": "מערכת נוכחות לתלמידים",
  "theme_color": "#2563eb",
  "background_color": "#ffffff",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "icons": [...]
}
```

### Icons and Assets

Ensure the following PWA assets are included:
- App icons (192x192, 512x512)
- Favicon
- Apple touch icons
- Maskable icons

## 🔍 Post-Deployment Checklist

### Functionality Testing

- [ ] **App loads correctly** at the deployed URL
- [ ] **Navigation works** between all three modes
- [ ] **Student addition** functions properly
- [ ] **Data persistence** works in browser storage
- [ ] **PWA installation** prompt appears when appropriate
- [ ] **Offline functionality** works after installation

### Performance Testing

- [ ] **Lighthouse score** > 90 for all categories
- [ ] **Page load time** < 3 seconds
- [ ] **First contentful paint** < 1.5 seconds
- [ ] **Time to interactive** < 5 seconds

### Mobile Testing

- [ ] **Responsive design** works on various screen sizes
- [ ] **Touch interactions** work properly
- [ ] **PWA features** work on mobile devices
- [ ] **Keyboard navigation** works (for accessibility)

### Browser Compatibility

Test in major browsers:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Security

- [ ] **HTTPS enabled** (required for PWA)
- [ ] **Security headers** configured
- [ ] **Content Security Policy** (if needed)
- [ ] **No sensitive data** exposed in client-side code

## 🚨 Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**PWA Not Installing**
- Ensure HTTPS is enabled
- Check manifest.webmanifest is accessible
- Verify service worker is registered

**Routing Issues**
- Ensure server is configured for SPA routing
- Check base path configuration in vite.config.ts

**Static Assets Not Loading**
- Verify correct base path in build
- Check server MIME type configuration

### Debugging

**Enable Debug Mode**
Set environment variable:
```bash
VITE_DEBUG=true npm run build
```

**Check Build Output**
```bash
npm run build -- --debug
```

**Test Production Build Locally**
```bash
npm run preview
```

## 📊 Monitoring

### Analytics (Optional)

To add analytics, consider:
- Google Analytics 4
- Plausible Analytics
- Fathom Analytics

### Performance Monitoring

- Lighthouse CI for continuous monitoring
- Web Vitals tracking
- Error tracking with Sentry (if needed)

### Uptime Monitoring

- UptimeRobot
- Pingdom
- StatusCake

## 🔄 Continuous Deployment

### GitHub Actions Workflow

Create automated deployment with testing:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run e2e

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build:pages
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

### Version Management

Use semantic versioning:
```bash
npm version patch  # Bug fixes
npm version minor  # New features  
npm version major  # Breaking changes
```

---

**Ready to deploy? Choose your preferred method and follow the steps above!** 🚀