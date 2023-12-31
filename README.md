# Frontend Mentor - Age calculator app solution (React JS + Vite and Tailwind CSS)

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

[![localhost-5173.png](https://i.postimg.cc/wBYJB5Nr/localhost-5173.png)](https://postimg.cc/NKbLJHp8)

[![localhost-5173-1.png](https://i.postimg.cc/4xgVfbVS/localhost-5173-1.png)](https://postimg.cc/dL5LnCW2)

### Links

- Live Site URL: https://age-calculator-app-frontend-mentor-nu.vercel.app

## My process

### Built with

- Semantic HTML5 markup
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

To see how you can add code snippets, see below:

```html
<h1>I dont know but this my own logic calculating age and I know it's not perfect but atleast I tried hihi!</h1>
```
```js
    // Set the date to the beginning of the next year
    const nextYear = new Date(todayDate.getFullYear() + 1, 0, 1);
    // Calculate the difference in days
    const days = Math.ceil((nextYear - todayDate) / (1000 * 60 * 60 * 24));
    const months = todayDate.getUTCMonth() - parseInt(month);
    const years = todayDate.getFullYear() - parseInt(year);

    setResultA(days);
    setResultB(months);
    setResultC(years);
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Youtube](https://www.youtube.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Google](https://www.google.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Nikki](https://ilanan-nikki.vercel.app)
- Frontend Mentor - [@ncece11](https://www.frontendmentor.io/profile/ncece11)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
