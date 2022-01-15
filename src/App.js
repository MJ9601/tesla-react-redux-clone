import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectController,
  selectHomeSlider,
  setController,
  setSiteConfig,
} from "./features/displaySlice";
import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const activeSidebarHome = useSelector(selectHomeSlider);
  const [deactived, setDeactived] = useState(false);
  const dispatch = useDispatch();
  const controllers = useSelector(selectController);

  useLayoutEffect(() => {
    const getData = async () => {
      const res = await fetch("controllers.json");
      const ControllerData = await res.json();
      dispatch(setController(ControllerData));
      const resp = await fetch("pagesConfig.json");
      const pageConfig = await resp.json();
      dispatch(setSiteConfig(pageConfig));
    };
    getData();
  }, []);
  useEffect(() => {
    setDeactived(activeSidebarHome ? true : false);
    console.log(controllers);
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
          path={"/product/:id"}
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
