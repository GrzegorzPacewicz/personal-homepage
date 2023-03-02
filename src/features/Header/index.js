import { HeaderWrapper } from "./styled";
import ThemeSwitch from "./ThemeSwitch";
import About from "./About";

const Header = () => (
  <HeaderWrapper>
    <About />
    <ThemeSwitch />
  </HeaderWrapper>
);

export default Header;
