import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    appbar: {
        background: "#FFEA00",
        height: "4rem",
        borderBottom: "2px #181818 solid"
    },
    icon: {
        height: "50px"
    },
    btn: {
        color: "#181818 !important",
        fontWeight: "bold !important"
    },
    show: {
        transform: 'translate(0, 0)',
        transition: 'transform .5s',
    },
    hide: {
        transform: 'translate(0, -70px)',
        transition: 'transform .5s',
    }
}));

function Navbar(props) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={`${classes.appbar} ${props.posY > window.innerHeight / 2 ? classes.show: classes.hide}`}>
            <Toolbar>
                <IconButton edge="start" aria-label="nav" href="#top">
                    <img src="./images/codesignlogo.png" alt="codesign" className={classes.icon} />
                </IconButton>

                <div style={{ flexGrow: 1 }}></div>

                <div style={{ float: "right" }}>
                    <Button color="inherit" href="#about" className={classes.btn}>About</Button>
                    <Button color="inherit" href="#process" className={classes.btn}>Process</Button>
                    <Button color="inherit" href="#team" className={classes.btn}>Team</Button>
                    <Button color="inherit" href="#contact" className={classes.btn}>Contact</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;