import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <HTag>Tesla &copy; 2022</HTag>;
};

export default Footer;
const HTag = styled.h1`
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  background-color: transparent;
`;
