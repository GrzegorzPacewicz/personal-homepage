import Skills from "../Homepage/Skills";
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header";
import Portfolio from "../Homepage/Portfolio";
import { AppContainer, AppWrapper } from "../Homepage/AppContainer/styled";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../Homepage/Header/ThemeSwitch/themeSlice";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Normalize />
      <AppWrapper>
      <AppContainer>
        <Header />
          <main>
        <Skills />
        <Portfolio />
          </main>
        <Footer />
      </AppContainer>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
