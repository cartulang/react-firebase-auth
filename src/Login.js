import React, { useState } from "react";
import { auth } from "./firebase-config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  async function handleLogin(e) {
    e.preventDefault();
    const { email, password } = loginCredentials;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <section onSubmit={handleLogin}>
        <form>
          <h2>Log in</h2>
          <input
            type="email"
            placeholder="Email"
            value={loginCredentials.email}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                email: e.target.value,
              })
            }
          />
          <input
            type="Password"
            placeholder="Password"
            value={loginCredentials.password}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              })
            }
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
