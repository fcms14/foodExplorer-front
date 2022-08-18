import { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/auth';
import { api } from '../../../services/api';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Hero } from "./styles";
import { Header } from "../../../components/Header";

export function Orders() {
    const { user } = useAuth();
    const [search, setSearch] = useState("");
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const resp = await api.get(`/orders`);
            setOrders(resp.data);
        }
        fetchOrders();
    }, [search]);

    async function handleStatus(orderId, event){
        const data = {
            orderId,
            status: event.target.value
        }
        event.target.className = event.target.value;
        await api.put("/orders", data);
    }

    return (
        <>
            <Header />
            <Hero>
                <Link to='/'>
                    <FiArrowLeft />
                </Link>
                <h1> Pedidos</h1>
                <table>
                    <thead>
                        <tr>
                            <th width="90">Pedido</th>
                            <th width="110">Status</th>
                            <th>Detalhamento</th>
                            <th width="190">Data e hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            orders.map(order => (
                                <tr key={String(order.id)}> 
                                    <td> {order.id} </td>
                                    <td> 
                                        <select onChange={(event)=>handleStatus(order.id, event)}
                                            className={order.status}
                                        >
                                            <option defaultValue={order.status}> {order.status} </option>
                                            <option value="Pendente">            Pendente       </option>
                                            <option value="Preparando">          Preparando     </option>
                                            <option value="Enviado">             Enviado        </option>
                                            <option value="Entregue">            Entregue       </option>
                                        </select>                                    
                                    </td>
                                    <td> 
                                        {<>{
                                            order.orderItem.map(item => <span key={item.id}> {item.quantity} x {item.name}, </span>)                                        
                                        }</>}
                                        <br />
                                        <br />Total: {order.total} - Pago: {order.paid} - Troco: {order.paid-order.total} - {order.paymentMethod}
                                    </td>
                                    <td> {new Date(order.updated_at+'+0000').toLocaleString()} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Hero>
        </>
    )
}