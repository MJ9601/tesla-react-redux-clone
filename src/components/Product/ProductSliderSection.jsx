import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectController,
  updateOneControllerStatus,
} from "../../features/displaySlice";
import ProductController from "./ProductSubSections/ProductController";

const ProductSliderSection = ({ data }) => {
  // console.log(data);
  const controllerName = data.controllerName;
  const controllers = useSelector(selectController);
  const control = controllers[controllerName];
  console.log(controllers);
  const [src, setSrc] = useState("");
  useEffect(() => {
    setSrc(control.filter((ctrl) => ctrl.isActive)[0].src);
  }, [control]);

  useEffect(() => {
    const interval = setInterval(() => {
      const controllerStatus = Array(control.length).fill(false);
      for (const iterator of control) {
        if (iterator.isActive) {
          let index = control.indexOf(iterator);
          if (index < control.length - 1) {
            controllerStatus[index + 1] = true;
            break;
          } else {
            controllerStatus[0] = true;
            break;
          }
        }
      }

      const updatedControllerArray = controllerStatus.map(
        (_status, _index) => ({
          isActive: _status,
          src: control[_index].src,
        })
      );
      const updatedController = {};
      updatedController[controllerName] = updatedControllerArray;
      dispatch(updateOneControllerStatus(updatedController));
    }, 13000);
    return () => clearInterval(interval);
  }, [controllers]);

  const dispatch = useDispatch();

  return (
    <Wrap>
      <Container>
        <HeadLine>Feedom to Travel</HeadLine>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum
          sapiente magni voluptatum temporibus odio, tenetur tempora minima
          maxime adipisci.
        </p>
        <DisplayWrapper>
          <Video muted loop autoPlay src={src} />
          <Cover></Cover>
        </DisplayWrapper>
        <ControllerWrapper>
          {control.map((ctrl, index) => (
            <ProductController
              key={index}
              index={index}
              controllerName={controllerName}
            />
          ))}
        </ControllerWrapper>
      </Container>
    </Wrap>
  );
};

export default ProductSliderSection;

const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  @media (max-width: 640px) {
    height: fit-content;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
  > p {
    margin-top: 1.7rem;
    font-size: 1.7rem;
    line-height: 2.7rem;
  }
`;
const HeadLine = styled.h1`
  padding-top: 3rem;
  font-size: 3rem;
  font-weight: 500;
`;
const Cover = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100;
  left: 0;
`;
const DisplayWrapper = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ControllerWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    height: fit-content;
  }
`;
