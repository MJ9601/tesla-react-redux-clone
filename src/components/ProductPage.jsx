import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ProductBanner from "./ProductBanner";
import ProductPresentSection from "./ProductPresentSection";
import SidebarSlicer from "./SidebarSlicer";

const ProductPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <SidebarSlicer />
      <ProductBanner />
      <ProductPresentSection />
    </Wrapper>
  );
};

export default ProductPage;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
