# How to Deploy Your HTML Website to GitHub Pages

Since we switched from React to pure HTML/CSS, the deployment process is much simpler! You **do not** need to run build commands or install complex tools.

## Step 1: Push Your Code
You just need to push these new files to GitHub.

Open your terminal and run:

```bash
# 1. Add all new files
git add .

# 2. Commit the changes
git commit -m "Rebuild site with pure HTML/CSS"

# 3. Push to GitHub
git push origin main
```

*(Note: If you get an error about "rejected" or "updates were rejected", you might need to force it since we completely changed the project structure: `git push origin main --force`)*

## Step 2: Configure GitHub Pages

1. Go to your repository link: [https://github.com/StoryBeeBooks/bwsupplychain.ca](https://github.com/StoryBeeBooks/bwsupplychain.ca)
2. Click **Settings** (top right tab).
3. Click **Pages** (on the left sidebar).
4. Under **"Build and deployment"**:
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Select `main` and folder `/(root)`.
   - Click **Save**.

## Step 3: Check Your Site

It usually takes about 1-2 minutes for GitHub to update.

- **URL**: `https://StoryBeeBooks.github.io/bwsupplychain.ca/`

## Troubleshooting

### "The site is plain text/ugly" (CSS not loading)
- Make sure your folder structure is correct on GitHub. You should see a `css` folder and `styles.css` inside it.
- Try a "Hard Refresh" in your browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac).

### "Header/Footer not showing"
- This site uses a small script to load the header and footer. If you are viewing the file locally by double-clicking `index.html`, Chrome might block this for security (CORS policy).
- **Solution**: It will work perfectly once uploaded to GitHub. To preview locally, you need a "Live Server" extension in VS Code.

## Project Structure (current)
This is how your files are organized now (directory-based routing):

```
bwsupplychain/
├── components/            <-- Reusable parts (header/footer)
│   ├── header.html
│   └── footer.html
├── css/                   <-- Styles
│   └── styles.css
├── js/                    <-- Scripts
│   └── main.js
├── index.html             <-- Home Page
├── showcase/              <-- Showcase directory (index.html)
├── faq/                   <-- FAQ directory (index.html)
├── policy/                <-- Policy directory (index.html)
├── product-sourcing/      <-- Product Sourcing page (index.html)
├── commodity-sourcing/    <-- Commodity Sourcing page (index.html)
├── china-operations/      <-- China Operations page (index.html)
└── contact/               <-- Contact page (index.html)
```

## Recent Updates (Feb 17, 2026)

- Added a tabbed Policies page at `/policies/` with Terms of Use, Privacy Policy, Disclaimer, Web Accessibility, and Cookies Policy.
- Created and verified the FAQ page at `/faq/` and ensured footer quick-link points to `/faq/`.
- Expanded the Market Access Model on `/commodity-sourcing/` with detailed stages (Demand Verification, Specification Alignment, Commercial Structuring, Supplier Selection, Execution Oversight) and application notes.
- Updated hero background images for `/product-sourcing/`, `/commodity-sourcing/`, and `/china-operations/` to improve visual context (external CDN images used).
- Removed hero CTA buttons from the three capability pages and the inline "View Market Access Model" CTA on `/commodity-sourcing/` per content direction.
- Layout fix: updated `css/styles.css` so `.service-card` is a column flex container and `.service-card .btn` is pushed to the bottom; CTAs now align across cards.

All updates have been committed and pushed to the `main` branch. Review the live site or repo to confirm content and visual updates.


Notes:
- Header and footer are loaded dynamically via `js/main.js` using absolute paths (`/components/header.html`) so they render correctly from any subdirectory.
- Mobile menu and responsive breakpoints are implemented in `css/styles.css` and `js/main.js` (hamburger toggle, overlay, auto-close on resize).
 - Header and footer are loaded dynamically via `js/main.js` using absolute paths (`/components/header.html`) so they render correctly from any subdirectory.
 - Footer quick links use directory-based routing (e.g., `/showcase/`, `/faq/`, `/policy/`) so they resolve correctly on GitHub Pages.
 - Mobile menu and responsive breakpoints are implemented in `css/styles.css` and `js/main.js` (hamburger toggle, overlay, auto-close on resize).

5. **Legal & Compliance**
    - **Protective Content:** Legal documents (Terms, Privacy, Disclaimers) are written with strong protective clauses ("As-Is", Limitation of Liability, Indemnification) to minimize organizational risk.
    - **Modular Structure:** Legal content is organized in deeply nested tabs within `/policy/index.html` for clean UX, separating distinct legal areas without cluttering navigation.
    - **Qualified Commitments:** Operational promises (e.g., accessibility, data retention) are qualified with phrases like "reasonable efforts" and "to the extent practicable" to avoid strict liability.
