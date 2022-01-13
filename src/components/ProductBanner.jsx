import { KeyboardArrowDown, Speed } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { MainButton } from "./Buttons";

const ProductBanner = () => {
  return (
    <Wrapper>
      <HeadLine>Model 3</HeadLine>
      <InnerWrapper>
        <Container>
          <DetailWrapper>
            <Wrap>
              <Htag>
                <Speed sx={{ fontSize: "4rem", mr: "1rem" }} />
                3.1 s
              </Htag>
              <Ptag>0-60 mph*</Ptag>
            </Wrap>
            <Wrap>
              <Htag>358 mi</Htag>
              <Ptag>Range (EPA est.)</Ptag>
            </Wrap>
            <Wrap>
              <Htag>AWD</Htag>
              <Ptag>Dual Motor</Ptag>
            </Wrap>
          </DetailWrapper>
          <MainButton title="order now" onBanner={true} width={"50%"} />
        </Container>
        <KeyboardArrowDown
          sx={{
            fontSize: "3rem",
            mt: "2rem",
            animation: "LinearMovingRapiedly infinite 1.5s",
            color: "#fff",
          }}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default ProductBanner;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/d0cecbbf-1a20-4b48-b136-fb096af19515/bvlatuR/std/2880x1800/model-3-main-hero-a-desktop");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;
const HeadLine = styled.h1`
  color: #fff;
  font-size: 4.5rem;
  font-weight: 500;
`;
const Wrap = styled.div`
  margin: 0 1rem;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 98%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-item: center;
    justify-content: space-between;
    height: 15rem;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
`;
const Htag = styled.h3`
  font-size: 3.6rem;
  color: #fff;
  font-weight: 400;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: flex-start;
  @media (max-width: 640px) {
    font-size: 3rem;
  }
`;
const Ptag = styled.p`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
