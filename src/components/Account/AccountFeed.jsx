import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectAccountFeed } from "../../features/displaySlice";
import ProductCard from "./ProductCard";

const AccountFeed = () => {
  const accountFeed = useSelector(selectAccountFeed);
  useEffect(() => {}, [accountFeed]);
  return (
    <Wrapper>
      <FeedContainer>
        <h1>{accountFeed}</h1>
        <ContentWrapper></ContentWrapper>
      </FeedContainer>
    </Wrapper>
  );
};

export default AccountFeed;
const Wrapper = styled.div`
  width: 75%;
  margin-top: 2rem;
  display: grid;
  place-items: center;
  @media (max-width: 1200px) {
    width: 95%;
  }
`;
const FeedContainer = styled.div`
  width: 98%;
  height: 93%;
  margin: 0 auto;
  margin-top: 3rem;
  overflow-y: hidden;
  @media (max-width: 1200px) {
    padding-left: 3rem;
  }
  @media (max-width: 640px) {
    padding: 0 1rem;
  }
  > h1 {
    font-size: 4rem;
    font-weight: 400;
    color: rgb(50, 50, 50);
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 92%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  gap: 2rem;
`;
