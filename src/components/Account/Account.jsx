import React from "react";
import styled from "styled-components";
import AccountFeed from "./AccountFeed";
import AccountSidebar from "./AccountSidebar";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SidebarSlicer from "../SidebarSlicer";

const Account = () => {
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
