# Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the official Next.js hosting platform. Deploy with one command.

#### Step 1: Prepare for Deployment
```bash
# Ensure everything builds locally first
npm run build
npm start
# Test at http://localhost:3000/internships/apply
```

#### Step 2: Push to GitHub (if not already)
```bash
git add .
git commit -m "Add internship application form"
git push origin main
```

#### Step 3: Deploy to Vercel
```bash
# Option A: Using Vercel CLI
npm i -g vercel
vercel

# Option B: Via Vercel Dashboard
# 1. Go to https://vercel.com/new
# 2. Import your GitHub repository
# 3. Configure environment variables
# 4. Click Deploy
```

#### Step 4: Configure Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables:

```
NEXT_PUBLIC_API_BASE_URL = https://study.afritechbridge.online
```

#### Step 5: Verify Deployment
- Check build logs in Vercel dashboard
- Visit your deployed URL: `https://your-app.vercel.app/internships/apply`
- Test form submission
- Monitor errors in Vercel Analytics

---

### Option 2: Self-Hosted (Node.js Server)

Deploy to your own server running Node.js.

#### Step 1: Prepare Build
```bash
npm run build
```

This creates `.next` directory with production build.

#### Step 2: Copy Files to Server
```bash
# Copy these files to your server:
# - .next/
# - node_modules/ (or let npm install on server)
# - public/
# - package.json
# - package-lock.json
# - .env.production (with your API URL)
```

#### Step 3: Set Up Server

**Using PM2 (Process Manager)**
```bash
# On server
npm install -g pm2
npm install
export NODE_ENV=production
pm2 start "npm start" --name "afritech-internship"
pm2 save
```

**Using Docker**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY .next ./
COPY public ./public

EXPOSE 3000

ENV NODE_ENV=production
CMD ["npm", "start"]
```

#### Step 4: Configure Reverse Proxy (Nginx)

```nginx
server {
    listen 80;
    server_name internship.afritechbridge.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Step 5: Enable HTTPS (SSL)
```bash
# Using Let's Encrypt
sudo certbot --nginx -d internship.afritechbridge.com
```

---

### Option 3: Docker Compose (Advanced)

Deploy using Docker and Docker Compose.

#### Step 1: Create Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

#### Step 2: Create docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_BASE_URL=https://study.afritechbridge.online
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - app
```

#### Step 3: Deploy
```bash
docker-compose up -d
```

---

## 🌍 Environment Setup

### Required Environment Variables

Create `.env.production` or set in your hosting platform:

```bash
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://study.afritechbridge.online

# Optional: For analytics/monitoring
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

### Recommended for Production

```bash
# Next.js
NODE_ENV=production

# API
NEXT_PUBLIC_API_BASE_URL=https://study.afritechbridge.online

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Error Tracking
NEXT_PUBLIC_SENTRY_DSN=https://key@sentry.io/project

# Rate Limiting (if self-hosted)
RATE_LIMIT_WINDOW=15m
RATE_LIMIT_MAX_REQUESTS=100
```

---

## ✅ Pre-Deployment Checklist

- [ ] `npm run build` succeeds locally
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] All environment variables configured
- [ ] API endpoint is accessible and CORS-enabled
- [ ] `.env.local` not committed to git (in .gitignore)
- [ ] Test form submission locally
- [ ] CSS and animations render correctly
- [ ] File upload works
- [ ] Mobile responsive checked
- [ ] API fallback tested (disconnect network)

---

## 🔍 Testing in Production

### Manual Testing Checklist

1. **Form Navigation**
   - [ ] All 6 steps load
   - [ ] Validation prevents invalid progression
   - [ ] Step indicators update correctly
   - [ ] Edit links from ReviewStep work

2. **Form Data**
   - [ ] All fields accept input
   - [ ] Character counters work
   - [ ] Dropdowns show options
   - [ ] Date picker functions

3. **File Upload**
   - [ ] CV upload works
   - [ ] File preview shows
   - [ ] Invalid files rejected
   - [ ] Size limit enforced

4. **Validation**
   - [ ] Email validation works
   - [ ] Age calculation correct
   - [ ] Required fields enforced
   - [ ] Error messages display

5. **Animations**
   - [ ] Page load animation smooth
   - [ ] Step transitions fluid
   - [ ] Track cards hover smoothly
   - [ ] Success confetti displays

6. **API Integration**
   - [ ] Form submission succeeds
   - [ ] Reference code generates
   - [ ] Success screen displays
   - [ ] Email confirmation sent

7. **Responsiveness**
   - [ ] Mobile layout correct (< 640px)
   - [ ] Tablet layout optimal (640-1024px)
   - [ ] Desktop full featured (> 1024px)
   - [ ] Touch interactions work

8. **Performance**
   - [ ] Initial load < 2s
   - [ ] No layout shifts
   - [ ] Animations at 60fps
   - [ ] No console errors

### Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 🐛 Post-Deployment Monitoring

### Set Up Monitoring

1. **Error Tracking** (Sentry recommended)
   ```bash
   npm install @sentry/nextjs
   # Configure in next.config.js
   ```

2. **Analytics** (Google Analytics recommended)
   - Track form step completions
   - Track submission success rate
   - Monitor error rates

3. **Performance Monitoring**
   - Web Vitals (Lighthouse)
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)

### Log Important Events

```typescript
// Track in your analytics
- User reaches each step
- Validation errors
- File upload success/failure
- Form submission success/failure
- API errors
```

---

## 🔒 Security in Production

### API Security

```bash
# Ensure API has:
- ✅ CORS enabled for your domain
- ✅ Rate limiting (429 handling already in code)
- ✅ Input validation on server
- ✅ File upload restrictions
- ✅ Authentication if needed
```

### Frontend Security

```typescript
// Already implemented:
- ✅ Input sanitization
- ✅ File type validation
- ✅ File size limits
- ✅ No sensitive data in client storage
- ✅ HTTPS enforcement
```

### Environment Variables

```bash
# Never commit:
- .env.local
- .env.production.local
- Any API keys or secrets

# Always use:
- NEXT_PUBLIC_ prefix only for public variables
- Server environment variables for secrets
```

---

## 🚨 Troubleshooting Deployment

### Issue: Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Issue: 404 on /internships/apply

```
Check:
- File exists at src/app/internships/apply/page.tsx
- Build succeeded
- Server restarted after deployment
```

### Issue: API Not Responding

```
Check:
- NEXT_PUBLIC_API_BASE_URL correct in .env
- API server is online
- CORS enabled on API
- Network requests in browser DevTools
```

### Issue: Styles Not Applied

```bash
# Tailwind CSS not generating
rm -rf .next
npm run build
# Check globals.css is imported in layout.tsx
```

### Issue: Form Data Lost After Refresh

```
Check:
- Session storage enabled (not private browsing)
- localStorage not blocked by browser
- JavaScript enabled
- No console errors
```

---

## 📊 Deployment Checklist by Platform

### Vercel
- [ ] GitHub account connected
- [ ] Repository imported
- [ ] Environment variables set
- [ ] Build settings correct
- [ ] Deploy preview tested
- [ ] Production deployed

### Self-Hosted (Ubuntu/Debian)
- [ ] Node.js 18+ installed
- [ ] npm dependencies installed
- [ ] Build successful
- [ ] PM2/systemd configured
- [ ] Nginx/Apache configured
- [ ] SSL certificate installed
- [ ] Domain DNS configured

### Docker
- [ ] Dockerfile created
- [ ] Docker build succeeds
- [ ] Container runs locally
- [ ] docker-compose up works
- [ ] Environment variables loaded
- [ ] Volume mounts correct

---

## 🎯 Optimization for Production

### Build Optimization

```javascript
// next.config.js
module.exports = {
  swcMinify: true,          // Faster builds
  compress: true,           // Gzip compression
  poweredByHeader: false,   // Remove X-Powered-By
  productionBrowserSourceMaps: false, // Smaller builds
};
```

### Performance Tips

1. **CDN for Static Assets**
   - Upload `public/` to CDN
   - Serve images via CDN

2. **Caching Strategy**
   - Cache API responses (5 min)
   - Cache static files (1 year)

3. **Image Optimization**
   - Use Next.js Image component
   - Optimize PNG/JPEG files

---

## 📞 Support During Deployment

### If Something Goes Wrong

1. Check deployment logs
2. Verify environment variables
3. Test API endpoint manually
4. Check browser console for errors
5. Review git logs for recent changes

### Rollback Strategy

```bash
# If deployed to Vercel
vercel rollback

# If self-hosted
# Keep previous build backed up
# Switch back to previous .next build

# If Docker
docker-compose down
docker pull latest-stable
docker-compose up -d
```

---

## ✅ Success Checklist

After deployment, verify:

- [ ] Form accessible at `/internships/apply`
- [ ] All 6 steps load correctly
- [ ] Form submission succeeds
- [ ] Reference code displays
- [ ] Confetti animation plays
- [ ] Responsive design works
- [ ] No console errors
- [ ] API integration works
- [ ] Success email received
- [ ] Analytics tracking works

---

## 📈 Post-Launch Tasks

1. **Monitor for Errors**
   - Set up error alerts
   - Review Sentry/error logs daily

2. **Track Analytics**
   - Monitor form completion rates
   - Track drop-off points
   - Analyze submission patterns

3. **Gather Feedback**
   - Monitor support emails
   - Collect user feedback
   - Track bug reports

4. **Optimize**
   - Fix reported issues
   - Improve form based on data
   - Enhance animations if needed

---

**Deployment Ready**: ✅ YES

Your internship application form is ready to deploy to production!

Choose your hosting platform above and follow the steps. If you need help, refer to the documentation or check deployment logs for specific errors.

🚀 **Good luck with your deployment!**
