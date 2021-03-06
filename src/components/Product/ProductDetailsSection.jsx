import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { MainButton } from "../Buttons";
import ProductFeature from "./ProductSubSections/ProductFeature";

const ProductDetailsSection = ({ data }) => {
  const hasBlackBg = data.hasBlackBg;
  const src = data.src;
  const [productDetails, setProductDetails] = useState([]);
  const currentUrl = useLocation();
  const productName = currentUrl.pathname.split("/")[2].replace("%20", " ");
  const handleClick = (model) => {
    setProductDetails(model);
  };
  return (
    <Wrap hasBlackBg={hasBlackBg}>
      <ContainerLeft>
        <img src={src} />
      </ContainerLeft>
      <ContainerRight>
        <h1>
          <span>{productName}</span> Spacs
        </h1>
        <DetailsWrapper>
          <WrapperLeft>
            <Button
              width={"17rem"}
              onBanner={true}
              onClick={() => handleClick(Array(4).fill(0))}
            >
              {productName} Plaid
            </Button>
            <Button
              width={"17rem"}
              onBanner={true}
              onClick={() => handleClick(Array(9).fill(0))}
            >
              {productName}
            </Button>
          </WrapperLeft>
          <WrapperRight>
            {productDetails.map((item, index) => (
              <ProductFeature key={index} />
            ))}
          </WrapperRight>
        </DetailsWrapper>
      </ContainerRight>
    </Wrap>
  );
};

export default ProductDetailsSection;
const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  background-color: ${(props) => (props.hasBlackBg ? "#000" : "#fff")};
  @media (max-width: 1200px) {
    padding: 0 3rem;
  }
  @media (max-width: 640px) {
    height: fit-content;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 3rem;
  }
`;
const ContainerLeft = styled.div`
  width: 50%;
  > img {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const ContainerRight = styled(ContainerLeft)`
  > h1 {
    padding-top: 4rem;
    margin-bottom: 2.5rem;
    color: #fff;
    font-size: 3rem;
    font-weight: 300;
    color: #eee;
    > span {
      color: #fff;
      margin-left: 0.4rem;
      font-weight: 500;
    }
  }
`;
const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 2rem;
`;
const WrapperLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 2rem;
`;
const WrapperRight = styled(WrapperLeft)`
  flex-wrap: wrap;
  max-width: 40rem;
`;

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
