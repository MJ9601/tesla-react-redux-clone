import styled from "styled-components";
import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

export const SectionHome = ({ model, bgImg, isCar }) => {
  return (
    <Container bgImage={bgImg}>
      <div style={{ textAlign: "center" }}>
        <ModelName>{model}</ModelName>
        <p
          style={{
            fontSize: "2rem",
            color: "rgba(0, 0, 0, .6)",
            display: model == "Accessories" ? "none" : "block",
          }}
        >
          {isCar ? (
            <>
              Order Online for <Atag href="#">Touchless Delivery</Atag>
            </>
          ) : (
            <>Lowest Cost Solar Panels in America</>
          )}
        </p>
      </div>
      <Wrapper>
        <ButtonWrapper>
          <ButtonLeft Deactive={model == "Accessories" ? true : false}>
            {model != "Accessories"
              ? isCar
                ? "Custom Order"
                : "order now"
              : "Shop now"}
          </ButtonLeft>

          <ButtonRight Deactive={model == "Accessories" ? true : false}>
            {isCar ? "Existing inventory" : "learn more"}
          </ButtonRight>
        </ButtonWrapper>
        <KeyboardArrowDown
          sx={{
            fontSize: "5rem",
            mt: "2rem",
            animation: "LinearMovingRapiedly infinite 1.5s",
            color: "rgba(0, 0, 0, .9)",
            display: model == "Accessories" ? "none" : "block",
          }}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/model-3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  padding-top: 15rem;
  background-image: url("/images/${(props) => props.bgImage}");
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ModelName = styled.h1`
  font-size: 4.5rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;
  margin-bottom: 1rem;
`;
const Atag = styled.a`
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out;
  &:hover {
    border-bottom: 0.2rem solid rgba(0, 0, 0, 1);
  }
`;
const ButtonLeft = styled.button`
  background-color: rgba(0, 0, 0, 1);
  opacity: ${(props) => (props.Deactive ? 1 : 0.65)};
  color: #fff;
  width: 25rem;
  padding: 1.2rem 0rem;
  border: none;
  margin: 0 1rem;
  text-transform: uppercase;
  border-radius: 3rem;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.08rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;
const ButtonRight = styled(ButtonLeft)`
  background-color: #fff;
  color: #000;
  display: ${(props) => (props.Deactive ? "none" : "block")};
`;
const ButtonWrapper = styled.div`
  display: flex;
  @media (max-width: 640px) {
    display: block;
  }
`;
