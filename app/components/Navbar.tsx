import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import abcLogo from "public/arivu_logo.jpg";
import vrttaLogo from "public/vrtta.png";
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { hexToRgba, templateColors } from "./Colors";
import NavItem, { type NavItem as NavItemType } from "./NavItem";
import NavItemMobile from "./NavItemMobile";
const vrttaNavItems = [
  { title: "Home", href: "/" },
  { title: "Consulting", href: "/consulting" },
  // {
  //   title: "Platform",
  //   href: "/platform",
  //   items: [
  //     { title: "Sector", href: "/sector" },
  //     { title: "Organization", href: "/organization" },
  //     { title: "Enagagement", href: "/engagement" },
  //   ],
  // },
  {
    title: "Sectoral Modules",
    href: "/sectoral_modules",
    items: [
      { title: "ABC - Agriculture, Building & Construction", href: "/abc" },
      { title: "FLoS - Freight, Logistics & Supply Chain", href: "/flos" },
    ],
  },
  // { title: "Products", href: "/products" },
];
const abcNavItems = [
  { title: "Home", href: "/abc" },
  {
    title: "Platform",
    href: "/abc/platform",
    items: [
      { title: "Sector", href: "/abc/platform/sector" },
      { title: "Organization", href: "/abc/platform/organization" },
      { title: "Enagagement", href: "/abc/platform/engagement" },
    ],
  },
  { title: "Vrtta", href: "/" },
];
const flosNavItems = [
  { title: "Home", href: "/flos" },
  {
    title: "Platform",
    href: "/flos/platform",
    items: [
      { title: "Sector", href: "/flos/platform/sector" },
      { title: "Organization", href: "/flos/platform/organization" },
      { title: "Enagagement", href: "/flos/platform/engagement" },
    ],
  },
  { title: "Vrtta", href: "/" },
];
const vrttaColor = { primary: templateColors[1], secondary: templateColors[0] };
const abcColor = { primary: templateColors[1], secondary: templateColors[0] };
const flosColor = { primary: templateColors[2], secondary: templateColors[3] };
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const theme = useTheme();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [navItems, setNavItems] = useState<NavItemType[]>([]);
  const [logo, setLogo] = useState<string>();
  const [color, setColor] = useState<{ primary: string; secondary: string }>({
    primary: templateColors[1],
    secondary: templateColors[0],
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (pathname.startsWith("/abc")) {
      setNavItems(abcNavItems);
      setLogo(abcLogo);
      setColor(abcColor);
    } else if (pathname.startsWith("/flos")) {
      setNavItems(flosNavItems);
      setLogo(abcLogo);
      setColor(flosColor);
    } else {
      setNavItems(vrttaNavItems);
      setLogo(vrttaLogo);
      setColor(vrttaColor);
    }
  }, [pathname]);

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "white" }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ my: 1 }}>
            <RouterLink to={navItems[0]?.href}>
              <img src={logo} style={{ maxHeight: 40 }} />
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
                  <NavItem item={item} color={color} />
                </Box>
              ))}
              {language == "English" ? (
                <Button
                  onClick={() => setLanguage("French")}
                  sx={{
                    color: color.primary,
                    "&:hover": { backgroundColor: hexToRgba(color.secondary, 0.2) },
                  }}>
                  FR
                </Button>
              ) : (
                <Button
                  onClick={() => setLanguage("English")}
                  sx={{
                    color: color.primary,
                    "&:hover": { backgroundColor: hexToRgba(color.secondary, 0.2) },
                  }}>
                  EN
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            // width: 180,
            paddingY: 1,
            paddingX: 3,
            height: "auto",
          },
        }}>
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {navItems.map((item, index) => (
            <Box key={index} sx={{}}>
              <NavItemMobile item={item} color={color} />
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
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
