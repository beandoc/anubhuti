# How to Triage and Host on GoDaddy (anubhuti.net)

## Part 1: Verify Build (Done)
We have successfully built your project. The production-ready files are located in the `dist/` folder.
- **Build Status:** ✅ Success
- **Output Folder:** `dist/` (contains `index.html`, `assets/`, etc.)

## Part 2: Hosting on GoDaddy

### Option A: Hosting with GoDaddy's cPanel (Standard Way)
If you bought a "Web Hosting" plan (Linux/cPanel) along with your domain logic is straightforward:

1.  **Prepare your files:**
    - Open your project folder on your computer.
    - Go into the `dist` folder.
    - Select ALL files (`index.html`, `assets`, etc.).
    - Right-click and **Compress** (Zip) them into a file named `anubhuti-site.zip`.

2.  **Upload to GoDaddy:**
    - Log in to your [GoDaddy Account](https://sso.godaddy.com/).
    - Go to **My Products** > **Web Hosting** > **Manage**.
    - Click on **cPanel Admin**.
    - Open **File Manager**.
    - Navegate to the **`public_html`** folder.
    - Delete any default files (like `default.html` or `cgi-bin`) if you want a clean slate.
    - Click **Upload** and select your `anubhuti-site.zip`.

3.  **Go Live:**
    - Once uploaded, right-click `anubhuti-site.zip` in File Manager and select **Extract**.
    - Ensure the files (`index.html`, etc.) are directly in `public_html`, not inside a subfolder.
    - Visit `anubhuti.net`!

### Option B: Hosting with DNS Pointer (Better Performance)
If you prefer faster global hosting (like Vercel or Netlify) but want to use your GoDaddy domain:

1.  **Deploy to Netlify/Vercel:**
    - Drag and drop your `dist` folder to [Netlify Drop](https://app.netlify.com/drop).
    - It will give you a URL like `anubhuti-gastro.netlify.app`.

2.  **Point GoDaddy Domain:**
    - Go to GoDaddy **DNS Management** for `anubhuti.net`.
    - Add a **CNAME** record:
        - Host: `www`
        - Points to: `anubhuti-gastro.netlify.app`
    - Add an **A Record** (for the root domain) pointing to Netlify's load balancer IP (check Netlify docs for current IP).

## Troubleshooting 404s
If you visit the site and sub-pages don't work on refresh:
- Create a file named `.htaccess` in your `public_html` folder.
- Add this code to handle routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
