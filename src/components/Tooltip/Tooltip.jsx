import { useTheme } from "styled-components";
import { Tooltip as MuiTooltip } from "@mui/material";

export const Tooltip = ({ children, title }) => {
  const theme = useTheme();

  return (
    <MuiTooltip
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -30],
              margin: [0, 0],
            },
          },
        ],
      }}
      componentsProps={{
        tooltip: {
          sx: {
            background: theme.palette.primary.contrastText,
            padding: theme.spacing.TINO,
          },
        },
        arrow: {
          sx: {
            color: theme.palette.primary.contrastText,
          },
        },
      }}
      arrow
      placement="top"
      title={title}
    >
      {children}
    </MuiTooltip>
  );
};
