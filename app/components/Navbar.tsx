import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Icon,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import NavItem from "./NavItem";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Consulting", href: "/consulting" },
    { title: "Consulting", href: "/consulting_2" },
    {
      title: "Platform",
      href: "/platform",
      items: [
        { title: "Sector", href: "/sector" },
        { title: "Organization", href: "/organization" },
        { title: "Enagagement", href: "/engagement" },
      ],
    },

    {
      title: "Sectoral Modules",
      href: "/sectoral_modules",
      items: [
        { title: "ABC - Agriculture, Building & Construction", href: "/abc" },
        { title: "FLoS - Freight, Logistics & Supply Chain", href: "/flos" },
      ],
    },
    { title: "Products", href: "/products" },
  ];
  const [progress, setProgress] = useState(navItems.map(() => 0));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ my: 1 }}>
            <RouterLink to={"/"}>
              <img src="vrtta.png" />
            </RouterLink>
          </Box>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex" }}>
              {navItems.map((item, index) => (
                <Box key={index}>
                  <NavItem item={item} />
                </Box>
              ))}
              {language == "English" ? (
                <Button onClick={() => setLanguage("French")} sx={{ "&:hover": { backgroundColor: "primary.light" } }}>
                  FR
                </Button>
              ) : (
                <Button onClick={() => setLanguage("English")}>EN</Button>
              )}
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 180,
            padding: 2,
            height: 270,
          },
        }}>
        <Box sx={{ textAlign: "right", p: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <Box key={index}>
              <NavItem item={item} />
            </Box>
            // <Box key={item.title}>
            //   <ListItem
            //     component={RouterLink}
            //     to={item.href}
            //     onClick={handleDrawerToggle}
            //     sx={{
            //       "&:hover": { backgroundColor: "primary.light" },
            //     }}
            //     onMouseEnter={() => {
            //       setProgress((prev) => prev.map((p, i) => (i == index ? 100 : p)));
            //     }}
            //     onMouseLeave={() => {
            //       setProgress((prev) => prev.map((p, i) => (i == index ? 0 : p)));
            //     }}>
            //     <ListItemText
            //       primary={item.title}
            //       slotProps={{ primary: { fontFamily: "Segoe UI", fontSize: "0.85rem" } }}
            //     />
            //   </ListItem>
            //   <LinearProgress
            //     variant="determinate"
            //     value={progress[index]}
            //     sx={{
            //       backgroundColor: "white",
            //       "& .MuiLinearProgress-bar1": {
            //         transitionDuration: "0.2s",
            //       },
            //     }}
            //   />
            // </Box>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
