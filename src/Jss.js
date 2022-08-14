import { create } from "jss";
import React, { useEffect } from "react";
import { StylesProvider, jssPreset } from "@mui/styles";
import typography from "../src/assets/config/theme/typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const preset = create({
  plugins: [...jssPreset().plugins],
});

export default function Jss(props) {
  const secondaryColor = "#f6f1e7";
  const primaryColor = "#fdc913";

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            borderRadius: "20px",
            fontFamily: "Almarai-Regular",
            textTransform: "capitalize",
            color: "black",
            fontSize: "14px",
            padding: "14px 46px",
            margin: "0% 0.5%",
            boxShadow: "none",
            "&:hover": {
              color: "black",
              // backgroundColor: primaryColor,
            },
          },
          outlined: {
            borderRadius: "20px",
            textTransform: "capitalize",
            fontFamily: "Almarai-Regular",
            borderColor: secondaryColor,
            fontSize: "12px",
            "&:hover": {
              borderColor: secondaryColor,
            },
            color: secondaryColor,
            padding: "10px 30px",
          },
          text: {
            color: "#FFFFFF",
            textTransform: "capitalize",
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            fontFamily: "Almarai-Regular",
            backgroundColor: " #FFFFFF",
            color: " #000000",
            boxShadow: "0px 2px 6px 0px #13124212",
            width: "100%",
            marginBottom: "3%",
          },
          input: {
            padding: "11.9px 14px",
          },
        },
      },
      Mui: {
        completed: {
          color: "#f9f9f9",
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: "10px 0px",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: "32px",
            overflow: "hidden",
          },
        },
      },
    },
    palette: {
      background: {
        dark: "#E2E2E3",
        paper: "#ffffff",
        light: "#FFFFFE",
      },
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      success: {
        main: "#d80027",
      },
      warning: {
        main: "#292929",
      },

      text: {
        primary: "#6d6d6f",
        secondary: "#181818",
        black: "#353434",
        white: "#FFFFFF",
      },
    },
    typography,
    overrides: {
      MuiCheckbox: {
        root: {
          color: secondaryColor,
        },
        colorPrimary: {
          checked: {
            color: secondaryColor,
          },
        },
      },
      MuiCard: {
        root: {
          padding: "20px",
          borderRadius: "22px",
        },
      },
    },
  });

  return (
    <StylesProvider jss={preset}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StylesProvider>
  );
}
