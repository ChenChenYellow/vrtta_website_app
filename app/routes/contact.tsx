import LocationPinIcon from "@mui/icons-material/LocationPin";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Box, Fade, Tooltip, Typography } from "@mui/material";

export default function contact() {
  const address = "17560, Rue Grier, Pierrefonds, Montréal, Québec H9J2A8 Canada";
  const email = "emailus@vrtta.green";
  const phone = "(001) 438-882-5385";
  return (
    <Box sx={{ mx: "auto", my: 8, maxWidth: "600px" }}>
      <Box sx={{ paddingBottom: 8 }}>
        <Typography variant="h2" sx={{ textAlign: "center", color: "primary.main", fontWeight: "bold" }}>
          Contact Us
        </Typography>
      </Box>
      <Box sx={{}}>
        <Typography variant="subtitle1" sx={{ textAlign: "left", color: "primary.main", fontWeight: "bold" }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left", fontWeight: "medium" }}>
          Please fill out this form and we will get back to you as soon as possible.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", my: 2 }}>
        <Box>
          <LocationPinIcon sx={{ fontSize: "2rem", mr: 2, color: "primary.main" }} />
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ textAlign: "left", fontWeight: "bold", color: "primary.main" }}>
            Find us at
          </Typography>
          <Tooltip
            title="Copy to clipboard"
            followCursor
            slots={{ transition: Fade }}
            slotProps={{
              tooltip: { sx: { color: "primary.dark", backgroundColor: "primary.light", fontSize: "1rem" } },
            }}>
            <Typography variant="body1" onClick={() => navigator.clipboard.writeText(address)}>
              {address}
            </Typography>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ display: "flex", my: 2 }}>
        <Box>
          <MailIcon sx={{ fontSize: "2rem", mr: 2, color: "primary.main" }} />
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ textAlign: "left", fontWeight: "bold", color: "primary.main" }}>
            Email us at
          </Typography>
          <Tooltip
            title="Copy to clipboard"
            followCursor
            slots={{ transition: Fade }}
            slotProps={{
              tooltip: { sx: { color: "primary.dark", backgroundColor: "primary.light", fontSize: "1rem" } },
            }}>
            <Typography variant="body1" onClick={() => navigator.clipboard.writeText(email)}>
              {email}
            </Typography>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ display: "flex", my: 2 }}>
        <Box>
          <PhoneIphoneIcon sx={{ fontSize: "2rem", mr: 2, color: "primary.main" }} />
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ textAlign: "left", fontWeight: "bold", color: "primary.main" }}>
            Call us at
          </Typography>
          <Tooltip
            title="Copy to clipboard"
            followCursor
            slots={{ transition: Fade }}
            slotProps={{
              tooltip: { sx: { color: "primary.dark", backgroundColor: "primary.light", fontSize: "1rem" } },
            }}>
            <Typography variant="body1" onClick={() => navigator.clipboard.writeText(phone)}>
              {phone}
            </Typography>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );

  // <Grid container sx={{ display: "flex", mx: 2 }}>
  //     <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ paddingX: 2, mb: 8 }}>

  //     </Grid>

  {
    /* <Grid sx={{
            backgroundColor: "primary.light", boxShadow: 4, "&:hover": {
                boxShadow: 8
            }, paddingX: 2, mb: 8
        }} size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Form>
                <Box sx={{ my: 2, mt: 4, justifyContent: "center", display: "flex" }}>
                    <Typography variant="subtitle1" sx={{ textAlign: "center", fontWeight: "bold", color: "primary.dark" }}>Contact Us</Typography>
                </Box>
                <Box sx={{ my: 2, mx: 2 }}>
                    <Grid container direction={"column"}>
                        <Grid sx={{ mx: "auto", my: 2 }}>
                            <TextField placeholder="Your Name"
                                variant="standard" sx={{ width: 300 }} />
                        </Grid>
                        <Grid sx={{ mx: "auto", my: 2 }}>
                            <TextField placeholder="Your Email"
                                variant="standard" sx={{ width: 300 }} />
                        </Grid>
                        <Grid sx={{ mx: "auto", my: 2 }}>
                            <TextField placeholder="Subject"
                                variant="standard" sx={{ width: 300 }} />
                        </Grid>
                        <Grid sx={{ mx: "auto", my: 2 }}>
                            <TextField placeholder="Your Message" multiline sx={{ width: 300 }} minRows={3} />
                        </Grid>
                        <Grid sx={{ mx: "auto", my: 2 }}>
                            <Button type="submit" sx={{
                                textTransform: "none", backgroundColor: "primary.dark", color: "primary.light", paddingY: 1.5, paddingX: 3, "&:hover": {
                                    boxShadow: 3
                                },
                                borderRadius: "10px"
                            }}>Send Message</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Form>
        </Grid> */
  }
  // </Grid >
}
