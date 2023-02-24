import spinner from "./spinner.svg";
import { Wrapper, Info, Spinner } from "./styled";

const Loader = () => (
    <>
        <Wrapper>
            <Info>
                Please wait, projects are being loaded...
            </Info>
            <Spinner src={spinner} alt="spinner"></Spinner>
        </Wrapper>
    </>
);

export default Loader;