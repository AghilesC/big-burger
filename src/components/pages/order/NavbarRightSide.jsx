import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      Right
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.nav`
  background: purple;
`;
