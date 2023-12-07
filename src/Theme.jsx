/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#000",
    secondary: "#f6f3f3",
    blue: "#425af5",
  },

  fontSizes: {
    primary: "14px",
    small: "18px",
    medium: "20px",
    normal: "25px",
    large: "30px",
    larger: "50px",
    xl: "60px",
  },
  fontWeights: {
    medium: "500",
    bold: 600,
    bolder: "800",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
