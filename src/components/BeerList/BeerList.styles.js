import styled from "styled-components";
import { down } from "styled-breakpoints";

export const BeerListWrapper = styled("div")((props) => ({
  width: "100%",
  flexDirection: "column",
  boxSizing: "border-box",
  display: "flex",
  [down("lg")(props)]: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
  },
}));
