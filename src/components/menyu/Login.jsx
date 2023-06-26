import React, { useState } from "react";
import "./login.css";
import yur from "../../assets/yur.jpg";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "login" && password === "login06") {
    }
  };

  return (
    <div>
      <div className="tasdiq">
        Tizimga kirdingiz{" "}
        <div className="chet">
          <i className="fa-solid fa-check"></i>
        </div>
      </div>
      <div className="wrapper">
        <img src={yur} alt="" className="imgg" />
        <div className="login-con">
          <h1>Kirish</h1>
          <div className="form">
            <label htmlFor="username" id="log1">
              <i className="fa-solid fa-user"></i>
            </label>
            <input
              type="name"
              placeholder="Login"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password" id="parol1">
              <i className="fa-solid fa-lock"></i>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" onClick={login}>
              Kirish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
