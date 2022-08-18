import { useState, useEffect, React } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import { Hero, Banner } from "./styles";
import { Favorites, Search } from '../../components/Header/styles';
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ProductCard } from '../../components/ProductCard';
import macaroons from '../../assets/pngegg1.png';

import { Carousel } from '@trendyol-js/react-carousel';

export function Products() {
    const { admin } = useAuth();
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [showFavs, setShowFavs] = useState(false);
    const cardsPerRow = Math.min(3, Math.floor((Math.min(1360, window.innerWidth))/360));
    const cardsShow = cardsPerRow * 1.1;
    let lastGroup = "";
    let isEqual = false;

    useEffect(() => {
        async function fetchProducts() {
            const resp = await api.get(`/products`);
            const favorites = await api.get(`/favorites/`);
            const productsFavoriteds = favorites.data.map(favorite => (favorite.product_id));

            setProducts(resp.data);
            setFavorites(productsFavoriteds);
        }
        fetchProducts();
    }, []);

    let filteredProducts = showFavs ? products.filter(product => (favorites.includes(product.id))) : products;
    filteredProducts = search.length > 0 ? products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())) : filteredProducts;

    const groups = filteredProducts.map(item => item.groupProduct).filter((value, index, self) => self.indexOf(value) === index);

    function setLastGroup(value) {
        isEqual = lastGroup == value;
        lastGroup = value;

        return isEqual;
    }

    return (
        <>
            <Header>
                {admin ?
                    <> </>
                    :
                    <Favorites>
                        <a href="#" onClick={(e) => setShowFavs(!showFavs)}> Meus Favoritos </a>
                    </Favorites>

                }
                <Search>
                    <Input icon={FiSearch} placeholder="Busque pelas opções de pratos" onChange={(e) => setSearch(e.target.value)} />
                </Search>
            </Header>
            <Hero>

                {admin ?
                    <h1>
                        <Link to='/CreateProduct'> Cadastrar Produto </Link>
                    </h1>
                    :
                    <Banner>
                        <img src={macaroons} />
                        <div>
                            <h1> Sabores inigualáveis </h1>
                            <p> Sinta o cuidado do preparo com ingredientes selecionados </p>
                        </div>
                    </Banner>
                }

                {
                    groups.map((group, keyS) => {
                        setLastGroup(group);
                        const carouselProducts = filteredProducts.filter(x => (x.groupProduct.includes(group)));

                        return (
                            <>
                                <h1> {group} </h1>
                                <Carousel show={cardsShow} slide={cardsPerRow} transition={0.75} swiping={true} key={keyS} useArrowKeys={true} responsive={true} a11y={true} dynamic={true} rightArrow={true} leftArrow={true}>
                                    {
                                        carouselProducts.map(carouselProduct => (
                                            <ProductCard
                                                key={String(carouselProduct.id)}
                                                data={carouselProduct}
                                                isEqual={isEqual}
                                                isFavorited={favorites.includes(carouselProduct.id)}
                                            />
                                        ))
                                    }
                                </Carousel>
                            </>
                        );
                    })
                }
            </Hero>
        </>
    )
}