import React from "react";
import styled from "styled-components";
import ProductPresentSectionHeader from "./ProductSubSections/ProductPresentSectionHeader";
import ProductPresentSectionBody from "./ProductSubSections/ProductPresentSectionBody";
import ProductFlexSection from "./ProductSubSections/ProductFlexSection";

const ProductPresentSection = ({ data }) => {
  // console.log(data.components);
  const isflex = data.isflex;
  const hasBlackBg = data.hasBlackBg;
  const type = data.type;
  const typeOneComponents = data.components.filter(
    (component) => Object.keys(component)[0] !== "ProductFlexSection"
  );
  const typeTwoComponents = data.components.filter(
    (component) => Object.keys(component)[0] === "ProductFlexSection"
  );
  const _alias = {
    ProductFlexSection: ProductFlexSection,
    ProductPresentSectionBody: ProductPresentSectionBody,
    ProductPresentSectionHeader: ProductPresentSectionHeader,
  };
  return (
    <>
      <SectionWrapper isflex={isflex} hasBlackBg={hasBlackBg}>
        {type === "type-1" && (
          <>
            {typeOneComponents.map((component, index) => {
              const TagName = _alias[Object.keys(component)[0]];
              return <TagName key={index} data={Object.values(component)[0]} />;
            })}
          </>
        )}
        {type === "type-2" && (
          <Wrap>
            {typeTwoComponents.map((component, index) => {
              const TagName = _alias[Object.keys(component)[0]];
              return <TagName key={index} data={Object.values(component)[0]} />;
            })}
          </Wrap>
        )}
      </SectionWrapper>
    </>
  );
};

export default ProductPresentSection;
const SectionWrapper = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => (props.hasBlackBg ? "#000" : "#fff")};
  display: ${(props) => (props.isflex ? "flex" : "block")};
  @media (max-width: 1400px) {
    display: block;
  }
  @media (max-width: 640px) {
    height: fit-content;
  }
`;
const Wrap = styled.div`
  height: fit-content;
  min-height: 100vh;
  padding: 5rem 0;
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
