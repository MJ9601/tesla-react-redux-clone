import React from "react";
import styled from "styled-components";
import ProductPresentSectionHeader from "./ProductSubSections/ProductPresentSectionHeader";
import ProductPresentSectionBody from "./ProductSubSections/ProductPresentSectionBody";
import ProductFlexSection from "./ProductSubSections/ProductFlexSection";

const ProductPresentSection = ({ type, isflex, hasBlackBg }) => {
  return (
    <SectionWrapper isflex={isflex} hasBlackBg={hasBlackBg}>
      {type === "type-1" && (
        <>
          <ProductPresentSectionHeader
            isHorizental={false}
            isLeft={false}
            wrapHeight={"75vh"}
            wrapWidth={"100%"}
            hasVideo={true}
          />
          <ProductPresentSectionBody
            hasImg={false}
            isVertical={false}
            wrapHeight={"25vh"}
            wrapWidth={"100%"}
          />
        </>
      )}
      {type === "type-2" && (
        <Wrap>
          <ProductFlexSection isLeft={true} />
          <ProductFlexSection isLeft={false} />
          <ProductFlexSection isLeft={true} />
        </Wrap>
      )}
    </SectionWrapper>
  );
};

export default ProductPresentSection;
const SectionWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => (props.hasBlackBg ? "#000" : "#fff")};
  display: ${(props) => (props.isflex ? "flex" : "block")} @media
    (max-width: 1400px) {
    display: block;
  }
  @media (max-width: 640px) {
    height: fit-content;
  }
`;
const Wrap = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 75%;
  }
  @media (max-width: 640px) {
    width: 95%;
    
    height: fit-content;
    padding: 3rem 0;
  }
`;
