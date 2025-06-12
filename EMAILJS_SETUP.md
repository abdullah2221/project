# EmailJS Setup Guide for HA Super Store

## Overview
This guide will help you set up EmailJS to handle form submissions from your static React site. EmailJS allows you to send emails directly from the frontend without a backend server.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended for your use case)
4. Connect your Gmail account (abdullahr797@gmail.com)
5. Note down the **Service ID** (format: service_xxxxxxx)

## Step 3: Create Email Templates

### Contact Form Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Name it: "Contact Form Template"
4. Use this template:

**Subject:** New Contact Form Submission - HA Super Store

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 5px; }
        .timestamp { font-size: 12px; color: #666; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Form Submission</h1>
            <p>HA Super Store - Customer Inquiry</p>
        </div>
        
        <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">{{from_email}}</div>
        </div>
        
        <div class="field">
            <div class="label">📞 Phone:</div>
            <div class="value">{{from_phone}}</div>
        </div>
        
        <div class="field">
            <div class="label">📋 Subject:</div>
            <div class="value">{{subject}}</div>
        </div>
        
        <div class="field">
            <div class="label">💬 Message:</div>
            <div class="value">{{message}}</div>
        </div>
        
        <div class="timestamp">
            <strong>Submitted:</strong> {{timestamp}}<br>
            <strong>Store:</strong> {{store_name}}
        </div>
    </div>
</body>
</html>
```

5. Save the template and note down the **Template ID** (format: template_xxxxxxx)

### Newsletter Subscription Template
1. Create another template named "Newsletter Subscription"
2. Use this template:

**Subject:** New Newsletter Subscription - HA Super Store

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 5px; }
        .timestamp { font-size: 12px; color: #666; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📬 New Newsletter Subscription</h1>
            <p>HA Super Store - Email List</p>
        </div>
        
        <div class="field">
            <div class="label">📧 Subscriber Email:</div>
            <div class="value">{{subscriber_email}}</div>
        </div>
        
        <div class="timestamp">
            <strong>Subscribed:</strong> {{subscription_date}}<br>
            <strong>Store:</strong> {{store_name}}
        </div>
    </div>
</body>
</html>
```

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (format: xxxxxxxx_xxxxxxxxxxxxxxxx)

## Step 5: Update Your Code
Replace the placeholder values in your code:

### In `src/pages/Contact.tsx`:
```javascript
// Replace these values:
emailjs.init("YOUR_PUBLIC_KEY"); // Your actual public key
'YOUR_SERVICE_ID', // Your service ID
'YOUR_TEMPLATE_ID', // Your contact form template ID
```

### In `src/components/Footer.tsx`:
```javascript
// Replace these values:
emailjs.init("YOUR_PUBLIC_KEY"); // Your actual public key
'YOUR_SERVICE_ID', // Your service ID
'YOUR_NEWSLETTER_TEMPLATE_ID', // Your newsletter template ID
```

## Step 6: Test Your Setup
1. Start your development server: `npm run dev`
2. Go to the Contact page and submit a test form
3. Check your email (abdullahr797@gmail.com) for the test message
4. Test the newsletter subscription in the footer

## Configuration Example
Here's what your final configuration should look like:

```javascript
// Example configuration (replace with your actual values)
emailjs.init("user_abc123def456ghi789"); // Your public key

// Contact form
const response = await emailjs.send(
  'service_contact123', // Your service ID
  'template_contact456', // Your contact template ID
  templateParams
);

// Newsletter subscription
const response = await emailjs.send(
  'service_contact123', // Same service ID
  'template_newsletter789', // Your newsletter template ID
  templateParams
);
```

## Free Plan Limits
- EmailJS free plan includes 200 emails per month
- Perfect for small to medium businesses
- Upgrade to paid plans for more emails

## Security Notes
- Public key is safe to expose in frontend code
- Service and template IDs are also safe for frontend use
- EmailJS handles all security on their servers

## Troubleshooting
1. **Emails not sending**: Check browser console for errors
2. **Template variables not working**: Ensure variable names match exactly
3. **Service connection issues**: Reconnect your Gmail account in EmailJS dashboard

## Alternative Solutions
If EmailJS doesn't work for you, consider:
1. **Formspree**: Simple form handling service
2. **Netlify Forms**: If hosting on Netlify
3. **Google Forms**: Embed Google Forms
4. **WhatsApp Business API**: For direct WhatsApp integration

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Community: https://community.emailjs.com/
- Your feedback email: abdullahr797@gmail.com 