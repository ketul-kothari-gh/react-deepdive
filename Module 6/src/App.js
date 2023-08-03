import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // No dependency means, this will run only first time when the component is rendered
  // If user refereshes the page, entire react app restarts .. this gets executed again
  useEffect(() => {
    console.log("Triggered effect !!!");
    const localStorageIsLoggedIn = localStorage.getItem("LoggedIn");
    if (localStorageIsLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // this will also get triggerd when the app is started and any time the dependency i.e. state isLoggedIn is changed
  useEffect(() => {
    console.log("isLoggedIn Changed");
    if (isLoggedIn === true) {
      localStorage.setItem("LoggedIn", "1");
    } else {
      localStorage.removeItem("LoggedIn");
    }
  }, [isLoggedIn]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
