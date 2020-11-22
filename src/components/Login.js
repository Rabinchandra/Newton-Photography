import React, { useState, useContext, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import ThemeContext from "../context/ThemeContext";
import "../style/Login.css";

function Login() {
  const { setIsWhite } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successfulMsg, setSuccessfulMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        if (authUser) {
          setSuccessfulMsg("User successfully login 😃!");
          setTimeout(() => setSuccessfulMsg(""), 3000);
        }
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          setError("User not found!");
        } else {
          setError("Something went wrong! 😞");
        }
        setTimeout(() => setError(""), 3000);
      });
  };

  useEffect(() => {
    // Changing navbar theme
    setIsWhite(false);
  }, []);

  return (
    <form className='login' onSubmit={submitHandler}>
      <div className='login__header'>Admin Login</div>
      {error && <div className='error__msg msg'>{error}</div>}
      {successfulMsg && (
        <div className='successful__msg msg'>{successfulMsg}</div>
      )}
      <input
        type='email'
        id='email'
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        autoComplete='off'
        required
      />

      <input
        type='password'
        id='password'
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
      />

      <input type='submit' value='Submit' />
    </form>
  );
}

export default Login;
