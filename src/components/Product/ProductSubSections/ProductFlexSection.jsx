import React from "react";
import styled from "styled-components";

const ProductFlexSection = ({ isLeft, imgSrc }) => {
  return (
    <Wrap isLeft={isLeft}>
      <TextWrapper isLeft={isLeft}>
        <h1>New Wheels and Tires</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, libero
          impedit suscipit ea explicabo numquam nisi vero?
        </p>
      </TextWrapper>
      <Image src="https://tesla-cdn.thron.com/delivery/public/image/tesla/a9b54155-913f-4a82-b696-89b176c95ca1/bvlatuR/std/1040x584/MX-Exterior-Grid-B-Desktop" />
    </Wrap>
  );
};

export default ProductFlexSection;

const Wrap = styled.div`
  height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => !props.isLeft && "row-reverse"};
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
    height: fit-content;
  }
`;
const TextWrapper = styled.div`
  padding-left: ${(props) => !props.isLeft && "4rem"};
  > h1 {
    color: #fff;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  > p {
    color: #fff;
    padding-right: 2rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  @media (max-width: 640px) {
    width: 75%;
    padding-left: 0;
    margin: 2rem 0;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 50%;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 75%;
  }
`;
