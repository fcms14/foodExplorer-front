import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AdmRoutes } from "./adm.routes";

export function Routes() {
    const { user, admin } = useAuth();

    return (
        <BrowserRouter>            
            {user ? admin ? <AdmRoutes /> : <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}