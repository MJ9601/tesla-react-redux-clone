import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";

const SidebarOptions = ({ title }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const handleClick = (title) => {
    title === "Account" && navigate(`/${!user ? "signIn" : "account"}`);
  };
  return (
    <IconButton
      sx={{
        color: "rgba(0,0,0,.9)",
        width: "100%",
        display: "flex",
        justifyContent: "start",
        pl: "1.5rem",
        borderRadius: "2rem",
        fontSize: "1.7rem",
        transition: "all .5s ease",
        my: ".5rem",
      }}
      onClick={() => handleClick(title)}
    >
      {title}
    </IconButton>
  );
};

export default SidebarOptions;
