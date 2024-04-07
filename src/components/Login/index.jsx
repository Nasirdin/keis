// Login.jsx

import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { APILINK } from "../../constants";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };

    try {
      const response = await axios.post(`${APILINK}/login`, data);
      localStorage.setItem("accessTokenKeisAdmin", response.data.token);
      navigate("/admin");
    } catch (error) {
      setErrorMessage("Username и Password неправильно");
      setUsername("");
      setpassword("");
    }
  };

  return (
    <div className="login">
      <div className="container">
        <form className="login__form" onSubmit={onSubmitHandler}>
          <h2 className="login__title">Войти в личный кабинет</h2>
          <p className="error">{errorMessage}</p>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
