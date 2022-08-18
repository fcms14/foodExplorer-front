import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import { Hero, Billing, CartItens, Checkout, Section2Columns } from "./styles";
import { Header } from "../../components/Header";
import { Favorites, Search } from '../../components/Header/styles';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import qrCode from '../../assets/qrCode.png';

export function MyCart() {
    const { user } = useAuth();
    let [cart, setCart]       = useState(JSON.parse(localStorage.getItem(`@foodExplorer:cart${user.id}`)) || []);
    let [aproved, setAproved] = useState(JSON.parse(localStorage.getItem(`@foodExplorer:order${user.id}`)) || []);
    let [item, setItem] = useState();
    let [status, setStatus] = useState();
    let [pix, setPix] = useState(!aproved.length);
    let [card, setCard] = useState(false);
    let [cash, setCash] = useState(false);
    let [paid, setPaid] = useState(0);
    let [paymentMethod, setPaymentMethod] = useState("pix");

    let total = 0;

    for (let c of cart) {
        total += c.subTotal;
    }

    useEffect(() => {
        function removeItem() {
            cart = cart.filter(c => item !== c.product_id);
            localStorage.setItem(`@foodExplorer:cart${user.id}`, JSON.stringify(cart));
            cart.innerHTML = `Meu Pedido (${cart.length})`;
            setCart(cart);
        }
        removeItem();
    }, [item]);

    useEffect(() => {
        async function fetchOrders() {
            if (aproved.length) {
                const {data} = await api.get(`/orders/cart?id=${aproved[0]}`);
                setStatus(data.status);
            }
        }
        fetchOrders();
    }, [aproved]);

    function toggleClass(event, element) {
        setPix(false);
        setCard(false);
        setCash(false);
        setPaymentMethod(event.target.id);
        element(true);
    }

    async function handleNewOrder(){
        const data = {
            cart,
            paymentMethod,
            total,
            paid
        }

        if (data.cart.length === 0) {
            return;
        }
        
        const { data: order_id } = await api.post("/orders", data);

        alert("Pedido Enviado Com sucesso!");
        setPix(false);
        setCard(false);
        setCash(false);
        
        localStorage.setItem(`@foodExplorer:order${user.id}`, JSON.stringify(order_id));
        setAproved(JSON.parse(localStorage.getItem(`@foodExplorer:order${user.id}`)));
    }

    if (status == "Entregue") {
        localStorage.removeItem(`@foodExplorer:order${user.id}`);
        localStorage.removeItem(`@foodExplorer:cart${user.id}`);
    }

    return (
        <>
            <Header>
                <Favorites>
                    Meus Favoritos
                </Favorites> 
                <Search>
                    <Input icon={FiSearch} placeholder="Busque pelas opções de pratos" />
                </Search> 
            </Header>
            <Hero>
                <Link to='/'> <FiArrowLeft /> Voltar </ Link>

                <div>

                    <Billing>

                        <h1>  Meu Pedido </h1>

                        {
                            cart.map(item => (
                                <CartItens key={String(item.product_id)}>
                                    <img src={item.product_img} alt={item.product_name} />
                                    <div>

                                        <p>
                                            {item.quantity} x &nbsp;
                                            {item.product_name} -
                                            <span> R$ {Number(item.subTotal).toFixed(2)}  </span>
                                        </p>

                                        {
                                            !aproved.length ?
                                                <span onClick={(e) => setItem(item.product_id)}> Excluir </span>
                                                :
                                                <> </>
                                        }
                                    </div>
                                </CartItens>
                            ))
                        }

                        Total: R$ {Number(total).toFixed(2)}
                    </Billing>

                    <Checkout>
                        <h1> Pagamento </h1>

                        <div className='wrapper'>
                            { !aproved.length  ?
                                <div className='collumns'>
                                    <div id="pix" className={pix ? "paymentMethod displayBackground" : "paymentMethod"} onClick={(event) => toggleClass(event, setPix)}> Pix </div>
                                    <div id="card" className={card ? "paymentMethod displayBackground" : "paymentMethod"} onClick={(event) => toggleClass(event, setCard)}> Crédito </div>
                                    <div id="cash" className={cash ? "paymentMethod displayBackground" : "paymentMethod"} onClick={(event) => toggleClass(event, setCash)}> Dinheiro </div>
                                </div>
                                :
                                <> </>
                            }

                            <div className={pix ? "paymentOption" : "paymentOption displayNone"}>
                                <img src={qrCode} />
                            </div>
                            <div className={card ? "paymentOption" : "paymentOption displayNone"}>
                                <Input
                                    title="Número do Cartão"
                                    placeHolder="0000 0000 0000 0000"
                                    type="number"
                                />
                                <Section2Columns>

                                    <Input
                                        title="Validade"
                                        placeHolder="mm/yy"
                                        type="text"
                                    />

                                    <Input
                                        title="CVC"
                                        placeHolder="1234"
                                        type="text"
                                        maxLength="4"
                                    />
                                </Section2Columns>


                            </div>
                            <div className={cash ? "paymentOption" : "paymentOption displayNone"}>
                                <Input
                                    title="Troco para"
                                    placeHolder="50"
                                    type="number"
                                    onChange={(e) => setPaid(e.target.value)}
                                />
                            </div>

                            <div className={aproved != "" ? "paymentOption" : "paymentOption displayNone"}>
                                Pedido aprovado: {aproved} 
                                <br /> > {status} 
                            </div>

                            <div className={aproved != "" ? "paymentOption displayNone" : "paymentOption"}>
                                <Button title="Finalizar Pagamento" onClick={handleNewOrder} />
                            </div>
                        </div>
                    </Checkout>
                </div>
            </Hero>
        </>
    )
}