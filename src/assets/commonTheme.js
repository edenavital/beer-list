import { lightTheme } from "./lightTheme";
import { MIXINS } from "./mixins";
import { TYPOGRAPHY } from "./typography";
import { SPACING } from "./spacing";

const commonTheme = {
  typography: TYPOGRAPHY,
  mixins: MIXINS,
  spacing: SPACING,
};

export const generateTheme = () => ({ ...commonTheme, palette: lightTheme });
