import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setAccountFeed } from "../../features/displaySlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const AccountOptions = ({ Icon, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelClick = async (title) => {
    title !== "Sign Out" && dispatch(setAccountFeed(title));
    if (title == "Sign Out") {
      signOut(auth);
      navigate("../");
    }
  };
  return (
    <Wrap onClick={() => handelClick(title)}>
      <IconButton className="icon_button">
        <Icon sx={{ fontSize: "3rem" }} />
      </IconButton>
      <h1>{title}</h1>
    </Wrap>
  );
};

export default AccountOptions;
const Wrap = styled.div`
  width: 100%;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  gap: 1rem;
  > h1 {
    font-size: 2rem;
    font-weight: 500;
    transition: all 0.3s ease;
    color: #999;
  }
  &:hover {
    > * {
      color: #444 !important;
    }
    > .icon_button {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  @media (max-width: 1200px) {
    padding: 0 1rem;
    border-right: 0.1rem solid rgba(0, 0, 0, 0.2);
    > h1 {
      display: none;
    }
  }
`;
