
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link, MenuItem } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from 'react-router-dom';

const headersData = [
    {
        label: "About Us",
        href: "/about-us",
    },
    {
        label: "Telepharmacy",
        href: "/telepharmacy",
    },
    {
        label: "Pharmacist Consultants",
        href: "/pharmacist-consultants",
    },
    {
        label: "Pharmacist Practitioners",
        href: "/pharmacist-practitioners",
    },
    {
        label: "Allied Healthcare Professionals",
        href: "/allied-healthcare-professionals",
    },
    {
        label: "Login/Register",
        href: "/login-register",
    },
];

const useStyles = makeStyles(() => ({

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },

    header: {

        backgroundColor: "#ffffff",
        paddingRight: "79px",
        paddingLeft: "79px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },

    },

    logo: {
        fontFamily: "ABeeZee, sans-serif",
        fontWeight: 600,
        color: "#000000",
        textAlign: "left",
    },

    title: {
        color: "#000000",
    },

    menuButton: {
        fontFamily: "ABeeZee, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },

    drawerContainer: {
        padding: "20px 30px",
    },

    menuIcon: {
        color: "#000000",
    },

}));

export default function Header() {

    const classes = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return <Toolbar className={classes.title}>{rhazesConsultLogo} <div>{getMenuButtons()}</div></Toolbar>;
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon className={classes.menuIcon} /> {/** MenuIcon is not part of material-ui/core, need to install from material-ui/icons */}
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div>{rhazesConsultLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const rhazesConsultLogo = (

        <Typography variant="h6" component="h1" className={classes.logo}>
            Rhazes Telepharmacy
        </Typography>

    );

    const getMenuButtons = () => {

        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: classes.menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });

    };

    return (
        <header>
            <AppBar className={classes.header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );

}

