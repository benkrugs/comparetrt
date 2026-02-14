# Email Capture Setup Guide

## ✅ EASIEST: Netlify Forms (Already Set Up!)

I've created a Netlify Forms component that's ready to use. **No extra setup needed** - just deploy and it works!

### How It Works:
1. **Deploy your site** to Netlify (or rebuild if already deployed)
2. **Go to Netlify Dashboard** → Your Site → Forms tab
3. **Emails appear there** automatically when people submit
4. **Export to CSV** or integrate with Zapier/Mailchimp later

### Where Emails Go:
- Netlify Dashboard (Forms section) - view, export, download CSV
- Optional: Set up email notifications when forms are submitted
- Optional: Connect to Zapier to auto-add to Mailchimp/ConvertKit

### Current Implementation:
- Form name: `retatrutide-waitlist`
- Fields: email only (keeps it simple)
- Spam protection: Built-in honeypot field
- Location: Component created at `src/components/RetatrutideEmailCapture.astro`

### To Replace Placeholder Forms:
The 5 peptide pages currently have placeholder Mailchimp forms. To switch to Netlify Forms:

**Option A: Use the component (cleanest)**
```astro
---
import RetatrutideEmailCapture from '../../components/RetatrutideEmailCapture.astro';
---

<!-- Replace the email-capture div with: -->
<RetatrutideEmailCapture />
```

**Option B: Use inline (if you need custom styling)**
Just replace the `<form action="https://compareweightmeds.us12...` with:
```html
<form 
  name="retatrutide-waitlist" 
  method="POST" 
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="retatrutide-waitlist" />
  <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>
  <!-- Your existing form fields -->
</form>
```

---

## Alternative: Mailchimp (If You Prefer)

If you want to use Mailchimp instead:

1. **Create a Mailchimp account** (free up to 500 subscribers)
2. **Create an audience** for "Retatrutide Waitlist"
3. **Get the form code:**
   - Go to Audience → Signup forms → Embedded forms
   - Copy the form action URL (looks like: `https://compareweightmeds.us12.list-manage.com/subscribe/post`)
   - Copy the `u` and `id` values
4. **Replace placeholders** in the 5 peptide pages:
   - Find: `value="YOUR_MAILCHIMP_U_ID"`
   - Replace with: `value="actual_u_value_from_mailchimp"`
   - Same for `YOUR_MAILCHIMP_LIST_ID`

---

## Alternative: Google Sheets (Free, No Account Needed)

Use a Google Form that saves to a Sheet:

1. **Create a Google Form** with email field only
2. **Link to a Google Sheet** (Responses → Link to Sheets)
3. **Get the form pre-fill link:**
   - Click the 3-dot menu → Get pre-filled link
   - Fill in email field, click "Get Link"
   - Copy the URL
4. **Use the form URL** in your HTML forms:
```html
<form action="YOUR_GOOGLE_FORM_URL" method="POST" target="_blank">
  <input name="entry.YOUR_ENTRY_ID" type="email" required>
  <button type="submit">Notify Me</button>
</form>
```

---

## Recommendation

**Use Netlify Forms (Option 1)** - it's already set up, requires zero configuration, and you can export emails or connect to Mailchimp later via Zapier if needed.

**Setup Time:**
- Netlify Forms: 0 minutes (already done!)
- Mailchimp: 10-15 minutes
- Google Sheets: 15-20 minutes

---

## Next Steps After Email Capture Is Live

1. **Test it:** Submit a test email and verify it appears in Netlify dashboard
2. **Set up notifications:** Netlify can email you when forms are submitted
3. **Export regularly:** Download CSV of emails weekly
4. **Import to Mailchimp later:** When you have 100+ emails, create a proper email list
5. **Send update emails:** When retatrutide news breaks (Phase 3 results, FDA submission, approval)

---

## Email Campaign Ideas (For Later)

Once you have 500+ emails:
- **Monthly updates:** Phase 3 trial results, FDA timeline changes
- **Educational content:** "Preparing for retatrutide launch" tips
- **Current alternatives:** "Can't wait? Here's how tirzepatide compares"
- **Launch announcement:** "Retatrutide is FDA approved! Here's how to get it"
- **Provider launches:** "MEDVi now offers retatrutide for $X/month"

Expected email list size by FDA approval: **5,000-15,000 subscribers** (with proper SEO traffic)
