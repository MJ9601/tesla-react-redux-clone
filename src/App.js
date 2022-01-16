import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectController,
  selectHomeSlider,
  selectLandingPageArrengment,
  selectSiteConfig,
  setController,
  setLandingPage,
  setSiteConfig,
} from "./features/displaySlice";
import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";
import Account from "./components/Account/Account";

function App() {
  const activeSidebarHome = useSelector(selectHomeSlider);
  const [deactived, setDeactived] = useState(false);
  const dispatch = useDispatch();
  const siteConfig = useSelector(selectSiteConfig);

  const user = useSelector(selectUser);

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
    const ProductNames = Object.keys(siteConfig);
    const landingPageArrengment = {};
    ProductNames.forEach((product) => {
      landingPageArrengment[product] = {
        src: siteConfig[product].src,
        isCar: siteConfig[product].isCar,
      };
    });
    dispatch(setLandingPage(landingPageArrengment));
  }, [siteConfig]);

  useEffect(() => {
    setDeactived(activeSidebarHome ? true : false);
  }, [activeSidebarHome]);

  return (
    <Router>
      <Routes>
        <Route path={"/signIn"} element={<Login />} />
        <Route path={"/product/:id"} element={<ProductPage />} />
        <Route path={"/account"} element={<Account />} />

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
