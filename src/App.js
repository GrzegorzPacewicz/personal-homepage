import Header from "./common/Header";
import { personalInfo } from "./common/personalInfo";
import Skills from "./common/Skills";
import { AppContainer } from "./features/AppContainer/styled";

function App() {
  return (
    <AppContainer>
      <Header />
      {personalInfo.map((sectionInfo) => (
        <Skills
          title={sectionInfo.title}
          icon={sectionInfo.icon}
          list={sectionInfo.list}
        />
      ))}
    </AppContainer>
  );
}

export default App;
