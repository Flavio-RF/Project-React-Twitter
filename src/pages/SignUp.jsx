import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
useState;

function SignUp() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [data, setdata] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
          data.email
        )
      ) {
        return setError("Invalid Email");
      } else {
        setError("");
        const res = await axios.post(
          "https://ha-react-proyecto-integrador-back-end.vercel.app/users",
          {
            email: data.email,
            username: data.username,
            password: data.password,
          }
        );
        const { token } = res.data;
        localStorage.setItem("token", token);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={data.email}
          onChange={handleOnChange}
        />

        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={data.username}
          onChange={handleOnChange}
        />

        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={data.password}
          onChange={handleOnChange}
        />
        <button>Submit</button>
        <p className="error">{error && error}</p>
      </form>
    </div>
  );
}

export default SignUp;
