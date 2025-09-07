import React, { useState } from "react";

function Login() {
  // Form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Error messages
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const userData = JSON.parse(localStorage.getItem(email));
      if (userData && userData.password === password) {
        alert(`Welcome, ${userData.name}! You are logged in.`);
      } else {
        alert("Email or password is incorrect.");
      }
    }
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        /><br/>
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}<br/>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        /><br/>
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}<br/>
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default Login;