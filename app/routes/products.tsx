import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CommonSX from "~/components/CommonSX";

export default function products() {
  const [requestDemoVisible, setRequestDemoVisible] = useState(false);
  const [showFoot, setShowFoot] = useState(false);
  const [faqExpended, setFAQExpended] = useState(false);
  const gridItem = { justifyContent: "center", display: "flex", my: 2 };
  const box = { width: { xs: 1, sm: 1, md: 800, lg: 800, xl: 800 }, mx: { xs: 4, sm: 4, md: 0, lg: 0, xl: 0 } };
  const options = {
    startColor: "#cbf7de",
    endColor: "#dcfae9",
    direction: "right",
  };

  const foot = {
    width: 268,
    height: 381,
  };
  const tableHeaderText = {
    color: "secondary.contrastText",
    fontWeight: "bold",
  };
  const tableHeader = {
    backgroundImage: `linear-gradient( to ${options.direction}, ${options.startColor}, ${options.endColor})`,
    backgroundSize: "100%",
  };
  const products = ["Arivu ABC", "Arivu FLoS"];
  const listitems = [
    "Construction material suppliers",
    "Architectural firms",
    "Construction companies (helps LEED certification)",
    "Interior design companies",
    "Recycling companies",
  ];
  const tableContent = [
    {
      parameters: "Ease of usage (Training)",
      traditional: "**",
      arivu: "****",
    },
    {
      parameters: "Time taken for analysis",
      traditional: "**",
      arivu: "***",
    },
    {
      parameters: "Supplier information collection (Primary data / representative data) ",
      traditional: "*",
      arivu: "****",
    },
    {
      parameters: "Dynamic updates",
      traditional: "**",
      arivu: "****",
    },
    {
      parameters: "Report generation",
      traditional: "****",
      arivu: "***",
    },
    {
      parameters: "Databases (Paid/Open)",
      traditional: "*",
      arivu: "****",
    },
    {
      parameters: "Cost (Software)",
      traditional: "*****",
      arivu: "**",
    },
    {
      parameters: "Expertise (Life cycle analysis)",
      traditional: "*****",
      arivu: "**",
    },
  ];
  const faqContent = [
    {
      question: "This first question",
      answer: "This is first answer",
    },
    {
      question: "This second question",
      answer: "This is second answer",
    },
    {
      question: "This third question",
      answer: "This is third answer",
    },
    {
      question: "This fourth question",
      answer: "This is fourth answer",
    },
  ];
  return (
    <Box>
      <Grid container direction={"column"}>
        <Grid sx={gridItem}>
          <Box sx={{ maxWidth: "400px", my: 8 }}>
            <img src="/arivu_logo.jpg" />
          </Box>
        </Grid>
        <Grid sx={gridItem}>
          <Box sx={box} component={Paper} elevation={4}>
            <img src="/arivu_dashboard.jpg" />
          </Box>
        </Grid>
        <Grid sx={gridItem}>
          <Box sx={box}>
            <Typography variant="h3" sx={{ my: 2, fontWeight: "medium" }}>
              What is ARIVU?
            </Typography>
            <Typography variant="body1">
              A tool representing a change in philosophy in calculating dynamic environmental footprint
            </Typography>

            <Typography>(ARIVU means ‘Awareness’)</Typography>
          </Box>
        </Grid>
        <Grid sx={gridItem}>
          <Box sx={box}>
            <Typography variant="h3" sx={{ my: 2, fontWeight: "medium" }}>
              Applications
            </Typography>
            <List sx={{ listStyleType: "disc", ml: 4 }}>
              {listitems.map((i) => (
                <ListItem sx={CommonSX.listItem}>
                  <Typography variant="body1">{i}</Typography>
                </ListItem>
              ))}
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
                      <Typography variant="body1" sx={tableHeaderText}>
                        Parameters
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ ...tableHeader, width: 1 / 4 }}>
                      <Typography variant="body1" sx={tableHeaderText}>
                        Traditional tools
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ ...tableHeader, width: 1 / 4 }}>
                      <Typography variant="body1" sx={tableHeaderText}>
                        ARIVU
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableContent.map((i, index) => {
                    let bc = "white";
                    if (index % 2 == 0) {
                      bc = "primary.light";
                    }
                    return (
                      <TableRow sx={{ backgroundColor: bc }}>
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
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="body2" sx={{ mb: 6 }}>
              Note: More * signifies better performance
            </Typography>
          </Box>
        </Grid>
        <Grid sx={gridItem}>
          <Box sx={box}>
            <Typography variant="h3" sx={{ fontWeight: "medium", mb: 4 }}>
              FAQ
            </Typography>
            {faqContent.map((f, index) => (
              <Accordion key={index} expanded={faqExpended} onChange={() => setFAQExpended(!faqExpended)}>
                <AccordionSummary expandIcon={<ArrowDownwardIcon />} sx={{ backgroundColor: "primary.light" }}>
                  {f.question}
                </AccordionSummary>
                <AccordionDetails>{f.answer}</AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
