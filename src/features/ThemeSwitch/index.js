import {
  ThemeSwitchButton,
  Wrapper,
  BackgroundText,
  LightTheme,
} from "./styled";

import light from "./images/light.svg";

const ThemeSwitch = () => (
  <>
    <Wrapper>
      <BackgroundText>Dark mode off</BackgroundText>
      <ThemeSwitchButton>
        <LightTheme src={light} alt="" />
      </ThemeSwitchButton>
    </Wrapper>
  </>
);

export default ThemeSwitch;
