import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectController,
  updateOneControllerStatus,
} from "../../../features/displaySlice";

const ProductController = ({ index, controllerName }) => {
  const controllers = useSelector(selectController);
  const control = controllers[controllerName];

  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(control[index].isActive);
  }, [control]);

  const handleClick = () => {
    const controllerStatus = Array(control.length).fill(false);

    controllerStatus[index] = true;
    const updatedControllerArray = controllerStatus.map((_status, _index) => ({
      isActive: _status,
      src: control[_index].src,
    }));
    const updatedController = {};
    updatedController[controllerName] = updatedControllerArray;
    // console.log(updatedController);
    dispatch(updateOneControllerStatus(updatedController));
  };

  return (
    <Wrap onClick={handleClick} active={active}>
      <Container>
        <HeadLine>San Jose to Los Angeles</HeadLine>
        <DetailTag>
          <span>340</span> miles
        </DetailTag>
      </Container>
    </Wrap>
  );
};

export default ProductController;
const Wrap = styled.div`
  cursor: pointer;
  border: ${(props) => (props.active ? ".3rem solid #000" : "none")};
  border-top: ${(props) =>
    props.active ? ".3rem solid #000" : ".3rem solid #888"};
  width: fit-content;
  height: fit-content;
  transition: all 0.3s ease;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;
const Container = styled.div`
  padding: 2rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 20rem;
  height: 20rem;
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
