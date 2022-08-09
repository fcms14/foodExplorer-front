import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
// import { useHistory } from 'react-router'
import { FiPlus, FiMinus, FiHeart, FiStar, FiClock, FiTrash2 } from 'react-icons/fi'
import { Container } from "./styles";
import { ProductTag } from '../ProductTag'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
import { Button } from '../Button';
import { Input } from '../Input';
import { Link } from 'react-router-dom';

export function ProductCard({ data, isEqual, isFavorited, ...rest }) {
    const { user, admin } = useAuth();
    const avatarUrl = data.picture ? `${api.defaults.baseURL}/files/${data.picture}` : avatarPlaceHolder;
    const navigate = useNavigate();
    let [quantity, setQuantity] = useState(1);
    let [favorited, setFavorited] = useState(isFavorited);
    const pendingOrder = JSON.parse(localStorage.getItem(`@foodExplorer:order${user.id}`)) || [];

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente excluir este filme?");

        if (confirm) {
            await api.delete(`/products/${data.id}`);
            location.reload();
        }
    }

    async function handleFavorite() {
        await api.post(`/favorites/${data.id}`);
        setFavorited(!favorited);
    }

    function addToCart() {
        let itens = JSON.parse(localStorage.getItem(`@foodExplorer:cart${user.id}`)) || [];
        itens = itens.filter(l => data.id !== l.product_id);

        if (quantity == 0) {
            itens = itens.filter(l => data.id !== l.product_id);
            localStorage.setItem(`@foodExplorer:cart${user.id}`, JSON.stringify(itens));
            cart.innerHTML = `Meu Pedido (${itens.length})`;
            return
        }

        const item = {
            product_id: data.id,
            product_name: data.name,
            product_price: data.price,
            product_group: data.groupProduct,
            quantity,
            product_img: avatarUrl,
            subTotal: (quantity * data.price),
        };

        itens = [item, ...itens];
        localStorage.setItem(`@foodExplorer:cart${user.id}`, JSON.stringify(itens));
        cart.innerHTML = `Meu Pedido (${itens.length})`;
    }

    function handleEditProduct(id) {
        navigate(`/CreateProduct/${id}`);
    }

    return (
        <Container>
            {admin ?
                <FiTrash2 onClick={handleRemove} />
                :
                <FiHeart onClick={handleFavorite} className={favorited ? "favorited" : ""} />
            }

            {admin ?
                <img className='editable' src={avatarUrl} alt={data.name} onClick={() => handleEditProduct(data.id)} />
                :
                <img src={avatarUrl} alt={data.name} />
            }

            <h2> {data.name} </h2>

            <p>{data.description}</p>

            <h1> R$ {Number(data.price).toFixed(2)} </h1>

            {
                data.ingredients
                &&
                <footer>
                    {
                        data.ingredients.map(tag => <ProductTag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }

            {admin ?
                <> </>
                :
                <section>
                    <FiMinus onClick={() => setQuantity(quantity <= 0 ? 0 : --quantity )} />
                    {quantity}

                    <FiPlus onClick={() => setQuantity(++quantity)} />

                    { pendingOrder.length != 0 ? <> </>: <Button title="Incluir" onClick={addToCart} /> }
                    
                </section>
            }

        </Container>
    )
}