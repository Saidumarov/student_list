// import React, { useState } from "react";
// import "./login.css";
// import yur from "../../assets/yur.jpg";


// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const login = () => {
//     if (username === "login" && password === "login06") {
//     }
//   };

//   return (
//     <div>
//       <div className="tasdiq">
//         Tizimga kirdingiz{" "}
//         <div className="chet">
//           <i className="fa-solid fa-check"></i>
//         </div>
//       </div>
//       <div className="wrapper">
//         <img src={yur} alt="" className="imgg" />
//         <div className="login-con">
//           <h1>Kirish</h1>
//           <div className="form">
//             <label htmlFor="username" id="log1">
//               <i className="fa-solid fa-user"></i>
//             </label>
//             <input
//               type="name"
//               placeholder="Login"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <label htmlFor="password" id="parol1">
//               <i className="fa-solid fa-lock"></i>
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Parol"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button className="btn" onClick={login}>
//               Kirish
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import {   useNavigate } from 'react-router-dom';

const Loutlet = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/assosiy');
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Login Page</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />

      <br />
    
    </div>
  );
};

export default Loutlet;
