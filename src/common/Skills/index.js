import { Divider, List, ListWrapper, SkillsWraper, Span, SubHeader } from "./styled";

const Skills = ({ title }) => (
  <SkillsWraper>
    <SubHeader>{(title = "My skills include")}
    <Span>🛠️</Span>
    </SubHeader> 
    <Divider />
    <ListWrapper>
        <List>something</List>
    </ListWrapper>
  </SkillsWraper>
  

  
);

export default Skills;
