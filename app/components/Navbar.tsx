
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
    Icon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const navItems = [
    { title: 'Home', href: '/', icon: <HomeIcon /> },
    { title: 'Products', href: '/products', icon: <CategoryIcon /> },
    { title: 'Consulting', href: '/consulting', icon: <ContactMailIcon /> },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [language, setLanguage] = useState("English")
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: 700,
                            color: 'green',
                            textDecoration: 'none',
                            letterSpacing: 2
                        }}
                    >
                        Vrtta
                    </Typography>

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
                            {navItems.map((item) => (
                                <Box
                                    key={item.title}>
                                    <Button
                                        component={RouterLink}
                                        to={item.href}
                                        sx={{
                                            mx: 0.3,
                                            color: '#424242',
                                            '&:hover': {
                                                color: 'green',
                                                backgroundColor: "#c8e6c9"
                                            },
                                        }}
                                    >
                                        {item.icon}
                                        <Typography sx={{ textTransform: "none", ml: 0.4, fontFamily: "Segoe UI", fontSize: "0.85rem" }}>
                                            {item.title}
                                        </Typography>
                                        <Box ></Box>
                                    </Button></Box>
                            ))}
                            {language == "English" ?
                                <IconButton onClick={() => setLanguage("French")}>
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
                        height: 260
                    },
                }}
            >
                <Box sx={{ textAlign: 'right', p: 2 }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navItems.map((item) => (
                        <ListItem
                            key={item.title}
                            component={RouterLink}
                            to={item.href}
                            onClick={handleDrawerToggle}
                            sx={{
                                "&:hover":
                                    { backgroundColor: "primary.main" },

                            }}
                        >
                            <ListItemText primary={item.title} slotProps={{ primary: { fontFamily: "Segoe UI", fontSize: "0.85rem" } }} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;