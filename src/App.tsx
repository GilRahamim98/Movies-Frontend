import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import routes from "./route-config";
import "./App.css";
import { useEffect, useState } from "react";
import { claim } from "./models/auth.models";
import AuthenticationContext from "./components/auth/AuthenticationContext";
import { getClaims } from "./utils/handleJWT";
import configureInterceptor from "./utils/httpInterceptors";

configureInterceptor()

function App() {
  const [claims, setClaims] = useState<claim[]>([]);
  useEffect(()=>{
    setClaims(getClaims())

  },[])

  function isAdmin() {
    return (
      claims.findIndex(
        (claim) => claim.name === "role" && claim.value === "admin"
      ) > -1
    );
  }

  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Menu />
        <div className="container">
          <Routes>
            {routes.map((route) => (
              <>
                {route.isAdmin && !isAdmin() ? (
                  <> אין לך אישור להגיע לדף זה </>
                ) : (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                  />
                )}
              </>
            ))}
          </Routes>
        </div>
        <Footer />
      </AuthenticationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
