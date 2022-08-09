import { Container, Hero } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../../services/api"
import { Link } from 'react-router-dom'

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário Cadastrado com Sucesso!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                }
                else {
                    alert("Não foi possível cadastrar")
                }
            });
    }

    return (
        <Hero>
            <Logo />
            <Container>

                Crie sua conta

                <Input
                    title="Seu nome"
                    placeHolder="Digite Aqui seu Nome"
                    type="text"
                    onChange={e => setName(e.target.value)}

                />
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

                <Button title="Criar Conta" onClick={handleSignUp} />

                <Link to='/'>
                    Já tenho uma conta 
                </Link>

            </Container>
        </Hero>
    )
}