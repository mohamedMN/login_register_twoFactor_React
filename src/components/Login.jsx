import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const gotoSignUpPage = () => {
    navigate("/Signup");
  };
  return (
    <>
      <div className="login__container">
        <h2>LOGIN</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.value.target)}
          />
          <label htmlFor="email">Password</label>
          <input
            type="Password"
            id="Password"
            name="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.value.target)}
          />
          <button className="loginBtn">SIGN IN</button>

          <p>
            Dont have an account?{" "}
            <span className="link" onClick={gotoSignUpPage}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
