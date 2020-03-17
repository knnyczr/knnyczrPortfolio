<div align="center">
  <a href="https://www.knnyczr.com">
    <img src="./data/icons/faviconBlack.svg" width="250" alt="logo" />
  </a>
</div>

# 👋 Hello nosey developer

  My name is Kenneth Cruz, I'm a plant dad 🍀 , dog dad 🐶, and aquarium enthusist 🐠. And yes I love using emojis, it adds color and tone to these boring md files 🤷‍♂️<br><br> 
  I'm from native New Yorker, I'm a graphic designer and software engineer. This is the source code for my personal portfolio, it provides a collection of my work, sculpture, print work, branding, UX/UI work and developer work.

## 😈 Gatsby

I love JavaScript! React is my main go-to tool. So I decided to work with Gatsby to showcase my work's collection. Gatsby provides lots of new age tools that spiked my interest–more to come on this topic.

## Folder Structure and Component Architecture

🏛️ In this section I'll be walking through the design architecture 

### data 📁

<details><summary> expand </summary>

1. This folder holds a *data.json*
   1. This holds all my works in an array of objects to later use in my `works/index.js` component

2. icons
   1. This folder holds my logo in a svg file for the site's favicon.
   2. It also holds the favicon log in black. 

3. Images
   1. This folder has been ignored in the .gitignore. All images are at print quality (300ppi) and should not exist on github. 
      1. landing
      2. logo
      3. self
      4. posters

</details>

## src 📁

### components 📁

> Collection of Reusable components + SCSS files

<details><summary>layout.js </summary>

  1. this has a staticQuery to get the SiteMetaData for the title of the browser tab + allFile query for the logo to be passed to header.js
  2. Passes data => Header
  3. loads {children} in main
  4. NOTE: loads layout.scss for to set consistent font, colors, and font size

</details>

<details><summary>header.js </summary>

  1. This header loads logo
  2. Calls for Nav.js 

</details>

<details><summary>nav.js </summary>

  1. Uses react-bootstrap Navbar
  2. uses Nav.Link for react/Gatsby loading routing

</details>

<details><summary>posters.js </summary>

  1. uses Image from react-bootstrap, takes in prop of the poster images
  2. this component is called from the posters page

</details>

<details><summary>seo.js </summary>

  1. This file is for Search Engine Optimization
  2. this came built in from the Gatsby source code

</details>

<details><summary>works.js </summary>


</details>

### fonts 📁

1. This is a folder for my preferred font for this site. *OperatorMono* for paragraphs; 
2. NOTE: loading Roboto from google fonts in the layout.scss

### pages 📁

<details><summary>404.js </summary>

1. This is built in from Gatsby source code. 
2. 404.js is for when a user wanders off into a stange route and the site cannot serve this static site

</details>

<details><summary>about.js </summary>

   1. StaticQuery from Images to find `self`
   2. Gives an About me. 

</details>