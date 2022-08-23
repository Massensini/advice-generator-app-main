# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/screenshot/advice-generator.png)

### Links

- Solution URL: [Front-End Mentor Solution](https://www.frontendmentor.io/solutions/html-css-js-fetch-for-api-e8lMvQkQi7)
- Live Site URL: [Advice Generator](https://massensini-advice-generator.netlify.app/)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- JavaScript
- Fetch API
- [Advice Slip API](https://api.adviceslip.com) 

### What I learned


In this project I had my first contact with API'S and how to use them through the fetch method. I was able to learn about how to use API's with .then() to manipulate the information

See below: 

```js
const fetchPhrase = async () => {
    const APIResponse = fetch(`https://api.adviceslip.com/advice`)
    const data = (await APIResponse).json()
    return data
}
```