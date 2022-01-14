import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductBanner from "./Product/ProductBanner";
import ProductDetailsSection from "./Product/ProductDetailsSection";
import ProductOrderSection from "./Product/ProductOrderSection";
import ProductPresentSection from "./Product/ProductPresentSection";
import ProductSliderSection from "./Product/ProductSliderSection";
import SidebarSlicer from "./SidebarSlicer";

const ProductPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <SidebarSlicer />
      <ProductBanner />
      <ProductPresentSection type={"type-1"} isflex={false} />
      <ProductPresentSection type={"type-2"} hasBlackBg={true} />
      <ProductSliderSection />
      <ProductDetailsSection hasBlackBg={true} />
      <ProductOrderSection />
      <Footer />
    </Wrapper>
  );
};

export default ProductPage;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
