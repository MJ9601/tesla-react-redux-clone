import React from "react";
import styled from "styled-components";

const ProductPresentSectionHeader = ({
  imgSrc,
  isHorizental,
  isLeft,
  wrapHeight,
  wrapWidth,
  hasVideo,
}) => {
  return (
    <HeadWrapper wrapHeight={wrapHeight} wrapWidth={wrapWidth}>
      {!hasVideo ? (
        <Image src="https://tesla-cdn.thron.com/delivery/public/image/tesla/02b9fe62-2569-4fc8-bfa1-a8f8cdd9d48e/bvlatuR/std/1440x900/lhd-awd-hero-desktop" />
      ) : (
        <>
          <Video
            src="https://tesla-cdn.thron.com/static/A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4"
            loop
            muted
            controls
            autoPlay
          />
        </>
      )}
      <VideoCover>
        <ImgDetailWrapper isHorizental={isHorizental} isLeft={isLeft}>
          <DetailWrapper>
            <Htag>2</Htag>
            <Ptag>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Ptag>
          </DetailWrapper>
          <DetailWrapper>
            <Htag>10 ms</Htag>
            <Ptag>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Ptag>
          </DetailWrapper>
          <DetailWrapper>
            <Htag>2</Htag>
            <Ptag>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Ptag>
          </DetailWrapper>
        </ImgDetailWrapper>
      </VideoCover>
    </HeadWrapper>
  );
};

export default ProductPresentSectionHeader;

const HeadWrapper = styled.div`
  width: ${(props) => props.wrapWidth};
  position: relative;
  height: ${(props) => props.wrapHeight};
  @media (max-width: 1400px) {
    hieght: 75vh;
    width: 100%;
  }
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 0;
`;
const VideoCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 1;
`;
const ImgDetailWrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  left: ${(props) => props.isLeft && "5%"};
  right: ${(props) => !props.isLeft && props.isHorizental && "5%"};
  top: ${(props) => props.isHorizental && "0"};
  width: ${(props) => (props.isHorizental ? "50%" : "100%")};
  max-width: ${(props) => (props.isHorizental ? "35rem" : "100%")};
  display: flex;
  flex-direction: ${(props) => (props.isHorizental ? "column" : "row")};
  justify-content: space-around;
  align-items: center;
  @media (max-width: 700px) {
    top: 3rem;
    right: 1rem;
    bottom: 0;
    flex-direction: column;
    width: 50%;
  }
`;
const DetailWrapper = styled.div`
  text-align: center;
  color: #fff;
`;
const Htag = styled.h2`
  font-size: 3rem;
`;
const Ptag = styled.p`
  font-size: 1.6rem;
  padding: 0 1rem;
`;
