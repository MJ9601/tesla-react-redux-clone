import React from "react";
import styled from "styled-components";

export const MainButton = ({ title, width, onBanner }) => {
  return (
    <Button width={width} onBanner={onBanner}>
      {title}
    </Button>
  );
};

const Button = styled.button`
  width: ${(props) => props.width};
  border-radius: 3rem;
  border: 0.3rem solid ${(props) => (props.onBanner ? "#fff" : "#000")};
  padding: 1rem 2rem;
  color: ${(props) => (props.onBanner ? "#fff" : "#000")};
  background-color: rgba(0, 0, 0, 0);
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => (props.onBanner ? "#fff" : "#000")};
    color: ${(props) => (props.onBanner ? "#000" : "#fff")};
  }
`;

export const SecondaryButton = ({ title, width, onBanner }) => {
  return (
    <Btn width={width} onBanner={onBanner}>
      <div>+</div>
      {title}
    </Btn>
  );
};

const Btn = styled(Button)`
  border: none;
  padding: 0.5rem 2rem;
  margin: 0 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &:hover > div {
    background-color: #000;
    color: #fff;
  }
  &:hover {
    color: #000;
    background-color: #fff;
  }
  > div {
    transition: all 0.4s ease-in-out;
    margin-right: 0.5rem;
    font-size: 3rem;
    border: 0.3rem solid #000;
    border-radius: 50%;
    padding: 0 1rem;
    text-align: center;
  }
`;
