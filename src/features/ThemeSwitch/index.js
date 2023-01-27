import {
  ThemeSwitchButton,
  Wrapper,
  BackgroundText,
  LightTheme,
  SwitchElement,
} from "./styled";

import light from "./images/light.svg";

const ThemeSwitch = () => (
  <>
    <Wrapper>
      <BackgroundText>Dark mode off</BackgroundText>
      <ThemeSwitchButton onClick={console.log}>
      
        <SwitchElement src={light
                   
                } alt="Change Theme" moveRight></SwitchElement>
      </ThemeSwitchButton>
    </Wrapper>
  </>
);

export default ThemeSwitch;
