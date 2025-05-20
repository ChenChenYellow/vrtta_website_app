import { Box, Container, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import CommonSX from "~/components/CommonSX";

export default function consulting() {
    const centerChildren = { display: "flex", justifyContent: "center" }
    const listitems = [
        "Quantifies the environmental impact of a product.",
        "Helps differentiate a product in a competitive marketplace.",
        "Recognizes the environmental hot-spots for cost and emissions in the product life cycle and suggests the areas of improvement.",
        "Helps in defining realistic sustainability targets and aligning with ‘carbon-neutrality’ goals.",
        "Helps in developing environmental product declarations [EPD].",
    ]
    return <Box component={Container} sx={{ justifyContent: "center" }}>
        <Box sx={{ ...centerChildren, mt: 12 }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "primary.main" }}>Consulting</Typography>
        </Box>
        <Paper sx={{ ...centerChildren, mx: 3, my: 8, paddingY: 8, paddingX: 4, maxWidth: "1200px" }} elevation={8} >
            <Grid container direction={"column"} sx={{}}>
                <Grid container >
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <img src="/green_foot.png" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8 }} sx={{ my: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: "medium", my: 2 }}>​Sustainability partners</Typography>
                        <Typography variant="body1" sx={{ fontWeight: "light", my: 1 }}>We help companies quantify the environmental footprint of their products or processes.

                            We offer product life cycle assessment (LCA)
                            expertise as per ISO.

                            We offer grant-writing support for environmental grant applications.</Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ my: 4 }}>
                    <Grid sx={{ my: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: "medium" }}>Product Life Cycle Assessment</Typography>
                    </Grid>
                    <Grid container>
                        <Grid size={{ xs: 12, sm: 8 }} sx={{ my: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: "light" }}>With consumer behaviors positively changing towards eco-consciousness and environmental awareness, it is becoming crucial for companies to understand the environmental impacts of their products and supply choices. ​A product life cycle assessment (LCA) is a detailed and scientific approach to calculating the cumulative environmental impact of each of the activities in a typical product life cycle. LCAs are governed by life cycle thinking as per ISO 14040 procedures. It is the most accurate method of calculating the environmental footprint of a product.</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }} sx={{ my: 1 }}>
                            <img src="/design_ring.png" />
                        </Grid>
                    </Grid>
                    <Grid sx={{ my: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: "bold", textDecoration: "underline" }} >Benefits:</Typography>
                        <List sx={{ listStyleType: 'space-counter', ml: 4, fontWeight: "light" }}>
                            {listitems.map((i) => <ListItem sx={CommonSX.listItem}><Typography variant="body1" sx={{ fontWeight: "light" }}>{i}</Typography></ListItem>)}
                        </List>
                    </Grid>

                </Grid>
            </Grid>
        </Paper>

    </Box>
}