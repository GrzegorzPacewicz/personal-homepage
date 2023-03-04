import { AppContainer } from "../features/AppContainer/styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "./theme";
import { GlobalStyle } from "./Globalstyle";
import { Normalize } from "styled-normalize";
import Skills from "../features/Skills";
import Footer from "../features/Footer";
import Header from "../features/Header";
import Portfolio from "../features/Portfolio";
import {fetchRepos} from "../features/Portfolio/githubSlice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkTheme} from "../features/Header/ThemeSwitch/themeSlice"
function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  useEffect(() => {
      dispatch(fetchRepos());
    }, [dispatch])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
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
