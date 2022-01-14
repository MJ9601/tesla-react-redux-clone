import React from "react";
import styled from "styled-components";
import { MainButton } from "../Buttons";

const ProductOrderSection = ({ hasBlackBg }) => {
  return (
    <Wrap hasBlackBg={hasBlackBg}>
      <ContainerLeft>
        <h1>Model X</h1>
        <ButtonWrapper>
          <MainButton title="order now" width={"20rem"} />
          <MainButton title="compare" width={"20rem"} />
        </ButtonWrapper>
      </ContainerLeft>
      <ContainerRight>
        <Image src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f63a4f07-09f2-486b-b92f-bafdbcd2e4d3/bvlatuR/std/1660x920/MX-Order-Hero-Desktop" />
      </ContainerRight>
    </Wrap>
  );
};

export default ProductOrderSection;
const Wrap = styled.div`
  height: 100vh;
  width: 80%;
  background-color: ${(props) => (props.hasBlackBg ? "#000" : "#fff")};
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    gap: 10rem;
    width: 95%;
  }
`;
const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  > h1 {
    font-size: 4rem;
    font-weight: 500;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const ContainerRight = styled(ContainerLeft)``;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 2rem;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
