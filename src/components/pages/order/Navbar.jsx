import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side"> Left </div>
      <div className="right-side">
        Right
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Deconnexion</button>
        </Link>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  .right-side {
    background: purple;
  }

  .left-side {
    background: pink;
  }
`;
