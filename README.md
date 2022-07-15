# Welcome to Beer List app

**Hello there,**

Since you asked for scalable code, I added some infrastructure for enlarging the task.

<ins>A few points to mention:</ins>

1. Implementation for Routes - incase we would like to add multiple pages - for example clicking on a card would route us to a more informative page of it
2. Theme - currently taking the palette from "lightTheme", it's very easy to add more themes such as darkTheme - I only extract the palette from there.
3. There are no attached colors in the mock file, so I tried to extract the colors using chrome extension (ColorZilla)
4. Everything is wrapped by ThemeProvider - using styled-components for mixins & theme
5. The structure of the code is divided into modules for scalability
6. Each folder contains index.js for easier importing paths
7. If I use a component from a 3rd package (Material UI in our case) - I usually wrap it and reuse it across all the app (It's not necessary but it makes the code very organized - global refactors in single places)
8. I could add more technologies, however it wasn't necessary for the task:
   - Localization - if the app is delivered to different countries.
   - Redux - global manager (we only have a single page here, we barely drill props here)
   - Catching - store the fetched data for the next refresh (localStorage, Redis if we have a server ...)
   - Tests, Eslint and prettier configurations (I'm the only one who works on the project)
   - Custom hook for fetching data wasn't necessary, we only fetch once

Feel free to contact at any time :)

## How to run

```
1. git clone https://github.com/edenavital/beer-list.git
2. cd beer-list
3. npm i && npm start
```
