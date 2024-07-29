import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";
import NavbarLeftSide from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";

export default function OrderPage() {
  const { username } = useParams();
  const [isModeAdmin, setisModeAdmin] = useState(true);

  const orderContextValue = {
    isModeAdmin,
    setisModeAdmin,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <NavbarLeftSide username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 98.3vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    background-color: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
