import { generateTheme, GlobalStyle } from "../../assets";
import { ThemeProvider } from "styled-components";
import { BeerListScreen } from "../BeerListScreen";
import { Layout } from "../../components/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils";

const theme = generateTheme();

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
