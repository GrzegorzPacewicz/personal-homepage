import Header from "./features/Header";
import Portfolio from "./features/Portfolio";
import { AppContainer } from "./features/AppContainer/styled";
import Skills from "./features/Skills";

function App() {
  return (
    <AppContainer>
      <Header />
      <Skills />
      <Portfolio />
    </AppContainer>
  );
}

export default App;
