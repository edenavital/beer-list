import styled from "styled-components";
import { Typography } from "../../components/Typography";

export const BeerListScreenWrapper = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  padding: theme.spacing.MEDIUM,
  width: "100%",
  height: "100%",
}));

export const BeerListTitle = styled(Typography)((props) => {
  const { theme } = props;
  return {
    width: "fit-content",
    padding: theme.spacing.TINO,
    textTransform: "none",
    "&.MuiTypography-root": {
      color: theme.palette.primary.grey,
      fontWeight: 600,
    },
  };
});

export const ErrorWrapper = styled("div")(({ theme }) => ({
  ...theme.mixins.genericFlex,
  margin: "auto",
}));
