import { SubHeader } from "../../../common/SubHeader/styled";
import {
  Divider,
  ListItem,
  List,
  SkillsWraper,
  Icon,
  Point,
} from "./styled";


const SkillsTile = ({ title, icon, list }) => {
  return (
    <SkillsWraper>
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
    </SkillsWraper>
  );
};

export default SkillsTile;
