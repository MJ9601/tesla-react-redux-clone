import { KeyboardArrowDown, Speed } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { selectArrengmentOfDisplayPage } from "../../features/displaySlice";
import { MainButton } from "../Buttons";

const ProductBanner = ({ data }) => {
  const infos = data.data;
  const currentUrl = useLocation();
  const productName = currentUrl.pathname.split("/")[2].replace("%20", " ");
  // console.log(infos);
  return (
    <Wrapper src={data.src}>
      <HeadLine>{productName}</HeadLine>
      <InnerWrapper>
        <Container>
          <DetailWrapper>
            {Object.keys(infos).map((info, index) => (
              <Wrap key={index}>
                <Htag>{infos[info]}</Htag>
                <Ptag>{info}</Ptag>
              </Wrap>
            ))}
          </DetailWrapper>
          <MainButton title="order now" onBanner width={"50%"} />
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
  background-image: url("${(props) => props.src}");
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
  @media (max-width: 640px) {
    width: 96%;
  }
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
