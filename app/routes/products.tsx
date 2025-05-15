import { Box, Button, Container, Divider, Drawer, Fab, Grid, Input, List, ListItem, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, tableHeadClasses, TableRow, TextField, Typography } from "@mui/material";
import { Form } from "react-router";
import ReCAPTCHA from 'react-google-recaptcha';
import { Grade, Rowing } from "@mui/icons-material";
import StickyButton from "~/components/StickyButton";
import NavigationIcon from '@mui/icons-material/Navigation';
import { useState } from "react";

export default function products() {
    const [requestDemoVisible, setRequestDemoVisible] = useState(false)
    const gridItem = { justifyContent: "center", display: "flex", my: 2 }
    const box = { width: { xs: 1, sm: 1, md: 800, lg: 800, xl: 800 }, mx: { xs: 4, sm: 4, md: 0, lg: 0, xl: 0 } }
    const options = {
        startColor: "#cbf7de",
        endColor: "#dcfae9",
        direction: "right",
    };
    const tableHeaderText = {
        color: "secondary.contrastText",
        fontWeight: "bold",
    }
    const tableHeader = {
        backgroundImage: `linear-gradient( to ${options.direction}, ${options.startColor}, ${options.endColor})`,
        backgroundSize: "100%",
    }
    const tableContent = [
        {
            parameters: "Ease of usage (Training)",
            traditional: "**",
            arivu: "****"
        },
        {
            parameters: "Time taken for analysis",
            traditional: "**",
            arivu: "***"
        },
        {
            parameters: "Supplier information collection (Primary data / representative data) ",
            traditional: "*",
            arivu: "****"
        },
        {
            parameters: "Dynamic updates",
            traditional: "**",
            arivu: "****"
        },
        {
            parameters: "Report generation",
            traditional: "****",
            arivu: "***"
        },
        {
            parameters: "Databases (Paid/Open)",
            traditional: "*",
            arivu: "****"
        },
        {
            parameters: "Cost (Software)",
            traditional: "*****",
            arivu: "**"
        },
        {
            parameters: "Expertise (Life cycle analysis)",
            traditional: "*****",
            arivu: "**"
        }
    ]
    return <Box>
        <Grid container direction={"column"}>
            <Grid sx={gridItem}>
                <img src="/arivu_logo.png" />
            </Grid>
            <Grid sx={gridItem} >
                <Box sx={box} component={Paper} elevation={4}>
                    <img src="/arivu_dashboard.jpg" />
                </Box>
            </Grid>
            <Grid sx={gridItem}>
                <Box sx={box}>
                    <Typography variant="h3" sx={{ my: 2, fontWeight: "medium" }}>What is ARIVU?</Typography>
                    <Typography variant="body1">A tool representing a change in philosophy in calculating dynamic environmental footprint</Typography>

                    <Typography>(ARIVU means ‘Awareness’)</Typography>
                </Box>
            </Grid>
            <Grid sx={gridItem}>
                <Box sx={box}>
                    <Typography variant="h3" sx={{ my: 2, fontWeight: "medium" }}>Applications</Typography>
                    <List sx={{ listStyleType: 'disc', ml: 4 }}>
                        <ListItem sx={{ display: 'list-item', paddingY: 0 }}><Typography variant="body1">Construction material suppliers</Typography></ListItem>
                        <ListItem sx={{ display: 'list-item', paddingY: 0 }}><Typography variant="body1">Architectural firms</Typography></ListItem>
                        <ListItem sx={{ display: 'list-item', paddingY: 0 }}><Typography variant="body1">Construction companies (helps LEED certification)</Typography></ListItem>
                        <ListItem sx={{ display: 'list-item', paddingY: 0 }}><Typography variant="body1">Interior design companies</Typography></ListItem>
                        <ListItem sx={{ display: 'list-item', paddingY: 0 }}><Typography variant="body1">Recycling companies</Typography></ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid sx={gridItem}>
                <Box sx={box}>
                    <TableContainer component={Paper} elevation={4} sx={{ border: 1, borderColor: "primary.dark" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ ...tableHeader, width: 1 / 2 }}>
                                        <Typography variant="body1" sx={tableHeaderText}>Parameters</Typography>
                                    </TableCell>
                                    <TableCell sx={{ ...tableHeader, width: 1 / 4 }}>
                                        <Typography variant="body1" sx={tableHeaderText}>Traditional tools</Typography>
                                    </TableCell>
                                    <TableCell sx={{ ...tableHeader, width: 1 / 4 }}>
                                        <Typography variant="body1" sx={tableHeaderText}>ARIVU</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableContent.map((i, index) => {
                                    let bc = "white"
                                    if (index % 2 == 0) {
                                        bc = "primary.light"
                                    }
                                    return <TableRow sx={{ backgroundColor: bc }}>
                                        <TableCell>
                                            <Typography>{i.parameters}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>{i.traditional}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>{i.arivu}</Typography>
                                        </TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography variant="body2" sx={{ mb: 6 }}>Note: More * signifies better performance</Typography>
                </Box>
            </Grid>
        </Grid>
        <Box sx={{
            position: "sticky",
            bottom: 0,
            justifyContent: "right",
            display: "flex"
        }}>
            <Button sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "secondary.light",
                borderRadius: "0px",
                borderTopLeftRadius: "100px",
                mt: "-20px",
                color: "black",
                paddingLeft: "30px",
                paddingTop: "30px",
                textTransform: "none",
                "&:hover": {
                    width: "110px",
                    height: "110px",
                    backgroundColor: "secondary.main",
                    borderRadius: "0px",
                    borderTopLeftRadius: "110px",
                    boxShadow: 1,
                    mt: "-30px",
                }
            }}
                onClick={() => setRequestDemoVisible(true)}>Request Demo</Button>
        </Box>
        <Drawer open={requestDemoVisible} anchor="bottom" onClose={() => setRequestDemoVisible(false)} slotProps={{
            paper: { sx: { width: { xs: "90%", sm: "90%", md: "810px" }, mx: "auto", backgroundColor: "primary.light" } }
        }}>
            <Form style={{}}>
                <Box sx={{ justifyContent: "center", display: "flex", mb: 10 }}>
                    <Grid container direction={"column"} sx={{ width: 1, mx: 4 }} >
                        <Grid sx={{ my: 2 }}>
                            <Typography variant="subtitle1">Request Demo</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Name</Typography>
                        </Grid>
                        <Grid container sx={{ my: 1, mb: 2 }}>
                            <Grid size={{ xs: 12, sm: 6 }} sx={{
                                paddingRight: { xs: 0, sm: 1 }, my: 1
                            }}>
                                <TextField variant="standard" placeholder="First name" sx={{ width: 1 }} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }} sx={{ my: 1 }}>
                                <TextField variant="standard" placeholder="Last name" sx={{ width: 1 }} />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Email</Typography>
                        </Grid>
                        <Grid sx={{ my: 2 }}>
                            <TextField variant="standard" placeholder="Email" sx={{ width: 1 }} />
                        </Grid>
                        <Grid>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Please select the product</Typography>
                        </Grid>
                        <Grid sx={{ my: 2 }}>
                            <Select variant="standard" defaultValue={"Arivu"} sx={{ width: 1 }} >
                                <MenuItem value={"Arivu"}>Arivu</MenuItem>
                                <MenuItem value={"Punar"}>Punar</MenuItem>
                                <MenuItem value={"Gaddi"}>Gaddi</MenuItem>
                            </Select>
                        </Grid>
                        <Grid>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Message</Typography>
                        </Grid>
                        <Grid sx={{ my: 2 }}>
                            <TextField placeholder="Message" sx={{ width: 1 }} multiline minRows={3} />
                        </Grid>
                        <Grid sx={{ justifyContent: "right", display: "flex" }}>
                            <Button type="submit" sx={{
                                textTransform: "none", backgroundColor: "primary.dark",
                                color: "primary.contrastText", paddingY: 1.5, paddingX: 2, borderRadius: "8px",
                                "&:hover": {
                                    boxShadow: 2,
                                    border: 1,
                                    borderColor: "primary.light"
                                }
                            }}>Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Form>
        </Drawer>
    </Box>
}