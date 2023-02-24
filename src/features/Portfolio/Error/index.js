import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../ThemeSwitch/themeSlice";
import {github} from "../../../core/personalInfo";
import dangerBlack from "./dangerBlack.svg"
import dangerLight from "./dangerLight.svg"
import {Wrapper, DangerIcon, Title, InfoWrapper, Text, ButtonLink} from "./styled";

const Error = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    return (
        <>
            <Wrapper>
                <DangerIcon src={isDarkTheme ? dangerBlack : dangerLight} />
                <Title>
                    Ooops! Something went wrong...
                </Title>
                <InfoWrapper>
                    <Text>Sorry, failed to load Github projects.
                        <br/>You can check tem directly on Github.</Text>
                </InfoWrapper>
                <ButtonLink
                    href={github}
                    rel="noreferrer"
                    target="_blank">
                    Go&nbsp;to&nbsp;Github</ButtonLink>
            </Wrapper>
        </>
    );
}

export default Error;