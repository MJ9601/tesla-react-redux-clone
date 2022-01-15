import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.svg";
import {
  activedHomeSlider,
  setArrengmentOfDisplayPage,
} from "../features/displaySlice";
import { selectUser } from "../features/userSlice";
import { selectSiteConfig } from "../features/displaySlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const currentUrl = useLocation();
  const [navbarProduct, setNavbarProduct] = useState(false);

  const siteConfig = useSelector(selectSiteConfig);
  useEffect(() => {
    setNavbarProduct(currentUrl.pathname.split("/").length > 2 ? true : false);
  }, [currentUrl]);

  const buttonMaker = (title) => (
    <IconButton
      sx={{
        borderRadius: "1rem",
        mx: ".3rem",
        fontWeight: "600",
        color: navbarProduct ? "#eee" : "rgba(0, 0, 0, .7)",
        px: "1.3rem",
      }}
      onClick={() => handleClick(title)}
    >
      {title}
    </IconButton>
  );

  const handleClick = (title) => {
    title === "Menu" && dispatch(activedHomeSlider());
    title === "Account" && navigate(`../${!user ? "signIn" : "account"}`);
    title === "Shop" && navigate(`../${title}`);
    // console.log(siteConfig);
    if (Object.keys(siteConfig).includes(title)) {
      dispatch(
        setArrengmentOfDisplayPage(siteConfig[`${title}`].pageArrengement)
      );

      navigate(`../product/${title}`, { replace: true });
    }
  };
  return (
    <Nav>
      <LogoImg
        src={logo}
        navbarProduct={navbarProduct}
        onClick={() => navigate("../")}
      />
      <ModelButton>
        {buttonMaker("Model S")}
        {buttonMaker("Model 3")}
        {buttonMaker("Model X")}
        {buttonMaker("Model Y")}
        {buttonMaker("Solar Roof")}
        {buttonMaker("Solar Panels")}
      </ModelButton>
      <Wrapper>
        <ModelButton>
          {buttonMaker("Shop")}
          {buttonMaker("Account")}
        </ModelButton>
        {buttonMaker("Menu")}
      </Wrapper>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  padding: 1.4rem 2rem;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
`;
const LogoImg = styled.img`
  width: 10rem;
  object-fit: contain;
  cursor: pointer;
`;
const ModelButton = styled.div`
  display: flex;
  justify-content: space-around;
  z-index: 998;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Wrapper = styled(ModelButton)`
  @media (max-width: 1200px) {
    display: flex;
  }
`;
