# GitHub Pages Deployment Guide

Your portfolio is now configured for automatic deployment to GitHub Pages! 🚀

## Quick Start - Deployment in 5 Steps

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to main branch
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### Step 3: Automatic Deployment

GitHub Actions will automatically:
- Build your project when you push to `main`
- Export static files to `/out` directory
- Deploy to `gh-pages` branch
- Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

### Step 4: Verify Deployment

- Check the **Actions** tab in your GitHub repository
- Look for the "Deploy to GitHub Pages" workflow
- It should show a green checkmark ✅ when complete
- Visit your portfolio at the URL shown in the Pages settings

### Step 5: Make Updates

Simply push changes to `main` branch:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and redeploy! 🎉

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── next.config.ts              # Configured for static export
├── package.json                # With export script
├── public/
│   └── Bhupathi_Sanjay_Kumar_Resume.pdf
├── components/                 # React components
├── views/                       # Page sections
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── ...
```

## Configuration Details

### next.config.ts
- `output: "export"` - Enables static HTML export
- `basePath: "/portfolio"` - Sets the base path for GitHub Pages
- `trailingSlash: true` - Adds trailing slashes to URLs
- `images: { unoptimized: true }` - Disables Next.js image optimization

### GitHub Actions Workflow (.github/workflows/deploy.yml)
- Runs on push to `main` branch
- Uses Node.js 18
- Installs dependencies
- Builds the project
- Uploads to GitHub Pages
- Deploys automatically

## Available Scripts

```bash
# Local development
npm run dev

# Production build (static export)
npm run build

# Export to static HTML
npm run export

# Start production server
npm start

# Linting
npm run lint

# Format code
npm run format
```

## Important Notes

1. **Repository Name**: If deploying to `https://github.com/USERNAME/portfolio`, the site will be at `https://USERNAME.github.io/portfolio/`

2. **User/Organization Site**: If deploying to `https://github.com/USERNAME/USERNAME.github.io`, the site will be at `https://USERNAME.github.io/`

3. **Custom Domain**: You can add a custom domain in GitHub Pages settings

4. **Build Time**: First deployment may take 2-5 minutes

5. **Cache**: GitHub Pages may cache old versions. Clear browser cache if needed.

## Troubleshooting

### Site not appearing
- Check the Actions tab for build errors
- Ensure gh-pages branch is selected in Settings → Pages
- Wait 2-3 minutes after first deployment

### Links not working
- Verify `basePath` in `next.config.ts` matches your repository name
- Check that internal links use relative paths

### Resume PDF not loading
- Ensure `Bhupathi_Sanjay_Kumar_Resume.pdf` exists in `/public` folder
- Verify the filename matches exactly (case-sensitive on Linux servers)

## Advanced: Custom Domain

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `sanjay-portfolio.com`)
3. Follow DNS configuration instructions
4. GitHub will create a `CNAME` file automatically

## Support

For more information:
- [Next.js Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions](https://github.com/features/actions)

---

**Your portfolio is production-ready!** Push to GitHub and watch it deploy automatically. 🎯
