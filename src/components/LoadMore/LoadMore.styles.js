import styled from "styled-components";

export const LoadMoreWrapper = styled("div")(({ theme }) => ({
  ...theme.mixins.genericFlex,
  margin: "auto",
  marginTop: theme.spacing.TINO,
}));

export const LoadMoreContent = styled("div")(({ theme }) => ({
  display: "flex",
  textTransform: "none",
}));
