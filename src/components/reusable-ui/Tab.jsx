import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
export default function Tab({ Icon, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      {Icon && Icon}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;

  cursor: pointer;

  position: relative;
  left: 5%;
  top: 1px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${theme.fonts.P0};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0px 0px;
  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }
`;
