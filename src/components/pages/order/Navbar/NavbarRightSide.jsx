import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButton />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
