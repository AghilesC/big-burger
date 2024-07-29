import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
export default function AdminPanel() {
  return <AdminPanelStyled>AdminPanel</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  border: 1px solid red;
  height: 250px;
  background: ${theme.colors.white};
  border: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;