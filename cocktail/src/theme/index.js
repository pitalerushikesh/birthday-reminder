import PropTypes from "prop-types";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

import componentsOverride from "./overrides";

const ThemeConfig = ({ children }) => {
  const theme = createTheme();
  theme.components = componentsOverride(theme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default ThemeConfig;
