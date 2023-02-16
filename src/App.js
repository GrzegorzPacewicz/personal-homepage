import Header from "./features/Header";
import Portfolio from "./features/Portfolio";
import { AppContainer } from "./features/AppContainer/styled";
import Skills from "./features/Skills";
import Footer from "./features/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "./common/theme/theme";
import { useSelector } from "react-redux";
import {selectIsDarkTheme} from "./common/theme/themeSlice"

function App() {
  // const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
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
