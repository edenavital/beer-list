import styled from "styled-components";

export const LayoutWrapper = styled("div")(({ theme }) => ({
  width: "100vw",
  ...theme.mixins.genericFlex,
}));
