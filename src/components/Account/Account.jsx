import React, { useEffect } from "react";
import styled from "styled-components";
import AccountFeed from "./AccountFeed";
import AccountSidebar from "./AccountSidebar";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SidebarSlicer from "../SidebarSlicer";
import { onAuthStateChanged } from "firebase/auth";
import { LOGIN, LOGOUT, selectUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) =>
      userAuth
        ? dispatch(LOGIN({ email: userAuth.email, userId: userAuth.uid }))
        : dispatch(LOGOUT())
    );
  }, [user]);
  return (
    <Wrap>
      <Navbar />
      <SidebarSlicer />
      <Container>
        <AccountSidebar />
        <AccountFeed />
      </Container>
      <Footer />
    </Wrap>
  );
};

export default Account;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Container = styled.div`
  height: calc(100vh - 6rem);
  width: 100%;
  display: flex;
`;
