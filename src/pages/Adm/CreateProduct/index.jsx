import { useState } from "react";
import { useAuth } from '../../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { api } from '../../../services/api';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { Hero, Section, Section2Columns, Column2, Avatar } from "./styles";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Ingredients } from "../../../components/Ingredients";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";


export function CreateProduct() {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [name, setName] = useState([]);
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [groupProduct, setGroupProduct] = useState([]);
    const [picture, setPicture] = useState("Selecione");
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);
        setPicture(event.target.files[0].name);
    }

    async function fetchProducts() {
        const resp = await api.get(`/products/id/${id}`)
        setProduct(resp.data);
        for (let ingredient of resp.data.ingredients) {
            setTags(prevState => prevState.filter(tag => tag !== ingredient.name));
            setTags(prevState => [...prevState, ingredient.name]);
        };
    }
    
    if (id && product.length == 0) {
        fetchProducts();
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleAddTag() {
        if (newTag) {
            setTags((prevState => [...prevState, newTag]));
            setNewTag("");
        }
    }

    async function handleNewProduct() {
        if (!name || name == "")                {return alert("Digite um título")}
        if (!price || price == "")              {return alert("Digite a nota")}
        if (Number(price) < 0)                  {return alert("Digite uma valor acima de 0")}
        if (!description || description == "")  {return alert("Digite a descrição")}
        if (!tags || tags == "")                {return alert("Digite a(s) tag(s)")}
        if (newTag)                             {return alert("Há um Marcador pendente para adicionar")}

        const { data: product_id } = await api.post("/products", {
            name,
            description,
            price,
            groupProduct,
            tags
        });

        if (avatarFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", avatarFile);
            fileUploadForm.append("product_id", product_id);
            await api.patch("/products", fileUploadForm);
        }

        alert("Produto Cadastrado com sucesso!");
        navigate("/");
    }

    async function handleUpdateProduct() {
        if (newTag) {return alert("Há um Marcador pendente para adicionar")}

        await api.post(`/products/update/`, {
            name,
            description,
            price,
            groupProduct,
            tags,
            id
        });

        if (avatarFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", avatarFile);
            fileUploadForm.append("product_id", id);

            await api.patch("/products", fileUploadForm);
        }

        alert("Produto Atualizado");
        navigate("/");
    }

    return (
        <>
            <Header />
            <Hero>
                <Link to='/'>
                    <FiArrowLeft />
                </Link>
                <h1>Cadastrar Produto</h1>
                <Section2Columns>
                    <Column2>
                        Imagem do Produto
                        <Avatar>
                            <label htmlFor='avatar'>
                                <FiCamera />
                                <input
                                    id='avatar'
                                    type="file"
                                    onChange={handleChangeAvatar}
                                />
                            </label>
                            {picture}

                        </Avatar>
                    </Column2>

                    <Input
                        title="Nome do Produto"
                        placeHolder={product.name ?? "Ex: X-Tudo"}
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        title="Grupo do Produto"
                        placeHolder={product.groupProduct ?? "Ex: Lanches"}
                        type="text"
                        onChange={e => setGroupProduct(e.target.value)}
                    />
                </Section2Columns>

                Ingredientes
                <Section>
                    {
                        tags.map((tag, index) => (
                            <Ingredients
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                            />
                        ))
                    }

                    <Ingredients
                        isNew
                        placeholder="Novo Ingrediente"
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTag}
                    />
                </Section>

                <Textarea
                    placeHolder={product.description ?? "Fale brevemente sobre o prato, seus ingredientes e composição"}
                    title="Descrição"
                    onChange={e => setDescription(e.target.value)}
                />

                <Section2Columns>
                    <Input
                        title="Preço"
                        placeHolder={product.price ?? "R$ 0,00"}
                        type="number"
                        onChange={e => setPrice(e.target.value)}
                    />
                    <Column2>
                        {
                            product.length == 0 ?
                                <Button title="Adiciona Produto" onClick={handleNewProduct} />
                                :
                                <Button title="Atualizar Produto" onClick={handleUpdateProduct} />
                        }
                    </Column2>
                </Section2Columns>

            </Hero>
        </>
    )
}