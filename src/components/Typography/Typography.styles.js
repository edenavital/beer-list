import { Typography as MuiTypography } from "@mui/material";
import styled from "styled-components";

export const Typography = styled(MuiTypography)(({ theme }) => {
  return {
    "&.MuiTypography-root": {
      width: "fit-content",
      fontFamily: theme.typography.fontFamily,
    },
  };
});
