import { nanoid } from "@reduxjs/toolkit";
import Header from "./common/Header";
import { personalInfo } from "./common/personalInfo";
import Portfolio from "./common/Portfolio";
import Skills from "./common/Skills";
import { AppContainer } from "./features/AppContainer/styled";

function App() {
  return (
    <AppContainer>
      <Header />
      {personalInfo.map((sectionInfo) => (
        <Skills
          key={nanoid()}
          title={sectionInfo.title}
          icon={sectionInfo.icon}
          list={sectionInfo.list}
        />
      ))}
      <Portfolio />
    </AppContainer>
  );
}

export default App;
