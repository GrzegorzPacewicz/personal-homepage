import Header from "../features/Header";
import Portfolio from "../features/Portfolio";
import { AppContainer } from "../features/AppContainer/styled";
import Skills from "../features/Skills";
import Footer from "../features/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "../core/theme";
import { useSelector } from "react-redux";
import {selectIsDarkTheme} from "../features/ThemeSwitch/themeSlice"
import { GlobalStyle } from "./Globalstyle";
import { Normalize } from "styled-normalize";

function App() {
  // const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

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
