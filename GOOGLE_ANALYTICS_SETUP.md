# Setting Up Google Analytics for Inthra Website

## Overview
This guide will walk you through the process of setting up Google Analytics 4 (GA4) for the Inthra website. The website is already configured to use Google Analytics through the `GoogleAnalytics.tsx` component, but you need to obtain a Measurement ID from Google Analytics and add it to your environment variables.

## Prerequisites
- A Google account
- Access to Google Analytics
- Access to the website codebase

## Steps to Set Up Google Analytics

### 1. Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/) and sign in with your Google account.
2. Click on the "Admin" gear icon in the bottom left corner.
3. In the Account column, select "Create Account" if you don't have one, or select an existing account.
4. In the Property column, click "Create Property".
5. Select "Web" as the platform.
6. Enter "Inthra" as the property name.
7. Select your reporting time zone and currency.
8. Click "Create".

### 2. Set Up a Data Stream

1. After creating the property, you'll be prompted to set up a data stream. Select "Web".
2. Enter your website URL: `https://inthradev.vercel.app/`
3. Enter a stream name (e.g., "Inthra Website").
4. Click "Create Stream".

### 3. Get Your Measurement ID

1. After creating the data stream, you'll see the stream details page.
2. Look for the "Measurement ID" at the top of the page. It should start with "G-" followed by a combination of letters and numbers (e.g., G-XXXXXXXXXX).
3. Copy this Measurement ID.

### 4. Add the Measurement ID to Your Environment Variables

1. Open the `.env.local` file in the root of your project.
2. Add your Measurement ID to the `NEXT_PUBLIC_GA_MEASUREMENT_ID` variable:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID.
3. Save the file.

### 5. Deploy Your Website

1. Commit and push your changes to your repository.
2. Deploy your website to Vercel or your preferred hosting platform.

### 6. Verify the Installation

1. After deployment, visit your website.
2. Go back to Google Analytics and navigate to "Reports" > "Realtime".
3. You should see your visit in the real-time report, confirming that Google Analytics is properly set up.

## Troubleshooting

- If you don't see data in the real-time report, check that:
  - The Measurement ID is correctly added to the `.env.local` file.
  - The website has been redeployed with the updated environment variable.
  - You don't have any ad blockers or privacy extensions that might be blocking Google Analytics.

## Additional Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9744165)
- [Next.js Environment Variables Documentation](https://nextjs.org/docs/basic-features/environment-variables)