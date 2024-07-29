import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">admin</div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(95vh - 10vh);
  background: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    .admin {
      background: red;
      position: absolute;
      height: 250px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
