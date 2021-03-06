import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deActivedHomeSlider,
  selectHomeSlider,
} from "../features/displaySlice";
import { sidebarItems } from "../List";
import SidebarOptions from "./SidebarOptions";

const SidebarSlicer = () => {
  const sideActive = useSelector(selectHomeSlider);
  const dispatch = useDispatch();
  const [sidebarOptionList, setSidebarOptionList] = useState([]);
  useEffect(() => {
    window.innerWidth <= 1200
      ? setSidebarOptionList([...sidebarItems])
      : setSidebarOptionList(sidebarItems.slice(6));
  }, [sideActive]);

  return (
    <Sidebar active={sideActive}>
      <Container>
        <IconButton
          sx={{ ":hover": { color: "#000" } }}
          onClick={() => dispatch(deActivedHomeSlider())}
        >
          <Close sx={{ fontSize: "3rem" }} />
        </IconButton>
        <OptionWrapper>
          {sidebarOptionList.map((option, index) => (
            <SidebarOptions key={index} title={option} />
          ))}
        </OptionWrapper>
      </Container>
    </Sidebar>
  );
};

export default SidebarSlicer;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.active ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.5s ease-in-out;
  z-index: 999;
  overflow: hidden;
`;
const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 30rem;
  background-color: #fff;
  padding: 2rem 1rem;
  height: 100vh;
`;
const OptionWrapper = styled.div`
  width: 93%;
  height: 94%;
  overflow-y: auto;
  margin-top: 2rem;
  margin-left: 2rem;
`;
