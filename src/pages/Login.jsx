import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!emailOrUsername || !password) {
        return setError("todos los campos son requeridos");
      } else {
        setError("");

        const res = await axios.post(
          "https://ha-react-proyecto-integrador-back-end.vercel.app/sessions",
          {
            email: emailOrUsername,
            username: emailOrUsername,
            password: password,
          }
        );
        console.log(res.data);

        const { token } = res.data;
        localStorage.setItem("token", token);

        navigate("/tweets");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username o email"
          value={emailOrUsername}
          onChange={(e) => {
            setEmailOrUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button>Submit</button>
        <p className="error">{error && error}</p>

        <Link to="/signup">Don't have account?</Link>
      </form>
    </div>
  );
}

export default Login;
