import { SubHeader } from "../../SubHeader/styled";
import {
  Divider,
  ListItem,
  List,
  SkillsWrapper,
  Icon,
  Point,
} from "./styled";

const SkillsTile = ({ title, icon, list }) => {
  return (
    <SkillsWrapper>
      <SubHeader>
        {title}
        <Icon>{icon}</Icon>
      </SubHeader>
      <Divider />
      <List>
        {list.map((item) => (
          <ListItem key={item}>
            <Point />
            {item}
          </ListItem>
        ))}
      </List>
    </SkillsWrapper>
  );
};

export default SkillsTile;
