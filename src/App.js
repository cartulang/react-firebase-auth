import { auth } from "./firebase-config/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (!currentUser) {
        setUser("");
        setIsLoggedIn(false);
        setIsLoading(false);
        return null;
      }
      setUser(currentUser);
      setIsLoggedIn(true);
      setIsLoading(false);
    });
  }, []);

  async function handleLogOut(e) {
    e.preventDefault();
    setUser("");
    setIsLoggedIn(false);
    signOut(auth);
  }

  console.log(user);
  return (
    <div className="App">
      <h1>Firebase Auth</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isLoggedIn ? (
        <section>
          <p>Welcome {user.email}!</p>
          <button onClick={handleLogOut}>logout</button>
        </section>
      ) : (
        <>
          <Signup />
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
