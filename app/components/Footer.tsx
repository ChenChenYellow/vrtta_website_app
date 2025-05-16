import { Box, Grid, Link, Typography } from "@mui/material";
import CommonSX from "./CommonSX";

export default function Footer() {
    const gridSize = { xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }
    return (
        <Grid container sx={{ backgroundColor: "primary.light", paddingY: 2 }} direction={"column"}>
            <Grid container sx={{}}>
                <Grid size={gridSize} sx={{ ...CommonSX.centerChilren, my: "auto", minHeight: 30 }}>
                    <Link href="/about" variant="body2" underline="hover" sx={{
                        "&.MuiLink-root": {
                            color: "primary.contrastText",
                            textDecorationColor: "#757575"
                        }, my: "auto"
                    }}>About us</Link>
                </Grid>
                <Grid size={gridSize} sx={{ ...CommonSX.centerChilren, my: "auto", minHeight: 30 }}>
                    <Link href="/contact" variant="body2" underline="hover" sx={{
                        "&.MuiLink-root": {
                            color: "primary.contrastText",
                            textDecorationColor: "#757575"
                        }, my: "auto"
                    }}>Contact us</Link>
                </Grid>
            </Grid>
            <Grid sx={{ ...CommonSX.centerChilren, minHeight: 50 }}>
                <Typography variant="body2" sx={{ my: "auto", color: "primary.contrastText" }}>© 2025 Arivu. All rights reserved.</Typography>
            </Grid>
        </Grid>)
}
