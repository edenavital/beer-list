import * as Styled from "./Layout.styles";

// Suppose to wrap the root children with styles
export const Layout = ({ children }) => {
  return <Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>;
};
