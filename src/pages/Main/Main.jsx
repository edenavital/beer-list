import { generateTheme, GlobalStyle } from "../../assets";
import { ThemeProvider } from "styled-components";
import { BeerListScreen } from "../BeerListScreen";
import { Layout } from "../../components/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils";

const theme = generateTheme();

/**
 * Hello there,
 * Since you asked for scalable code I added some infrastructure for enlarging the task.
 * A few points to mention:
 *   1. Implementation for Routes - incase we would like to add multiple pages
 *          * for example clicking on a card would route us to a more informative page of it
 *   2. Theme - currently taking the palette from "lightTheme", it's very easy to add more themes such as darkTheme - we only take the palette from there.
 *          * There are no attached colors in the mock file, so I tried to extract the colors using chrome extension (ColorZilla)
 *   3. Everything is wrapped by ThemeProvider - using styled-components for mixins & theme
 *   4. The structure of the code is divided into modules for scalability
 *   5. Each folder contains index.js for easier importing paths
 *   6. If I use a component from a 3rd package (Material UI in our case) - I usually wrap it and reuse it across all the app (It's not necessary but it makes the code very organized - global refactors in a single place)
 *   7. I could add much more technologies, however it wasn't necessary for the task:
 *          * Localization if the app is delivered to different countries.
 *          * Catching - store the fetched data for the next refresh (localStorage, Redis if we have server ...)
 *          * Redux - global manager (we only have a single page here, we barely drill props here)
 *
 *   Feel free to contact at any time :)
 */

export const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        {/* Would support more routes / protected routes if needed */}
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.ROOT} element={<BeerListScreen />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};
