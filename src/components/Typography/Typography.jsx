import * as Styled from "./Typography.styles";

// When wrapping a component with styled - it must receive className as argument
export const Typography = ({ className, children, fontSize = 18 }) => {
  return (
    <Styled.Typography className={className} fontSize={fontSize}>
      {children}
    </Styled.Typography>
  );
};
