import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#6CE58D",
            dark: "#1FAF52",
            light: "#f3faf6",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#ffffff"
        }
    },
    typography: {
        fontFamily: "Segoe UI",
        h1: {
            fontSize: "3.6rem"
        },
        h2: {
            fontSize: "3.3rem"
        },
        subtitle1: {
            fontSize: "1.6rem"
        },
        subtitle2: {
            fontSize: "1.2rem"
        },
        body1: {
            fontSize: "1.1rem"
        },
        body2: {
            fontSize: "0.85rem"
        }
    }
})

export default theme