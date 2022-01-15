import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { MainButton } from "../Buttons";

const ProductOrderSection = ({ data }) => {
  const hasBlackBg = data.hasBlackBg;
  const imgSrc = data.src;
  const hasImage = data.hasImage;
  return (
    <Wrap hasBlackBg={hasBlackBg}>
      <Container>
        <ContainerLeft hasImage={hasImage}>
          <h1>Model X</h1>
          <ButtonWrapper hasImage={hasImage}>
            <MainButton
              title="order now"
              width={"20rem"}
              onBanner={hasBlackBg}
            />
            <MainButton title="compare" width={"20rem"} onBanner={hasBlackBg} />
          </ButtonWrapper>
        </ContainerLeft>
        {hasImage && (
          <ContainerRight hasImage={hasImage}>
            <Image src={imgSrc} />
          </ContainerRight>
        )}
      </Container>
    </Wrap>
  );
};

export default ProductOrderSection;
const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => (props.hasBlackBg ? "#000" : "#fff")};
`;
const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
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
  width: ${(props) => (props.hasImage ? "50%" : "100%")};
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
const ContainerRight = styled(ContainerLeft)`
  display: ${(props) => !props.hasImage && "none"};
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.hasImage ? "start" : "center")};
  gap: 2rem;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
