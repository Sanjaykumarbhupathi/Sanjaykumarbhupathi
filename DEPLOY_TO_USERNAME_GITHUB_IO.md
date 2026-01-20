# Deploy to USERNAME.github.io

Your portfolio is configured to deploy to `https://USERNAME.github.io` 🚀

## Steps to Deploy Your Existing Repository

### Step 1: Remove Old Repository Association

```bash
# Navigate to your portfolio folder
cd /Users/sanjay/Desktop/personal/portfolio

# Remove the old remote (if it exists)
git remote remove origin
```

### Step 2: Connect to Your USERNAME.github.io Repository

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Or if you prefer SSH:
git remote add origin git@github.com:YOUR_USERNAME/YOUR_USERNAME.github.io.git
```

### Step 3: Add All Changes and Commit

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio deployment to GitHub Pages"
```

### Step 4: Push to Repository

```bash
# Push to main branch
git push -u origin main

# Note: If your existing repo uses 'master', use:
# git push -u origin master
```

### Step 5: Verify Deployment

The GitHub Actions workflow will automatically:
1. Build your project
2. Export static files to `/out`
3. Deploy to `gh-pages` branch

**Your site will be live at:** `https://YOUR_USERNAME.github.io`

Visit the **Actions** tab in your GitHub repository to see the deployment progress.

## Configuration Details

### What's Configured ✅

- ✅ **No basePath** - Direct deployment to root
- ✅ **Static export** - Pure HTML/CSS/JS (no server needed)
- ✅ **GitHub Actions** - Automatic deployment on every push
- ✅ **Trailing slashes** - Clean URLs
- ✅ **Image optimization disabled** - Works with static export

### Build Output

The build process creates:
- `/out` directory with static HTML files
- Optimized CSS and JavaScript bundles
- Static resume PDF accessible at root

## Important Notes

### Repository Name Requirements

For `https://USERNAME.github.io` to work:

**✅ Repository must be named exactly:**
```
USERNAME.github.io
```

**NOT:**
```
portfolio (incorrect)
username-portfolio (incorrect)
```

### Existing Repository

If you already have a repository:

```bash
# Check current remote
git remote -v

# Remove old remote
git remote remove origin

# Add new one
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Verify
git remote -v
```

### First Deployment Notes

1. GitHub Actions will run automatically
2. First build takes 2-5 minutes
3. Check Actions tab for build logs
4. Site appears at `https://USERNAME.github.io` once complete
5. Subsequent deployments are faster (1-2 minutes)

## Commands Reference

```bash
# Local development
npm run dev

# Production build (creates /out folder)
npm run build

# View your site locally
npm start

# Lint code
npm run lint

# Format code
npm run format
```

## Troubleshooting

### Site Not Appearing

1. Verify repository name is `USERNAME.github.io`
2. Check Actions tab for build errors
3. Wait 3-5 minutes after first push
4. Clear browser cache

### GitHub Actions Failed

Check the Actions tab:
```
Settings → Pages should show:
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)
```

### Links/Styling Broken

Since there's no basePath:
- All links should work from root
- Resume PDF loads from `/Bhupathi_Sanjay_Kumar_Resume.pdf`
- No need for relative path adjustments

## Need Help?

1. Check `.github/workflows/deploy.yml` for workflow config
2. See `next.config.ts` for Next.js settings
3. Visit [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Ready to deploy?**

```bash
git push origin main
```

Your portfolio will be live in minutes! 🎉
