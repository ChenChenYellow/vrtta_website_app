import { createTheme } from "@mui/material";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

const theme = createTheme({
    palette: {
        primary: {
            main: "#659d32",
            dark: "#365718",
            light: "#f3faf6",
            contrastText: "#757575"
        },
        secondary: {
            main: "#cbf7de",
            light: "#dcfae9",
            contrastText: "#202020"
        }
    },
    typography: {
        fontFamily: "Poppins",
        h1: {
            fontSize: "3.6rem"
        },
        h2: {
            fontSize: "3.3rem"
        },
        h3: {
            fontSize: "2.2rem"
        },
        h4: {
            fontSize: "1.9rem"
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