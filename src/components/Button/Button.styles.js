import styled from "styled-components";
import { Button } from "@mui/material";

export const ButtonWrapper = styled(Button)(({ theme }) => ({
  width: "fit-content",
  padding: theme.spacing.TINO,
  textTransform: "none",
}));
