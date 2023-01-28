import {
  ThemeSwitchButton,
  Wrapper,
  BackgroundText,
  SwitchElement,
} from "./styled";
import light from "./images/light.svg";
import dark from "./images/dark.svg";
import { useState } from "react";

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <>
      <Wrapper>
        <BackgroundText>Dark mode {isDarkTheme ? "on" : "off"} </BackgroundText>
        <ThemeSwitchButton
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          moveRight={isDarkTheme}
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
