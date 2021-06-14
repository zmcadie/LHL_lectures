# W4D1 - Intro to CSS

> Video recording: https://youtu.be/tumm5bGvVuc

> You'll notice that while this week (and every week) has a lot of new concepts, our approach to teaching will start to change. The farther you get into the coursework the more "high-level" the assignments will get and the less emphasis will be put on giving you all the steps and resources to complete an activity. Our expectation is that you'll start to experiment to find *AN* answer.
> 
> This means that during lecture when a new concept comes up that you don't fully understand, consider writing it down and researching it afterwards. There are going to be too many new things in morning lectures for everyone to ask "What's XYZ?". We're happy to discuss "XYZ" with you but ask that you do some research first to try and understand it yourself. This will help make sure lectures stay on topic and will help you practice researching programming topics (which is 90% of a developers job).

## Outline
1. Tweeter Demo
2. Semantic HTML
3. Writing CSS
4. Box model
5. Layout — Float (20 min)
6. Layout — Flexbox (40 min)

### What we won't cover today
- CSS frameworks and supersets (Bootstrap, SCSS, etc.)
- Grid systems (CSS Grid, Bootstrap Grid, etc.)
- CSS specificity (in detail)
- Pseudoelements (::before, ::after)

### Reminders
- Writing good CSS is hard and not everyone is good at it, and that's okay! Ask mentors to code review your HTML and CSS, not just your JavaScript
- The key to understanding CSS is experimenting! Do it!
- We recommend you use Chrome for development
- DevTools are your friend (especially for front-end development)
- When googling, look for links to MDN and CSS-Tricks (avoid W3Schools)

## Tweeter Demo (10 min)
- Tweeter will be a single-page app (TinyApp was a multi-page app)
- AJAX (Async JS and XML) lets us separate the data-interchange layer from the presentation layer
- Multi-page flow:
  - Browser --> Server (HTTP request)
  - Browser <-- Server (HTML, CSS, JS)
  - Browser (refresh & render)
- Single-page flow
  - Browser --> Server (HTTP request)
  - Browser <-- Server (data)
  - Browser (update content)

## Semantic HTML (10 min)
> [Semantics in HTML — MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)

```HTML
<header></header>
<main>
  <h1></h1>
  <article></article>
</main>
<footer></footer>
```

## Writing CSS (10 min)
> Cascading Style Sheets

### Selectors
> Selectors are how we target HTML elements to be styled

- Tag (`body`, `div`, `a`, etc.)
- Class (`.my-class`, `.another-class`)
- ID (`#unique-id`, `#different-unique-id`)

> What are `Classes` and `IDs`?

`Classes` and `IDs` are HTML attributes that we can use in other languages (CSS, JS) to target specific HTML elements.

```HTML
<!--
  - Classes can be used on multiple elements
  - An element can have multiple space-separated classes
-->
<div class="box"></div>
<div class="box big"></div>
<div class="box"></div>

<!--
  - IDs must only be used once per page
  - An element can only have one ID
-->
<div id="unique-item" class="box"></div>
```

## Box model (15 min)
> Nearly every element in HTML can be described as a box

[Box-model interactive demo](http://guyroutledge.github.io/box-model/)

- Content
- Padding
- Border
- Margin

`box-sizing: border-box` — Take the math and guesswork out of element widths

### Reset / Normalize
> CSS behaves slightly differently in most browsers, to make sure our web pages look the same for all users we `reset` or `normalize` CSS. These are CSS rules applied to override default browser CSS

```CSS
/* This rule will be applied to all elements (the * selector) */
* {
  box-sizing: border-box;
}
```

## Layout (60 min)
> Layout describes where our content appears on the screen

### Float (30 min)
> Float is one strategy for affecting layout in our web pages, it tells items to `float` outside of the document flow.

```CSS
.left {
  float: left;
}
```

### Flexbox (30 min)
> Flexbox is a more modern layout tool that addresses some of the downsides of float. It works by defining how the items in a container (a flexbox) should behave

```CSS
.container {
  display: flex;
}
```

[Read more about flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)