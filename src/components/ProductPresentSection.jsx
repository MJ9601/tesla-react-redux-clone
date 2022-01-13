import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { MainButton } from "./Buttons";
import ProductPresentSectionHeader from "./ProductPresentSectionHeader";
import ProductPresentSectionBody from "./ProductPresentSectionBody";

const ProductPresentSection = () => {
  return (
    <SectionWrapper>
      <ProductPresentSectionHeader
        isHorizental={true}
        isLeft={true}
        wrapHeight={"100vh"}
        wrapWidth={"75%"}
        hasVideo={false}
      />
      <ProductPresentSectionBody
        hasImg={true}
        isVertical={true}
        wrapHeight={"100vh"}
        wrapWidth={"25%"}
      />
    </SectionWrapper>
  );
};

export default ProductPresentSection;
const SectionWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  @media (max-width: 1400px) {
    display: block;
  }
`;
