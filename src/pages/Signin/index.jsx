import { useState } from "react";
import { useAuth } from '../../hooks/auth';

import { Container, Hero } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';


export function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Hero>
            <Logo />
            <Container>
                Faça Login
                <Input
                    title="E-mail"
                    placeHolder="Digite Aqui seu Nome"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    title="Senha"
                    placeHolder="No mínimo 6 carácteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Entrar" onClick={handleSignIn} />
                <Link to='/signup'>
                    Crie sua conta
                </Link>
            </Container>
        </Hero>
    )
}