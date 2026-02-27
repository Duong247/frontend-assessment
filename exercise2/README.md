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
* Link demo exercise 2: https://duong247.github.io/frontend-assessment-exercise2/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
