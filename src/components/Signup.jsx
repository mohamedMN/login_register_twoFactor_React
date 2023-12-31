import { useState } from "react";
import { useNavigate } from "react-router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, tel, password });
  };
  const gotoLoginPage = () => {
    navigate("/");
  };
  return (
    <div className="signup__container">
      <h2>Sign up </h2>
      <form className="signup__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          defaultValue={email}
          required
          onClick={(e) => setEmail(e.value.target)}
        />
        <label htmlFor="email">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          defaultValue={username}
          required
          onClick={(e) => setUsername(e.value.target)}
        />
        <label htmlFor="email">Phone Number</label>
        <input
          type="text"
          name="tel"
          id="tel"
          defaultValue={tel}
          required
          onClick={(e) => setTel(e.value.target)}
        />
        <label htmlFor="email">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          defaultValue={password}
          required
          onClick={(e) => setPassword(e.value.target)}
        />
        <button className="signupBtn">SIGN UP</button>
        <p>
          Already have an account?{" "}
          <span className="link" onClick={gotoLoginPage}></span>
        </p>
      </form>
    </div>
  );
}
