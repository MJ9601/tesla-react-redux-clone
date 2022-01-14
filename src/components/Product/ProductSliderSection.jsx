import React from "react";
import styled from "styled-components";
import ProductController from "./ProductSubSections/ProductController";

const ProductSliderSection = () => {
  return (
    <Wrap>
      <Container>
        <HeadLine>Feedom to Travel</HeadLine>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum
          sapiente magni voluptatum temporibus odio, tenetur tempora minima
          maxime adipisci.
        </p>
        <DisplayWrapper>
          <Video
            muted
            autoPlay
            src="https://tesla-cdn.thron.com/static/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4?xseo="
          />
          <Cover></Cover>
        </DisplayWrapper>
        <ControllerWrapper>
          <ProductController />
          <ProductController />
          <ProductController isActive={false} />
          <ProductController />
        </ControllerWrapper>
      </Container>
    </Wrap>
  );
};

export default ProductSliderSection;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 640px) {
    height: fit-content;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
  > p {
    margin-top: 1.7rem;
    font-size: 1.7rem;
    line-height: 2.7rem;
  }
`;
const HeadLine = styled.h1`
  padding-top: 3rem;
  font-size: 3rem;
  font-weight: 500;
`;
const Cover = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100;
  left: 0;
`;
const DisplayWrapper = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ControllerWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;
