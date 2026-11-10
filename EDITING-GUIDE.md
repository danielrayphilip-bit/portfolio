# Editing your portfolio site

Everything you'll want to change is in **one file: `content.js`**. Open it in any text editor (TextEdit in plain-text mode, Notepad, or VS Code, which is free). Save it, then refresh the page in your browser to see the change.

To preview on your own computer, double-click `index.html`. No installation needed.

## The golden rules
- Only change text **inside the quotes**: `title: "Like this",`
- Keep the commas, quotes `" "`, and brackets `[ ] { }` as they are.
- If a page goes blank after an edit, you've usually deleted a comma or a quote. Undo (Ctrl/Cmd + Z) and try again.
- If your text needs a double quote inside it, use a curly one (“ ”) instead.

## Change text
Find the text in `content.js` and edit it. For example:
- Home page headline and positioning line: `heroTitle`, `positioning`
- A project's name, description, client and year: inside that project's block under `projects`
- About page bio, experience, education, skills and awards: inside `about`

## Swap an image
Images live in folders by project:
```
images/pepsodent/01.jpg ... 09.jpg
images/bajaj/01.jpg ... 11.jpg
images/boat/01.jpg ... 08.jpg
images/sleep-mask/01.jpg ... 07.jpg
images/other/other-work.jpg
images/about/profile.jpg
```
The easiest way to swap one is to **replace the file with a new one of the same name**. Export slides from Figma at 1920 × 1080 as JPG (quality around 80%) so the site stays fast. The profile photo shows as a square, ideally 600 × 600 px or larger.

## Add, remove or reorder slides
Each project has a `slides: [ ... ]` list. Each line is one slide:
```js
{ image: "images/boat/03.jpg", title: "Neo", caption: "An open-form case ..." },
```
- **Add:** put the image in the project's folder (e.g. `images/boat/09.jpg`) and copy a slide line with the new filename. `title` and `caption` are optional.
- **Remove:** delete the whole line.
- **Reorder:** move lines up or down.
- Every line except the last one in the list needs a comma at the end.

## Add, remove or reorder projects
Projects show on the site in the order they appear in `projects: [ ... ]`. The numbering ("Project 01"…) and the "Next project" links follow that order automatically.
- **Reorder:** cut a whole project block (from its `{` to the matching `},`) and paste it where you want it.
- **Add:** copy an existing project block, give it a new `id` (lowercase letters and dashes, e.g. `"smart-helmet"`), create a folder like `images/smart-helmet/`, and update the text and image paths.
- **Remove:** delete the whole block.
- `cover` is the image used on the home page card.

## Add your LinkedIn and CV
They're hidden until you fill them in.
- **LinkedIn:** in `content.js`, find `linkedin` and paste your URL, e.g. `url: "https://www.linkedin.com/in/your-name/"`
- **CV:** put your PDF in the `files` folder (e.g. `files/Daniel-Ray-Philip-CV.pdf`) and set `cv: "files/Daniel-Ray-Philip-CV.pdf"`. A "Download CV" button then appears on the About page.
- Email and Instagram are in the same section. Leave any of them as `""` to hide it.

## Publish for free (Netlify Drop)
1. Go to **https://app.netlify.com/drop**
2. Drag the whole **`portfolio-site` folder** (or unzip `portfolio-site.zip` first) onto the page.
3. You get a live link straight away. Create a free Netlify account to keep the site and rename the address (e.g. `danielrayphilip.netlify.app`).
4. **To update later:** in Netlify, open your site → **Deploys**, and drag the updated folder in again.
5. If you want your own domain later (e.g. danielrayphilip.com), go to Netlify → **Domain management**.

## Files you can ignore
`site.js` (builds the pages), `styles.css` (colours and layout), and the `.html` files. If you want to change the accent colour or fonts, the colours are listed at the top of `styles.css`.
