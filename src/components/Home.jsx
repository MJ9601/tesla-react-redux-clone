import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { SectionHome } from "./Section";
import SidebarSlicer from "./SidebarSlicer";

const Home = () => {
  return (
    <>
      <Wrapper>
        <SidebarSlicer />
        <SectionHome model={"Model 3"} bgImg={"model-3.jpg"} isCar />
        <SectionHome model={"Model Y"} bgImg={"model-y.jpg"} isCar />
        <SectionHome model={"Model S"} bgImg={"model-s.jpg"} isCar />
        <SectionHome model={"Model X"} bgImg={"model-x.jpg"} isCar />
        <SectionHome model={"Solar Panels"} bgImg={"solar-panel.jpg"} />
        <SectionHome model={"Solar Roof"} bgImg={"solar-roof.jpg"} />
        <SectionHome model={"Accessories"} bgImg={"accessories.jpg"} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;
