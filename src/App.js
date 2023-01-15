import Header from "./common/Header";
import Skills from "./common/Skills";
import { AppContainer } from "./features/AppContainer/styled";

function App() {
  return (
    <AppContainer>
      <Header />
      <Skills />
      <Skills />
    </AppContainer>
  );
}

export default App;
