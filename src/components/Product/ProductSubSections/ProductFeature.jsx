import React from "react";
import styled from "styled-components";

const ProductFeature = () => {
  return (
    <Wrap>
      <hr />
      <h1>Range (EPA est.)</h1>
      <p>333 mi</p>
    </Wrap>
  );
};

export default ProductFeature;
const Wrap = styled.div`
  width: 45%;
  padding-left: 0.5rem;
  > hr {
    width: 30%;
    border: 0.05rem solid #777;
    margin-bottom: 1rem;
  }
  > h1 {
    color: #fff;
    font-size: 1.7rem;
    font-weight: 400;
    margin-bottom: 0.7rem;
  }
  > p {
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  @media(max-width: 640px){
    
  }
`;
