import { Routes, Route } from 'react-router-dom';

import { Products } from '../pages/Products';
import { MyCart } from '../pages/MyCart';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/MyCart' element={<MyCart />} />
        </Routes>
    )
}
