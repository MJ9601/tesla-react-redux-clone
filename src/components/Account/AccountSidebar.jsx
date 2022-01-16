import {
  CreditCardOutlined,
  HistoryOutlined,
  HomeOutlined,
  LogoutOutlined,
  PermIdentityOutlined,
  ShowChartOutlined,
  WorkOutline,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import AccountOptions from "./AccountOptions";

const AccountSidebar = () => {
  return (
    <Wrap>
      <AccountOptions title={"Dashboard"} Icon={HomeOutlined} />
      <AccountOptions title={"Profile Settings"} Icon={PermIdentityOutlined} />
      <AccountOptions title={"Payment Method"} Icon={CreditCardOutlined} />
      <AccountOptions title={"Charging"} Icon={ShowChartOutlined} />
      <AccountOptions title={"Loot Box"} Icon={WorkOutline} />
      <AccountOptions title={"Order History"} Icon={HistoryOutlined} />
      <AccountOptions title={"Sign Out"} Icon={LogoutOutlined} />
    </Wrap>
  );
};

export default AccountSidebar;

const Wrap = styled.div`
  max-width: 32rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1200px) {
    width: 6rem;
  }
`;
