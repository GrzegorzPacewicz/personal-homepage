import Header from "./features/Header";
import Portfolio from "./features/Portfolio";
import { AppContainer } from "./features/AppContainer/styled";
import Skills from "./features/Skills";
import Footer from "./features/Footer";

function App() {
  return (
    <AppContainer>
      <Header />
      <Skills />
      <Portfolio />
      <Footer />
    </AppContainer>
  );
}

export default App;
