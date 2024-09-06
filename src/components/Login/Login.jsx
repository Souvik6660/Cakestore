import React, { useState } from "react";
import "./Login.css";

const accounts = [
  { username: "Souvik", pin: 2003 },
  { username: "Sujoy", pin: 2003 },
  { username: "Anjali", pin: 2003 },
  { username: "Debasrita", pin: 2003 },
  { username: "Sanjoy", pin: 2003 },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const matchingAccount = accounts.find(
      (account) => account.username === username && account.pin === Number(pin)
    );
    setError(matchingAccount ? "You are successfully logged in!" : "Incorrect username or pin");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
        </label>
        <button className="loginbtn" type="submit">
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
