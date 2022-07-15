import styled from "styled-components";
import { Typography } from "../Typography";
import { down } from "styled-breakpoints";

export const BeerItemWrapper = styled("li")((props) => {
  const { theme } = props;
  return {
    height: "200px",
    transition: "0.2s",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    display: "flex",
    width: "auto",
    margin: theme.spacing.BASE,
    borderRadius: 10,
    "&:hover": {
      background: theme.palette.primary.hover,
      cursor: "pointer",
    },
    [down("lg")(props)]: {
      width: "350px",
      margin: theme.spacing.BASE,
    },
  };
});

export const ImageWrapper = styled("img")(({ theme }) => ({
  width: 50,
  padding: theme.spacing.BIG,
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingRight: theme.spacing.BIG,
}));

export const Title = styled(Typography)(({ theme }) => ({
  "&.MuiTypography-root": {
    width: "100%",
    fontSize: "30px",
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    ...theme.mixins.textEllipsis,
    WebkitLineClamp: 0,
  },
}));

export const Tagline = styled(Typography)(({ theme }) => ({
  "&.MuiTypography-root": {
    width: "100%",
    color: theme.palette.primary.tagLine,
    fontWeight: 600,
    margin: `${theme.spacing.TINY} 0px`,
    ...theme.mixins.textEllipsis,
    WebkitLineClamp: 1,
  },
}));

export const Description = styled(Typography)((props) => {
  const { theme } = props;
  return {
    "&.MuiTypography-root": {
      width: "100%",
      ...theme.mixins.textEllipsis,
      WebkitLineClamp: 2,
      margin: `${theme.spacing.TINY} 0px`,
      [down("lg")(props)]: {
        width: "100px",
      },
    },
  };
});
