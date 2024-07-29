import React from "react";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { RxChevronDown } from "react-icons/rx";
export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab Icon={<RxChevronDown />} />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
`;
