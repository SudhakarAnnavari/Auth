import React, { useState } from "react";
import "../index.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState("");
  const nav = useNavigate()
  const [password, setPassword] = useState("");
  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Password:", password);
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        localStorage.setItem("token", json.authToken); 
        nav("/"); 
      } else {
        console.error("Login failed:", json.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
    
    <div className="form">
    <div className="container ">
      <h1 className="my-4 text-center">Log In</h1>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Login