import { Routes, Route } from 'react-router-dom'

import { Products } from '../pages/Products'
import { MyCart } from '../pages/MyCart'
// import { Home } from '../pages/Home'
// import { New } from '../pages/New'
// import { Profile } from '../pages/Profile'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/MyCart' element={<MyCart />} />
            {/* <Route path='/new' element={<New />} />
            <Route path='/profile' element={<Profile />} /> */}
        </Routes>
    )
}
