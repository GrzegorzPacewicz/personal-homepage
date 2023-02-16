import Header from "./features/Header";
import Portfolio from "./features/Portfolio";
import { AppContainer } from "./features/AppContainer/styled";
import Skills from "./features/Skills";
import Footer from "./features/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
