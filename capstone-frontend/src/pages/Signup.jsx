import React, { useState } from "react";

function Signup() {
  // Form fields state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Error messages
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };
// Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const existingUser = JSON.parse(localStorage.getItem(email));
      if (existingUser) {
        alert("Email is already registered!");
      } else {
        localStorage.setItem(email, JSON.stringify({ name, email, password }));
        alert(`${name} has been successfully registered`);
        // Optionally clear form
        setName("");
        setEmail("");
        setPassword("");
      }
    }
  };
  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        /><br />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}<br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        /><br />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}<br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        /><br />
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}<br />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default Signup; 