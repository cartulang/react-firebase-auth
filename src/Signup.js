import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config/firebase-config";

export default function Signup() {
  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
  });

  async function handleSignup(e) {
    e.preventDefault();
    const { email, password } = signupCredentials;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <section>
        <form onSubmit={handleSignup}>
          <h2>Sign up</h2>
          <input
            type="email"
            placeholder="Email"
            value={signupCredentials.email}
            onChange={(e) =>
              setSignupCredentials({
                ...signupCredentials,
                email: e.target.value,
              })
            }
          />
          <input
            type="Password"
            placeholder="Password"
            value={signupCredentials.password}
            onChange={(e) =>
              setSignupCredentials({
                ...signupCredentials,
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
