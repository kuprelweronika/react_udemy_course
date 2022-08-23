import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";
//dodaje AuthContext

//aplikacja z logowaniem sie bez wylogowywania, useReducer, useEffect
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ctx = useContext(AuthContext);
  return (
    //wywalam React.Fragment bo mam inny wraper
    //<React.Fragment>
    //takie ustawienie AuthContext.Provider pozwala wszystkim dzieciom tego komponentu mieć
    //dostęp do danych z AuthContext
    //<AuthContext.Provider
    //  value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    //>
    <React.Fragment>
      <MainHeader //{/*isAuthenticated={isLoggedIn}*/}
      //onLogout={logoutHandler}
      />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
    //</AuthContext.Provider>
    //</React.Fragment>
  );
}

export default App;
