import React, { useState } from "react";
import "./styles.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='main'>
      <h1>Login</h1>
      <form action=''>
        <label htmlFor='first'></label>
        <input
          type='text'
          id='first'
          name='first'
          placeholder='email address'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='second'></label>
        <input
          type='password'
          id='second'
          name='second'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          // @ts-ignore
          onClick=''
        >
          Log in
        </button>
        <a href=''>Forgot your password?</a>
      </form>
    </div>
  );
};

export default Login;
