import React from 'react';
import './Login.css';
import axios from "axios";
import { useEffect, useState } from "react";
import jwtDecode from 'jwt-decode';

export default function Login({setToken}) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const onLogin  = async (credentials) => {

    console.log(credentials);
    let result =  await axios.post('http://localhost:8080/api/v1/auth/login', credentials);
    console.log(result.data);
    return result.data;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await onLogin({
      email,
      password
    });
    localStorage.setItem('uid', token.userDto.id);
    localStorage.setItem('urole', token.userDto.role);
    localStorage.setItem('token', 'Bearer ' +token.accessToken);
    setToken(token.accessToken);
  }

  


  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}