
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
    createSvgIcon,
    Icon,
    LinearProgress
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [language, setLanguage] = useState("English")
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navItems = [
        { title: 'Home', href: '/', icon: <HomeIcon /> },
        { title: 'Consulting', href: '/consulting', icon: <ContactMailIcon /> },
        { title: 'Products', href: '/products', icon: <CategoryIcon /> },
    ];
    const [progress, setProgress] = useState([0, 0, 0])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ my: 1 }}>
                        <RouterLink to={"/"} >
                            <img src='vrtta.png' />
                        </RouterLink></Box>
                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex' }}>
                            {navItems.map((item, index) => (
                                <Box
                                    key={item.title}
                                    sx={{}}>
                                    <Button
                                        component={RouterLink}
                                        to={item.href}
                                        sx={{
                                            mx: 0, paddingX: 1.5,
                                            color: '#424242',
                                            '&:hover': {
                                                color: 'secondary.contrastText',
                                                backgroundColor: "primary.light"
                                            },
                                            borderRadius: 0
                                        }}
                                        onMouseEnter={() => {
                                            setProgress((prev) => prev.map((p, i) => i == index ? 100 : p))
                                        }}
                                        onMouseLeave={() => {
                                            setProgress((prev) => prev.map((p, i) => i == index ? 0 : p))
                                        }}
                                    >
                                        {item.icon}
                                        <Typography sx={{ textTransform: "none", ml: 0.4, fontFamily: "Segoe UI", fontSize: "0.85rem" }}>
                                            {item.title}
                                        </Typography>
                                    </Button>
                                    <LinearProgress variant='determinate' value={progress[index]} sx={{
                                        backgroundColor: "white",
                                        color: "primary.dark",
                                        "& .MuiLinearProgress-bar1": {
                                            transitionDuration: "0.2s"
                                        }
                                    }} />
                                </Box>
                            ))}
                            {language == "English" ?
                                <IconButton onClick={() => setLanguage("French")} sx={{ "&:hover": { backgroundColor: "primary.light" } }}>
                                    <Icon>
                                        <img src={"/France_Flag.svg"} />
                                    </Icon>
                                </IconButton> :
                                <IconButton onClick={() => setLanguage("English")}>
                                    <Icon>
                                        <img src={"/UK_Flag.svg"} />
                                    </Icon>
                                </IconButton>}
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
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 180,
                        padding: 2,
                        height: 270
                    },
                }}
            >
                <Box sx={{ textAlign: 'right', p: 2 }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navItems.map((item, index) => (
                        <Box key={item.title}>
                            <ListItem
                                component={RouterLink}
                                to={item.href}
                                onClick={handleDrawerToggle}
                                sx={{
                                    "&:hover":
                                        { backgroundColor: "primary.light" },

                                }}
                                onMouseEnter={() => {
                                    setProgress((prev) => prev.map((p, i) => i == index ? 100 : p))
                                }}
                                onMouseLeave={() => {
                                    setProgress((prev) => prev.map((p, i) => i == index ? 0 : p))
                                }}
                            >
                                <ListItemText primary={item.title} slotProps={{ primary: { fontFamily: "Segoe UI", fontSize: "0.85rem" } }} />
                            </ListItem>
                            <LinearProgress variant='determinate' value={progress[index]} sx={{
                                backgroundColor: "white",
                                "& .MuiLinearProgress-bar1": {
                                    transitionDuration: "0.2s"
                                }
                            }} />
                        </Box>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;