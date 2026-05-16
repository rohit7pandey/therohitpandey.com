# therohitpandey.com

Personal website of Rohit Pandey — poet, writer.

**Tagline:** मैं, मेरी आवाज़ और मेरे बिखरे अलफ़ाज़

---

## Tech Stack

- **Frontend:** React + Vite
- **Routing:** React Router v6
- **Fonts:** Cormorant Garamond + Noto Serif Devanagari + DM Mono
- **Hosting:** Cloudflare Pages (connected to GitHub)

---

## Local Development

```bash
# Install dependencies
cd client
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev
```

---

## Add a New Poem

Open `client/src/data/poems.js` and add a new object to the `poems` array:

```js
{
  id: 6,                          // unique number, increment from last
  title: "कविता का शीर्षक",
  lines: [
    "पहली पंक्ति यहाँ लिखें,",
    "दूसरी पंक्ति यहाँ।",
    "",                           // empty string = stanza break
    "नया बंद शुरू होता है।",
  ],
  tags: ["टैग1", "टैग2"],
  date: "2024",
}
```

Save the file, done. No backend needed.

---

## Deploy to Cloudflare Pages

### First time setup:
1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect GitHub → select this repo
4. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `cd client && npm install && npm run build`
   - **Build output directory:** `client/dist`
5. Click Deploy

### After that, every `git push` auto-deploys ✓

---

## Connect Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io/) → create free account
2. Create a new form → copy the form ID
3. Open `client/src/pages/Contact.jsx`
4. Replace `YOUR_FORM_ID` with your actual ID:
   ```js
   const res = await fetch('https://formspree.io/f/YOUR_ACTUAL_ID', ...)
   ```

---

## Custom Domain (therohitpandey.com)

In Cloudflare Pages → Settings → Custom domains → Add `therohitpandey.com`

Since domain is already on Cloudflare, it will auto-configure DNS.

---

## Project Structure

```
therohitpandey/
├── client/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── _redirects        ← important for SPA routing on Cloudflare
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx + .css
│   │   │   └── Footer.jsx + .css
│   │   ├── pages/
│   │   │   ├── Home.jsx + .css
│   │   │   ├── Poems.jsx + .css
│   │   │   ├── PoemDetail.jsx + .css
│   │   │   ├── About.jsx + .css
│   │   │   └── Contact.jsx + .css
│   │   ├── data/
│   │   │   └── poems.js      ← EDIT THIS to add poems
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## URLs

| Page | URL |
|------|-----|
| Home | `/` |
| All Poems | `/kavitaayein` |
| A Poem | `/kavitaayein/1` |
| About | `/parichay` |
| Contact | `/sampark` |
