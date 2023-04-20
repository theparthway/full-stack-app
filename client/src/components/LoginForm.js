import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore"

function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      try {
        e.preventDefault();
        
        await store.login();
  
        navigate("/");
      } catch(err) {
        console.log("error in loginform");
        console.error(err);
      }
    }

  return (
    <div className="px-20 sm:px-40 py-10 text-center">
      <h2 className="text-4xl py-5">Login</h2>
      <form onSubmit={handleLogin}>
          <input required placeholder="Username" className="mb-5 w-64 h-11 rounded-lg text-center" onChange={store.updateLoginForm} value={store.loginForm.username} type="text" name="username" />
          <br />

          <input required placeholder="Password" className="mb-5 w-64 h-11 rounded-lg text-center" onChange={store.updateLoginForm} value={store.loginForm.password} type="password" name="password" />
          <br />

          <button className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 h-10 w-20 rounded-md" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm