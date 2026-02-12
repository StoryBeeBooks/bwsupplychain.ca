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

## Project Structure
This is how your files are organized now:

```
bwsupplychain/
├── components/       <-- Reusable parts
│   ├── header.html
│   └── footer.html
├── css/             <-- Styles
│   └── styles.css
├── js/              <-- Scripts
│   └── main.js
├── index.html       <-- Home Page
├── showcase.html    <-- Capabilities Page
├── faq.html         <-- FAQ Page
└── policy.html      <-- Legal/Policy Page
```
