import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <Profile />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.nav``;
