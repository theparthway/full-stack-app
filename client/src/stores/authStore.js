import create from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({
    loggedIn: null,

    loginForm: {
        username: '',
        password: ''
    },

    updateLoginForm: (e) => {
        const { name, value } = e.target;

        set(state => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value
                }
            }
        })
    },

    login: async () => {
        const { loginForm } = authStore.getState();

        await axios.post('/login', { withCredentials: true });

        set({
            loggedIn: true,
            loginForm: {
                username: "",
                password: ""
            }
        });
    },

    checkAuth: async () => {
        try {
            await axios.get('/check-auth', { withCredentials: true });
            set({ loggedIn: true });
        } catch (err) {
            set({ loggedIn: false });
        }
    },

    logout: async () => {
        await axios.post('/logout', { withCredentials: true });

        set({ loggedIn: false });
    }
}));

export default authStore;