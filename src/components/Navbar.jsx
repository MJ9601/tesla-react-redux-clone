import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { activedHomeSlider } from "../features/displaySlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const buttonMaker = (title, action) => (
    <IconButton
      sx={{
        borderRadius: "1rem",
        mx: ".3rem",
        fontWeight: "600",
        color: "rgba(0, 0, 0, .7)",
        px: "1.3rem",
      }}
      onClick={action && (() => dispatch(activedHomeSlider()))}
    >
      {title}
    </IconButton>
  );
  return (
    <Nav>
      <LogoImg src="images/logo.svg" />
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
        {buttonMaker("Menu", true)}
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
