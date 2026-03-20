# Email Setup Guide - EmailJS

## ✅ What's Been Done
- ✓ Installed `@emailjs/browser` package
- ✓ Updated `AboutContact.jsx` with email functionality
- ✓ Added loading states and success/error messages
- ✓ Created `.env.example` template

## 📋 Setup Instructions

### Step 1: Create EmailJS Account
1. Go to **[emailjs.com](https://www.emailjs.com)** → Sign up (Free!)
2. Verify your email

### Step 2: Setup Email Service
1. Go to **Dashboard** → **+Add Service**
2. Select **Gmail** (or your email provider)
3. Click "Connect Gmail Account" and authorize
4. Complete the setup
5. **Copy your Service ID** (format: `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** → **+Create New Template**
2. Set **Subject**: `New Message from {{name}}`
3. Set **Content**:
```
From: {{name}} ({{email}})

Message:
{{message}}
```
4. Save and **Copy Template ID** (format: `template_xxxxx`)

### Step 4: Get Your Public Key
1. Go to **Account** tab on top right
2. **Copy Public Key** (format: `abc123xyz...`)

### Step 5: Add Credentials to Your Project
1. Create `.env.local` file in your project root (next to `package.json`)
2. Add:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### Step 6: Test It!
1. Run `npm run dev`
2. Go to the contact form
3. Submit a test message
4. You should receive the email at `prashantkafle7738@gmail.com`

## 🔒 Security Note
- Never commit `.env.local` to GitHub (it's in `.gitignore`)
- Keep your keys secret!

## 📧 What Happens When Someone Submits
1. Form data is sent to EmailJS servers (secure)
2. EmailJS connects to your Gmail account
3. Email is sent to you from the visitor's email
4. You get a success/error message in the browser
5. Form resets automatically on success

## ❓ Troubleshooting
- **"Failed to send" error**: Check your env variables are correct
- **Email not received**: Check Gmail/spam folder, verify template ID
- **"Invalid Public Key"**: Copy the full key from Account page

## 🚀 What's Next
Once working, you can:
- Customize email template styling
- Add email CC/BCC
- Set up auto-replies
- Track email opens (premium feature)
