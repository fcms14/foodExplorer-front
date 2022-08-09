import { Routes, Route } from 'react-router-dom'

import { Products } from '../pages/Products'
import { CreateProduct } from '../pages/Adm/CreateProduct'
import { Orders } from '../pages/Adm/Orders'
// import { Profile } from '../pages/Profile'

export function AdmRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/CreateProduct' element={<CreateProduct />} />
            <Route path='/CreateProduct/:id' element={<CreateProduct />} />
            <Route path='/Orders' element={<Orders />} />
            {/* <Route path='/profile' element={<Profile />} /> */}
        </Routes>
    )
}