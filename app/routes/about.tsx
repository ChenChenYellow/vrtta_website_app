import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import CommonSX from "~/components/CommonSX";

export default function about() {
    const exmple = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quintesque eu, pretium quintesque eu, pretium quintesque eu, pretium quinar, he."
    return <Box sx={{ paddingY: 6, justifyContent: "center" }} component={Container}>

        <Typography variant="h2" sx={{ color: "primary.dark", textAlign: "center", fontWeight: "bold" }}>About Us</Typography>
        <Paper elevation={10} sx={{ backgroundColor: "primary.light", mx: 4, my: 6, paddingY: 2, paddingX: 2, maxWidth: "1200px" }}>
            <Typography variant="h3" sx={{ color: "secondary.contrastText", my: 4, mx: 2, fontWeight: "medium", }}>Our History</Typography>
            <Divider variant="middle" sx={{ width: "300px", boxShadow: 1 }} />
            <Typography variant="h4" sx={{ color: "secondary.contrastText", letterSpacing: 2, my: 4, mx: 2, fontWeight: "light" }}>We are a team dedicate to minimize greenhouse gas with the help of machine learning. We will design a solution and implement it by ourself.</Typography>
        </Paper>
        <Paper elevation={10} sx={{ backgroundColor: "primary.light", mx: 4, my: 6, paddingY: 2, paddingX: 2, maxWidth: "1200px" }}>
            {/* <Typography variant="h3" sx={{ color: "secondary.contrastText", my: 4, fontWeight: "medium" }}>Our Objective</Typography> */}
            <Typography variant="h3" sx={{ color: "secondary.contrastText", letterSpacing: 2, my: 4, mx: 2, fontWeight: "medium" }}>Track, Act, Inspire</Typography>
            <Divider variant="middle" sx={{ width: "300px", boxShadow: 1 }} />
            <Typography variant="h4" sx={{ color: "secondary.contrastText", letterSpacing: 2, my: 4, mx: 2, fontWeight: "light" }}>We provide solution within three steps:</Typography>
            <Typography variant="h4" sx={{ color: "secondary.contrastText", letterSpacing: 2, my: 4, mx: 2, fontWeight: "light" }}>We start by understanding your needs and tailored a sofrware solution.</Typography>
            <Typography variant="h4" sx={{ color: "secondary.contrastText", letterSpacing: 2, my: 4, mx: 2, fontWeight: "light" }}>We then refine the software based on your feed back.</Typography>
            <Typography variant="h4" sx={{ color: "secondary.contrastText", letterSpacing: 2, my: 4, mx: 2, fontWeight: "light" }}>Finally, your problem solved</Typography>
        </Paper>
    </Box>
}