##### EXERCISE 1
* How to run project
    - open in VsCode and type in terminal
        `cd exercise1`
        `npm i`
        `npm run dev`
* Resize the screen to see the responsive layout.

##### EXERCISE 2
* How to run project
    - open in VsCode and type in terminal
        `cd exercise2`
        `npm i`
        `npm run dev`
* Resize the screen to see the responsive layout.     
    - Desktop layout: screen width > 768px
    - Mobile layout: screen width <= 768px


###### Bonus points
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
==> ` + ` tries convert a string to number, but `a` is not a number, so  ` + 'a' ` will be return `NaN`.
==> `'b' + 'a' + NaN + 'a'` = `baNaNa` => `baNaNa.toLowerCase()` => `banana`

