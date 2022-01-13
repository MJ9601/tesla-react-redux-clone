import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import "./index.css";
import { useSelector } from "react-redux";
import { selectHomeSlider } from "./features/displaySlice";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";

function App() {
  const activeSidebarHome = useSelector(selectHomeSlider);
  const [deactived, setDeactived] = useState(false);
  useEffect(() => {
    setDeactived(activeSidebarHome ? true : false);
  }, [activeSidebarHome]);

  return (
    <Router>
      <Routes>
        <Route
          path={"/signIn"}
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path={"/model3"}
          element={
            <>
              <ProductPage />
            </>
          }
        />
        <Route
          exact
          path={"/"}
          element={
            <div className={!deactived ? "app" : "app deactive"}>
              <>
                <Navbar />
                <Home />
              </>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
