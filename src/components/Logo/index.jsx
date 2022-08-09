import { Container } from "./styles";
import logoSvg from '../../assets/logo.svg';

export function Logo() {

    return (
        <Container>
            <img src={logoSvg} />
            <span> 
                food explorer
            </span>

        </Container>
    )
}