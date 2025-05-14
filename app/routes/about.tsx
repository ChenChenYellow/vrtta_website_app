import { Box, Button, Container, Grid, Input, TextField, Typography } from "@mui/material";
import { Form } from "react-router";
import ReCAPTCHA from 'react-google-recaptcha';

export default function about() {
    return <Container>
        <Grid>
            <Box>
                <Typography >Get in Touch</Typography>
                <Typography>Please fill out this form and we will get back to you as soon as possible.</Typography>
            </Box>
            <Box>
                <Typography>
                    Find us at
                </Typography>
                <Typography>17560, Rue Grier, Pierrefonds, Montréal, Québec H9J2A8 Canada</Typography></Box>
            <Box>
                <Typography>
                    Email us at</Typography>
                <Typography>emailus@vrtta.green</Typography></Box>
            <Box>
                <Typography>
                    Call us at</Typography>
                <Typography>(001) 438-882-5385</Typography></Box></Grid>
        <Grid>
            <Form>
                <Box>
                    <Typography>Contact Us</Typography>
                </Box>
                <Box>
                    <TextField placeholder="Your Name"
                        variant="standard" />
                    <TextField placeholder="Your Email"
                        variant="standard" />
                    <TextField placeholder="Subject"
                        variant="standard" />
                    <TextField placeholder="Your Message"
                        variant="standard" />
                </Box>
                <Box>
                    <Button type="submit">Send Message</Button>
                </Box>
            </Form>
        </Grid>
    </Container>
}