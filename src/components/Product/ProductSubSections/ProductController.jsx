import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductController = ({ isActive }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(isActive ? true : false);
  }, [isActive]);
  return (
    <Wrap onClick={() => setActive(true)} active={active}>
      <HeadLine>San Jose to Los Angeles</HeadLine>
      <DetailTag>
        <span>340</span> miles
      </DetailTag>
    </Wrap>
  );
};

export default ProductController;
const Wrap = styled.div`
  cursor: pointer;
  border: ${(props) => (props.active ? ".3rem solid #000" : "none")};
  border-top: ${(props) =>
    props.active ? ".3rem solid #000" : ".3rem solid #888"};
  padding: 2rem 0.8rem;
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.3s ease;
`;
const HeadLine = styled.h1`
  font-weight: 400;
  color: #888;
`;
const DetailTag = styled.p`
  font-size: 2rem;
  color: #888;
  > span {
    color: rgb(80, 80, 80);
    font-size: 3rem;
    font-weight: 500;
  }
`;
