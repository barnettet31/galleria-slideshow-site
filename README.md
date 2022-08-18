# Frontend Mentor - Galleria slideshow site solution

This is a solution to the [Galleria slideshow site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)

- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slideshow and view each painting in a lightbox

### Screenshot

![](./screenshot_desktop.jpg)
![](./screenshot_tablet.jpg)
![](./screenshot_phone.jpg)

### Links

- Solution URL: [My Solution](https://github.com/barnettet31/galleria-slideshow-site)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I use a special browser called polypane that enables me to see all the form factors at once, and that really worked super well with tailwind so I could pretty easily declare my breakpoints in an efficient manor. I first wanted to get all the pages and links set up properly to get myself oriented.

After I was done with that I took care of the home page and the alignment the art in the unique alignment requirements which ended up taking some really odd division for the different form factors. If anyone has an improvement that I could use then let me know.

Finishing with that I worked on the layout of the individual pages, and finally added the logic to handle the gallery overlay.

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library -[Tailwind](https://tailwindcss.com/) - CSS Library

### What I learned

I started work building projects with the tailwindcss projects so I spent a lot of time familiarizing my self with the tool.

I also learned more about v6 of react router, and how to map across data to create custom links.

Here's what I did for the routes (I created a string utility function to create the route by stripping spaces and special characters)

```js
{
  data.map((art, index) => (
    <Route
      key={art.name + Math.random()}
      path={constructRoutes(art.name)}
      element={
        <Artwork
          art={art}
          nextItem={data[index + 1]}
          index={index}
          prevItem={data[index - 1]}
        />
      }
    />
  ));
}
```

### Continued development

Plan on building a couple more projects with tailwind and familiarizing myself with custom configs and even some more of the advanced classes they offer. If I could do it better I would probably get a better control over the containers for the images on each individual page.

## Author

- Frontend Mentor - [@barnettet31](https://www.frontendmentor.io/profile/barnettet31)
- Twitter - [@barnette_travis5](https://twitter.com/barnett_travis5)
  -LinkedIn [@travisbarnette](https://www.linkedin.com/in/travis-barnette-ba7987237/)
