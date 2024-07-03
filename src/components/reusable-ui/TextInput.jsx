import styled from "styled-components";
import { theme } from "../theme";

export default function TextInput({ value, onChange, Icon, ...restProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font: ${theme.fonts.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font: ${theme.fonts.P0};
    color: #17161a;
    width: 100%;
  &::placeholder {
    background: ${theme.colors.white};
    color: ${theme.colors.greyExtraLight};
  }
}
`;
