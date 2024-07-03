import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
export default function OrderPage() {
 
const {username} = useParams()

 
 
 return <OrderPageStyled>
    <div className="container">
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </div>
  </OrderPageStyled>
}



const OrderPageStyled = styled.div`
  background-color: orange;
  height: 98.3vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: red;
    height: 95vh;
    width: 1400px;
  }
`;

