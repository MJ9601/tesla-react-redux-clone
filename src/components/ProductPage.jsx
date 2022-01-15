import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectArrengmentOfDisplayPage,
  selectSiteConfig,
} from "../features/displaySlice";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductBanner from "./Product/ProductBanner";
import ProductDetailsSection from "./Product/ProductDetailsSection";
import ProductOrderSection from "./Product/ProductOrderSection";
import ProductPresentSection from "./Product/ProductPresentSection";
import ProductSliderSection from "./Product/ProductSliderSection";
import SidebarSlicer from "./SidebarSlicer";

const ProductPage = () => {
  const pageConfig = useSelector(selectArrengmentOfDisplayPage);
  // const siteConfig = useSelector(selectSiteConfig);

  const _alias = {
    ProductBanner: ProductBanner,
    ProductDetailsSection: ProductDetailsSection,
    ProductOrderSection: ProductOrderSection,
    ProductSliderSection: ProductSliderSection,
    ProductPresentSection: ProductPresentSection,
  };

  useEffect(() => {
    // console.log(pageConfig);
  }, []);
  return (
    <Wrapper>
      <Navbar />
      <SidebarSlicer />
      {pageConfig.map((component, index) => {
        const TagName = _alias[Object.keys(component)[0]];
        return <TagName key={index} data={Object.values(component)[0]} />;
      })}
      <Footer />
    </Wrapper>
  );
};

export default ProductPage;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
