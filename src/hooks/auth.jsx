import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            const res = await api.post("/sessions", { email, password })
            const { user, token } = res.data;
            const userFiltered = {
                avatar: user.avatar,
                email: user.email,
                id: user.id,
                name: user.name,
                password: user.password
            };
            const admin = user.admin;

            localStorage.setItem("@foodExplorer:user", JSON.stringify(userFiltered))
            localStorage.setItem("@foodExplorer:token", token)

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user: userFiltered, token, admin })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@foodExplorer:token");
        localStorage.removeItem("@foodExplorer:user");

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {

        try {

            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const res = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = res.data.avatar;

            }

            await api.put("/users", user);
            localStorage.setItem("@foodExplorer:user", JSON.stringify(user));

            setData({ user, token: data.token });
            alert("Perfil Atualizado!");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    }

    async function isAdmin({ userJson, token }) {
        try {
            const res = await api.post("/sessions/isAdmin", { email: userJson.email, password: userJson.password })
            const { user } = res.data;
            setData({ user: userJson, token, admin: !!user.admin });
            return
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodExplorer:token");
        const user = localStorage.getItem("@foodExplorer:user");

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            const userJson = JSON.parse(user);
            isAdmin({ userJson, token });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user,
            admin: data.admin
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }