import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  Fade,
  Grid,
  List,
  ListItem,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CommonSX from "~/components/CommonSX";

import { Form } from "react-router";
const Request_Demo = () => {
  const [requestDemoVisible, setRequestDemoVisible] = useState(false);
  const [showFoot, setShowFoot] = useState(false);

  const foot = { width: 268, height: 381 };
  const products = ["Arivu ABC", "Arivu FLoS"];
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,

          justifyContent: "right",
          display: "flex",
        }}>
        <Tooltip
          title={"Request Demo"}
          followCursor
          slots={{ transition: Fade }}
          slotProps={{
            tooltip: { sx: { color: "primary.dark", backgroundColor: "primary.light", fontSize: "1rem" } },
          }}>
          <Button
            onMouseOver={() => setShowFoot(true)}
            onMouseLeave={() => setShowFoot(false)}
            onClick={() => setRequestDemoVisible(true)}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}>
            <Grid container direction={"column"} sx={CommonSX.centerChilren}>
              <Fade in={showFoot || requestDemoVisible} {...(showFoot ? { timeout: 3000 } : { timeout: 1000 })}>
                <Box sx={{ width: `${foot.width / 6}px`, height: `${foot.height / 6}px`, mx: "auto" }}>
                  <img src="/green_foot_left.png" />
                </Box>
              </Fade>
              <Fade in={showFoot || requestDemoVisible} {...(showFoot ? { timeout: 2000 } : { timeout: 2000 })}>
                <Box sx={{ width: `${foot.width / 5}px`, height: `${foot.height / 5}px`, mx: "auto" }}>
                  <img src="/green_foot_right.png" />
                </Box>
              </Fade>
              <Fade in={showFoot || requestDemoVisible} {...(showFoot ? { timeout: 1000 } : { timeout: 3000 })}>
                <Box sx={{ width: `${foot.width / 4}px`, height: `${foot.height / 4}px`, mx: "auto" }}>
                  <img src="/green_foot_left.png" />
                </Box>
              </Fade>

              <Box
                sx={{
                  width: `${foot.width / 3}px`,
                  height: `${foot.height / 3}px`,
                  mx: "auto",
                  opacity: showFoot || requestDemoVisible ? 1 : 0.5,
                  transition: showFoot || requestDemoVisible ? "opacity 0s" : "opacity 3s",
                }}>
                <img src="/green_foot_right.png" />
              </Box>
            </Grid>
          </Button>
        </Tooltip>
      </Box>
      <Drawer
        open={requestDemoVisible}
        anchor="bottom"
        onClose={() => setRequestDemoVisible(false)}
        slotProps={{
          paper: { sx: { width: { xs: "90%", sm: "90%", md: "810px" }, mx: "auto", backgroundColor: "primary.light" } },
        }}>
        <Form style={{}}>
          <Box sx={{ justifyContent: "center", display: "flex", mb: 10 }}>
            <Grid container direction={"column"} sx={{ width: 1, mx: 4 }}>
              <Grid sx={{ my: 2 }}>
                <Typography variant="subtitle1">Request Demo</Typography>
              </Grid>
              <Grid>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Name
                </Typography>
              </Grid>
              <Grid container sx={{ my: 1, mb: 2 }}>
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  sx={{
                    paddingRight: { xs: 0, sm: 1 },
                    my: 1,
                  }}>
                  <TextField variant="standard" placeholder="First name" sx={{ width: 1 }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ my: 1 }}>
                  <TextField variant="standard" placeholder="Last name" sx={{ width: 1 }} />
                </Grid>
              </Grid>
              <Grid>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Email
                </Typography>
              </Grid>
              <Grid sx={{ my: 2 }}>
                <TextField variant="standard" placeholder="Email" sx={{ width: 1 }} />
              </Grid>
              <Grid>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Please select the product
                </Typography>
              </Grid>
              <Grid sx={{ my: 2 }}>
                <Select variant="standard" defaultValue={products[0]} sx={{ width: 1 }}>
                  {products.map((p, index) => (
                    <MenuItem value={p} key={index}>
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Message
                </Typography>
              </Grid>
              <Grid sx={{ my: 2 }}>
                <TextField placeholder="Message" sx={{ width: 1 }} multiline minRows={3} />
              </Grid>
              <Grid sx={{ justifyContent: "right", display: "flex" }}>
                <Button
                  type="submit"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "primary.main",
                    color: "primary.light",
                    paddingY: 1.5,
                    paddingX: 2,
                    borderRadius: "8px",
                    "&:hover": {
                      boxShadow: 2,
                    },
                  }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Form>
      </Drawer>
    </Box>
  );
};

export default Request_Demo;
