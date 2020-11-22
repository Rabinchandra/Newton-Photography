import React, { useState, useEffect } from "react";
import LandingPageBody from "./components/LandingPageBody";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimationContextProvider } from "./context/AnimationContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import "./style/Animation.css";
import Gallery from "./components/Gallery";
import NavbarOverlay from "./components/NavbarComponents/NavbarOverlay";
import Login from "./components/Login";
import { projectAuth } from "./firebase/config";
import AboutMe from "./components/AboutMe";
import AboutDeveloper from "./components/AboutDeveloper";

function App() {
  const [overlayClosed, setOverlayClosed] = useState(true);
  const [user, setUser] = useState(null);

  const menuHandler = () => {
    setOverlayClosed(!overlayClosed);
  };

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, []);

  const logout = () => {
    projectAuth
      .signOut()
      .then(() => {
        alert("Sign out successfully!");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className='App'>
      <Router>
        <ThemeContextProvider>
          <Navbar menuHandler={menuHandler} user={user} logout={logout} />
          <NavbarOverlay
            overlayClosed={overlayClosed}
            menuHandler={menuHandler}
            user={user}
            logout={logout}
          />
          <AnimationContextProvider>
            <Route
              path='/'
              exact
              render={() => (
                <React.Fragment>
                  <LandingPageBody />
                </React.Fragment>
              )}
            />
            <Route
              path='/gallery'
              exact
              render={() => <Gallery user={user} />}
            />
            <Route path='/login' exact render={() => <Login user={user} />} />
            <Route path='/about-me' exact render={() => <AboutMe />} />
            <Route path='/developer' exact render={() => <AboutDeveloper />} />
            <Footer />
          </AnimationContextProvider>
        </ThemeContextProvider>
      </Router>
    </div>
  );
}

export default App;
