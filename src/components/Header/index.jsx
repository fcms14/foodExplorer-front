import { useAuth } from '../../hooks/auth';
import { Container, Wrapper, Logo, User } from "./styles";
import { FiLogOut } from 'react-icons/fi';
import logoSvg from '../../assets/logo.svg';
import { Button } from "../Button";
import { Link } from 'react-router-dom';

export function Header({ children }) {
    const { signOut, user, admin } = useAuth();
    const cart = JSON.parse(localStorage.getItem(`@foodExplorer:cart${user.id}`)) || [];

    return (
        <Container>
            <Wrapper>
                <Logo>
                    <img src={logoSvg} />
                    <span>
                        food explorer
                    </span>
                </Logo>

                {children}

                <User>
                    <div className="buttonHeader">
                        {
                            admin ?
                                <Link to="/Orders"> <Button title="Mapa de Vendas" /> </Link>
                                :
                                <> <Link to="/MyCart"> <Button id="cart" title={`Meu Pedido (${cart.length})`} /> </Link> </>
                        }
                    </div>
                    <section>
                        <strong> <a href='/' > {user.name} </a> </strong>
                        <span> <a href='/' onClick={signOut}>  Sair <FiLogOut /> </a> </span>
                    </section>
                </User>
            </Wrapper>
        </Container>
    )
}