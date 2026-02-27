#  EXERCISE 1
## INTRODUCTION
* Build a responsive page based on the designs. 
* This is React project built with Vite, displays list of posts with component: 
    - App
    - Banner
    - Post
    - PostList

## How to run project
- Open in VsCode and type in terminal
    1. `cd exercise1`
    2. `npm i`
    3. `npm run dev`
* Resize the screen to see the responsive layout.
## 🚀 Demo  
Live demo: https://duong247.github.io/frontend-assessment-exercise1/

# EXERCISE 2

## INTRODUCTION
* Build a page to show infomation in both:
    - 💻 Desktop layout 
    - 📱 Mobile layout
* The page must be responsive and adapt to different screen sizes.
    - 💻 On desktop: Data must be show in tabs
    - 📱 On mobile: Data must be show in accordion  
    - Only 1 accordion or tab can be open at a time 
    - The first accordion or tab is open on load
    - If the opened accordion is selected again, it will be closed.

* How to run project
    - open in VsCode and type in terminal
        `cd exercise2`
        `npm i`
        `npm run dev`
* Resize the screen to see the responsive layout.     
    - Desktop layout: screen width > 768px (tabs)
    - Mobile layout: screen width <= 768px (accordion)
## 🚀 Demo 
* Link demo exercise 2: https://duong247.github.io/frontend-assessment-exercise2/    - open in VsCode and type in terminal
        `cd exercise2`
        `npm i`
        `npm run dev`
* Resize the screen to see the responsive layout.     
    - Desktop layout: screen width > 768px
    - Mobile layout: screen width <= 768px
* Link demo exercise 2: https://duong247.github.io/frontend-assessment-exercise2/


# Bonus points
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
* ==> ` + ` tries convert a string to number, but `a` is not a number, so  ` + 'a' ` will be return `NaN`.
* ==> `'b' + 'a' + NaN + 'a'` = `baNaNa` => `baNaNa.toLowerCase()` => `banana`

