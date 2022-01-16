import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ProductCard = () => {
  return (
    <Wrap>
      <IconButton sx={{ position: "absolute", right: ".5rem", top: ".5rem" }}>
        <Close sx={{ fontSize: "2rem", ":hover": { color: "red" } }} />
      </IconButton>
      <Image src="https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-" />
      <Container>
        <Htag>Product Name</Htag>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          adipisci.
        </p>
      </Container>
    </Wrap>
  );
};

export default ProductCard;
const Wrap = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 2rem;
  border: 0.1rem solid #999;
  cursor: pointer;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 18rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;
const Container = styled.div`
  width: 100%;
  padding: 0.5rem 0.8rem;
  > p {
    font-size: 1.3rem;
    line-height: 2.1rem;
  }
`;
const Htag = styled.h1`
  font-weight: 400;
  margin-bottom: 0.7rem;
`;
