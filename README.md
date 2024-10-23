# EXPLACE_RP_Website
A shared repository for the team developing Regionport's website.

# Setup Next.js Project( Existing Repository ):

1: Clone the repository from GitHub:

```
git clone https://github.com/explace/IshikawaSake_DesignWeb
```
2: Navigate to the project directory:

```
cd your-repo-name
```
3: Install dependencies:

```
npm install
```
4: To run the application in development mode:

```
npm run dev
```

# To make changes in the project:

## Here’s a breakdown of the footer.js component for example and a guide on how to modify or make changes to it:

### Component Overview:

***Bilingual Support:*** The content toggles between English and Japanese based on the lang state from the Redux store (state.reducer1.lang).<br/>
***Smooth Scroll***: The handleScrollToElement function scrolls smoothly to a specific section when clicking on an element.<br/>
***Social Media Links***: Includes icons for Instagram, X (formerly Twitter), Facebook, and YouTube, with links to external profiles.<br/>
***Responsiveness***: The footer adjusts based on screen size, with specific bottom offsets and styles applied dynamically based on the language and screen size.<br/>
***Content Structure***: Includes sections for sitemap links, store info, product info, and a disclaimer about alcohol consumption.<br/>

### Steps to Modify the Footer:
1. Modify Language Content (Bilingual Support):
If you need to update any text that appears in both languages:

Locate the sections where the content is wrapped with a ternary operator (lang === "en" ?).
For example, if you want to change the "Sitemap" text in both languages:
```
<p className="vertical-text relative top-4 mr-2 text-base lg:text-lg text-stone-400">
  {lang === "en" ? (
    <span className="en-vertical-text">Sitemap</span>
  ) : (
    "サイトマップ"
  )}
</p>
```

Modify the English and Japanese text inside the ternary condition.

2. Update Social Media Links
The social media icons are linked using the FaInstagram, FaXTwitter, FaFacebook, and FaYoutube components. If you need to change any of the URLs:

Locate the <Link> components:
```
<Link href={"https://www.instagram.com/gotembaishikawashuzo/"} target="_blank">
  <FaInstagram />
</Link>
```
Simply replace the URL inside the href attribute with the new link.

3. Adjust Smooth Scroll Behavior
The smooth scroll function handleScrollToElement uses the requestAnimationFrame API to animate scrolling to a section.

If you want to adjust the scrolling speed or offset:

Duration: Modify the duration variable inside the function to make the scroll faster or slower:
```
const duration = 1000; // Adjust this value
Offset: You can change the scroll offset (space above the target element):
const offset = -10; // Adjust this value to increase/decrease scroll offset
```
4. Modify Styles
If you need to update the styling (e.g., margin, padding, font size), locate the relevant class names in the JSX and adjust the CSS or Tailwind classes.

For example:

To change the padding of the whole footer:
```
<div className="w-full mt-20 p-2 sm:p-6 lg:p-12 2xl:p-24 grid lg:flex justify-evenly relative">
```
Here you can adjust the p-2 sm:p-6 lg:p-12 2xl:p-24 values.

5. Add or Remove Links
If you need to add a new link or remove an existing one:

Locate the block of code where the links are:
```
<p className="vertical-text relative top-4 mr-2 text-base lg:text-lg text-stone-400">
  {lang === "en" ? (
    <span className="en-vertical-text">Stores</span>
  ) : (
    "取扱店舗"
  )}
</p>
```
To add a new link, copy one of the existing <p> blocks and modify the text inside. To remove, simply delete the relevant <p> block.

6. Test Changes Locally
After making the changes, run the development server:

```
npm run dev
```

Check the footer at ***http://localhost:3000/locationPage*** and verify that your modifications work correctly across different screen sizes and in both languages.

7. Commit and Deploy Changes
Once satisfied with the updates:

Stage the changes:

```
git add .
```

Commit the changes:
```
git commit -m "Update footer component with new links and styling"
```
Push the changes to the repository:
```
git push origin your-branch-name 
```
or
```
 git push -u origin main (to main branch)
```

#### Deployment to Vercel:

Import the GitHub repository into Vercel and deploy.

Deploy and Maintain:

Continuously deploy updates to Vercel to ensure the project remains live and issues are identified early.



#### Git command image:
![image](https://github.com/user-attachments/assets/89696b50-a0b6-457c-9c08-92ee1b8a4fd3)


# Setup Next.js Project( From Scratch without Github Repositry):

### 1: Install Next.js using command ( on Command Prompt or Terminal ):
```
npx create-next-app@latest
```

### 2: Navigate to the project directory created with:
```
cd next-js
```

### 3: Initialize the project in the current directory with following default configurations ( as per choice of technologies ):

#### Project Configuration:

Choose **JavaScript**, **ESLint**, **Tailwind CSS**, and **App Router** when prompted.

#### Install additional dependencies ( Optional - to use this to structure your code ):
```
npm install --save-dev prettier prettier-plugin-tailwindcss
```
#### 4: Development Server:

Start the development server with:
```
npm run dev
```
Access it at ***http://localhost:3000***.

