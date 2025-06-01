# Portfolio Deployment Guide

## Email Setup (Required for Contact Form)

Before deploying, you need to set up email functionality so the contact form can send messages to your inbox.

### 1. Create SendGrid Account
1. Go to [sendgrid.com](https://sendgrid.com) and create a free account
2. Verify your email address
3. Complete the account setup

### 2. Get SendGrid API Key
1. In SendGrid dashboard, go to Settings > API Keys
2. Click "Create API Key"
3. Choose "Restricted Access"
4. Give it a name like "Portfolio Contact Form"
5. Under "Mail Send", select "Full Access"
6. Click "Create & View"
7. Copy the API key (starts with "SG.")

### 3. Verify Sender Email
1. In SendGrid, go to Settings > Sender Authentication
2. Click "Verify a Single Sender"
3. Enter your email (beforelyf07@gmail.com)
4. Fill in your details and verify

## Local Development Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git

### Setup Steps

1. **Extract Project Files**
   - Extract the ZIP file to your desired location
   - Open the folder in VS Code

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5000`

## Deployment Options

### Option 1: Replit (Recommended - Easiest)

1. **Upload to Replit**
   - Go to [replit.com](https://replit.com)
   - Click "Create Repl" > "Import from GitHub" or "Upload files"
   - Upload your project folder

2. **Configure Environment**
   - In Replit, go to Tools > Secrets
   - Add secret: `SENDGRID_API_KEY` = your SendGrid API key

3. **Deploy**
   - Click the "Deploy" button in Replit
   - Your portfolio will be live at a `.replit.dev` URL
   - You can later connect a custom domain

### Option 2: Vercel (Free tier available)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add Environment Variables**
   - In Vercel dashboard, go to your project
   - Settings > Environment Variables
   - Add `SENDGRID_API_KEY` with your API key

### Option 3: Netlify

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

3. **Configure Environment Variables**
   - In Netlify dashboard: Site settings > Environment variables
   - Add `SENDGRID_API_KEY`

4. **Configure Functions**
   - Netlify requires serverless functions for the backend
   - The contact form API needs to be converted to a Netlify function

### Option 4: Railway

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository

2. **Add Environment Variables**
   - In Railway dashboard, add `SENDGRID_API_KEY`

3. **Deploy**
   - Railway will automatically deploy your app

### Option 5: Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Create Heroku App**
   ```bash
   heroku create your-portfolio-name
   ```

3. **Add Environment Variables**
   ```bash
   heroku config:set SENDGRID_API_KEY=your_api_key
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push heroku main
   ```

## Custom Domain Setup

### For Replit
1. Go to your Repl's deployment settings
2. Add your custom domain
3. Configure DNS records as instructed

### For Vercel/Netlify
1. In the dashboard, go to Domain settings
2. Add your custom domain
3. Update your domain's DNS records

## Testing Email Functionality

After deployment:

1. Visit your live portfolio
2. Fill out the contact form
3. Submit a test message
4. Check your email (beforelyf07@gmail.com) for the message
5. Check spam folder if not in inbox

## Troubleshooting

### Email Not Working
- Verify SendGrid API key is correct
- Check that beforelyf07@gmail.com is verified in SendGrid
- Check server logs for error messages
- Ensure environment variable is set correctly

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors in your IDE
- Verify Node.js version (18+)

### Domain Issues
- DNS changes can take 24-48 hours to propagate
- Use DNS checker tools to verify records
- Clear browser cache after DNS changes

## Performance Optimization

### Before Deployment
- Images are already optimized
- Code splitting is handled automatically
- CSS is minimized in production builds

### After Deployment
- Use a CDN for better global performance
- Enable gzip compression on your server
- Monitor performance with tools like PageSpeed Insights

## Security Considerations

- Never commit API keys to version control
- Use environment variables for all secrets
- Enable HTTPS (most platforms do this automatically)
- Keep dependencies updated

## Maintenance

### Regular Updates
- Keep npm packages updated: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Update contact information as needed
- Add new projects and skills regularly

### Monitoring
- Set up uptime monitoring (UptimeRobot, etc.)
- Monitor email delivery in SendGrid dashboard
- Check website performance regularly

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Test the contact form thoroughly
4. Check server logs for detailed error messages

Your portfolio is now ready for professional use!