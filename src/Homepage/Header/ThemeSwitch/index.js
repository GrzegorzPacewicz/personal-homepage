import {
  ThemeSwitchButton,
  Wrapper,
  BackgroundText,
  SwitchElement,
} from "./styled";
import light from "./icons/light.svg";
import dark from "./icons/dark.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

const ThemeSwitch = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

  return (
      <Wrapper>
        <BackgroundText>Dark mode {isDarkTheme ? "on" : "off"} </BackgroundText>
        <ThemeSwitchButton
          onClick={() => dispatch(toggleTheme())}
          title="change a theme"
        >
          <SwitchElement
            src={isDarkTheme ? dark : light}
            alt="Change Theme"
            moveRight={isDarkTheme}
          />
        </ThemeSwitchButton>
      </Wrapper>

  );
};

export default ThemeSwitch;
