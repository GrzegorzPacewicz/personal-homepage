import {
  ThemeSwitchButton,
  Wrapper,
  BackgroundText,
  SwitchElement,
} from "./styled";
import light from "./images/light.svg";
import dark from "./images/dark.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleIsDarkTheme } from "../../common/theme/themeSlice";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <>
      <Wrapper>
        <BackgroundText>Dark mode {isDarkTheme ? "on" : "off"} </BackgroundText>
        <ThemeSwitchButton
          onClick={() => dispatch(toggleIsDarkTheme())}
          title="change a theme"
        >
          <SwitchElement
            src={isDarkTheme ? dark : light}
            alt="Change Theme"
            moveRight={isDarkTheme}
          ></SwitchElement>
        </ThemeSwitchButton>
      </Wrapper>
    </>
  );
};

export default ThemeSwitch;
