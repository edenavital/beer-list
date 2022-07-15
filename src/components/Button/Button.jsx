import * as Styled from "./Button.styles";

export const Button = ({ children, onClick }) => {
  return (
    <Styled.ButtonWrapper onClick={onClick}>{children}</Styled.ButtonWrapper>
  );
};
