# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](http://127.0.0.1:5500/index.html)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- tailwindcss
- Javascript functions
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components]("https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css") - For styles


### What I learned

Solving this challenge, i've learnt about Document Object Manipulation (DOM), Events and Events handlers.
DOM is the structured representation of an HTML document, it is used to connect web pages to script or programming language just as javascript.
Events are notifications that are sent to notify the code that somethimg has happened or is happening
on the webpage. examples of events are : clicking a button, scrolling, entering a text in an input fields,
resizing a window, pressing a key and so on.
An event listener is a function that performs an action based on a specific event. So when an event is trigerred, the event listener function performs an action based on that specific event. this was really a fun thing for me to learn in javascript.
Another thing i learnt was callBack functions- a function is that is passed into another function as an argument. i used this while addind an Event listener

I used tailwindcss in desigining the page and this made the work easier and faster and responsive.

Some codes that i;m proud of

```js
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipvalue = button.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1); //takes away the percentage from the values
    
    //if number of bill is empty, give an alert
    if (billValue.value === "") {
      alert("Bill Amount Cannot Be Empty, Add Bill Amount");
      resetAll();
      return;
    }

    //if the number of people is not specified, assign a value of 1
    if (people.value === "") {
      people.value = 1;
    }

    //call the calculate tip function
    calculateTip(
      parseFloat(billValue.value),
      parseInt(tipvalue),
      parseInt(people.value)
    );
  });
});

```

### Continued development

I want to continue learning about Event listeners, making webpages more responsive and understanding css grids more and building more projects



## Author

- Website - [Udee](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@didi_inyang](https://www.twitter.com/yourusername)

## Acknowledgments

I really got a lot of help from this Github repo (https://github.com/Kuldip4135/tip-calculator-app)


