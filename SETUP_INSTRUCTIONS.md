# Setup Instructions for Vivo's Balls Website

## Prerequisites
- Node.js 18+ installed (download from https://nodejs.org/)

## Step-by-Step Setup

### 1. Install Node.js (if not already installed)
- Visit https://nodejs.org/
- Download the LTS version
- Run the installer with default settings
- Restart your terminal/PowerShell

### 2. Open Terminal/PowerShell in Project Folder
- Navigate to: `C:\Users\justi\OneDrive\Vivo's Balls`
- Or right-click in the folder and select "Open in Terminal" / "Open PowerShell here"

### 3. Install Dependencies
Run this command:
```bash
npm install
```
This will download all the required packages (Next.js, React, etc.)
- **Time**: Takes 2-5 minutes depending on your internet speed
- **What you'll see**: Lots of package names scrolling by - this is normal!

### 4. Start the Development Server
Once installation is complete, run:
```bash
npm run dev
```

### 5. View Your Website
- Open your web browser
- Go to: **http://localhost:3000**
- You should see your website!

## What You'll See

When you run `npm run dev`, you'll see:
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000
```

## Making Changes

- Edit any file in the `app/` or `components/` folders
- Save the file
- The website will automatically refresh in your browser!

## Stopping the Server

- Press `Ctrl + C` in the terminal to stop the development server

## Building for Production

When you're ready to deploy:
```bash
npm run build
npm start
```

## Troubleshooting

### "node is not recognized"
- Node.js isn't installed or not in your PATH
- Reinstall Node.js and restart your terminal

### "npm install" fails
- Check your internet connection
- Try deleting `node_modules` folder and `package-lock.json` (if they exist)
- Run `npm install` again

### Port 3000 already in use
- Another app is using port 3000
- Stop that app, or run: `npm run dev -- -p 3001` (uses port 3001 instead)

## Need Help?

Check the main README.md file for more details about the project structure.



