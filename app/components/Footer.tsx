import { Box, Typography } from "@mui/material";

export default function Footer() {
    return <Box sx={{ display: "flex", justifyContent: "center", minHeight: 100, backgroundColor: "#f0fdf4" }}>
        <Typography sx={{ my: "auto", fontSize: "0.8rem", color: "#757575" }}>© 2025 Arivu. All rights reserved.</Typography>
    </Box>
}