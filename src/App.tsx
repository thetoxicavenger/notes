import React from "react";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: purple[500]
      },
      secondary: {
        main: green[500]
      }
    }
  })
);

function App() {
  return <ThemeProvider theme={theme}>Foooo</ThemeProvider>;
}

export default App;
