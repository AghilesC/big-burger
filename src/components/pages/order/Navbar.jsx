import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      Navbar
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: blue;
  height: 10vh;
`;
