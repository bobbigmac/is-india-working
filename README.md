# Is India Working Right Now?

A simple web tool that shows whether it's currently working hours in India. Useful for anyone working with Indian colleagues or services across different time zones.

## Purpose

Many AI companies experience peak usage during Indian working hours, leading to:
- Slower response times
- Reduced quality of text generation
- Higher error rates

This tool helps you plan your AI usage around these peak times by showing:
- Your local time
- Current time in India (IST)
- Whether Indian offices are currently working
- Time until the next status change (start/end of work day)

## Features

- Shows current time in your local timezone and IST
- Displays working status in real-time
- Accounts for Indian public holidays
- Calculates time until next status change
- Works entirely client-side - no data is shared

## Technical Details

- Working hours: 9:00 AM to 6:00 PM IST, Monday to Friday
- Handles timezone conversion including DST
- India is UTC+5:30
- Runs entirely in the browser
- Hosted on GitHub Pages

## Deployment

To deploy to GitHub Pages:

1. Build the project locally:
   ```
   yarn build
   ```
   This will generate the site in the `docs` directory.

2. Commit and push the `docs` directory to your GitHub repository:
   ```
   git add docs
   git commit -m "Update build for GitHub Pages"
   git push
   ```

3. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set "Source" to "Deploy from a branch"
   - Select your main branch
   - Set the folder to `/docs`
   - Click Save

4. Your site will be available at: `https://bobbigmac.github.io/is-india-working/`

Note: The `.nojekyll` file in the `docs` directory ensures that GitHub Pages doesn't process your files with Jekyll, which is important for properly serving the Parcel build.

