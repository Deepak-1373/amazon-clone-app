import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function Register() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            history.push("/");
          })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="register__container">
        <h1>Sign-up</h1>
        <form>
          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signUp}
            className="register__signUnButton"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <Link to="/login">
          <button className="register__signInButton">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
