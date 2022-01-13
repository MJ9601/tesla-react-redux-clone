import React from "react";
import styled from "styled-components";
import { MainButton, SecondaryButton } from "./Buttons";

const ProductPresentSectionBody = ({
  hasOneButton,
  wrapHeight,
  wrapWidth,
  hasImg,
  isVertical,
  imgSrc,
}) => {
  return (
    <WrapperText wrapHeight={wrapHeight} wrapWidth={wrapWidth}>
      <ContainerLeft isVertical={isVertical}>
        <HeaderWrapper isVertical={isVertical}>
          <TextHtag>All-Wheel Drive</TextHtag>
          <HeadTag>Duel Motor</HeadTag>
        </HeaderWrapper>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus ipsum mollitia exercitationem libero natus at
          consequatur saepe? Aliquid nemo cupiditate perspiciatis temporibus
          ipsam. Ipsum ducimus obcaecati delectus autem placeat voluptatum.
        </p>
        {hasImg ? (
          <ImageTag src="https://tesla-cdn.thron.com/delivery/public/image/tesla/31a606f1-7ae2-456e-8588-f5a779759336/bvlatuR/std/0x0/model-3-range-map" />
        ) : (
          <></>
        )}
      </ContainerLeft>
      <ButtonWrapper>
        <SecondaryButton title="Learn more" width={"20rem"} />
        <MainButton title="order now" width={"20rem"} />
      </ButtonWrapper>
    </WrapperText>
  );
};

export default ProductPresentSectionBody;
const WrapperText = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: ${(props) => props.wrapWidth};
  height: ${(props) => props.wrapHeight};
  @media (max-width: 1400px) {
    width: 100%;
    height: 35vh;
  }
`;
const ContainerLeft = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isVertical ? "column" : "row")};
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 3rem;
  @media (max-width: 1400px) {
    flex-direction: row;
  }
  > p {
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.6);
    width: 50%;
    min-width: 30rem;
    line-height: 2.6rem;
    @media (max-width: 850px) {
      width: 100%;
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const TextHtag = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
`;
const HeadTag = styled.h1`
  font-weight: 500;
  letter-spacing: 0.25rem;
  font-size: 3.4rem;
  margin-bottom: 2.4rem;
`;
const HeaderWrapper = styled.div`
  width: ${(props) => (props.isVertical ? "100%" : "50%")};
  text-align: ${(props) => (props.isVertical ? "start" : "center")};
  min-width: 30rem;
  @media (max-width: 1400px) {
    width: 100%;
    text-align: center;
  }
`;
const ButtonWrapper = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ImageTag = styled.img`
  width: 90%;
  min-width: 30rem;
  object-fit: cover;
  margin-top: 2rem;
  @media (max-width: 1400px) {
    display: none;
  }
`;
