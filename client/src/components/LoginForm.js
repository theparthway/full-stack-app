import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore"

function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      
      await store.login();

      navigate("/");
    }

  return (
    <form onSubmit={handleLogin}>
        <input onChange={store.updateLoginForm} value={store.loginForm.username} type="text" name="username" />
        <input onChange={store.updateLoginForm} value={store.loginForm.password} type="password" name="password" />
        <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm