import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export type UserCredentials = {
  userName: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserCredentials>({
    userName: "",
    password: "",
  });

 const [loginError, setloginError] = useState("")
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);

      navigate("/", { replace: true });
    } catch (error) {
      setloginError(error?.response?.data)
      console.log(error?.response?.data);
    }
  };

  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="name">userName:</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">password:</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
      </form>
      <button onClick={handleSubmit}>Login</button>
      {loginError && <p className="text-red-700 pt-2">{loginError}</p>}
    </div>
  );
};

export default LoginForm;
