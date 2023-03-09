import Skills from "../Homepage/Skills";
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header";
import Portfolio from "../Homepage/Portfolio";
import { AppContainer } from "../Homepage/AppContainer/styled";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { fetchRepos } from "../Homepage/Portfolio/githubSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme } from "../Homepage/Header/ThemeSwitch/themeSlice";
function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  useEffect(() => {
      dispatch(fetchRepos());
    }, [dispatch])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Normalize />
      <AppContainer>
        <Header />
        <Skills />
        <Portfolio />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
