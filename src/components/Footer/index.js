import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Container } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    btn: {
        borderRadius: "35px",
        border: "4px black solid",
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexGrow: "1",
            margin: "5px",
            float: "none !important",
        }
    },
    bold: {
      fontWeight: "bold"
    },
    center: {
        margin: "0 auto",
        textAlign: "center"
    },
    title: {
        [theme.breakpoints.down('sm')]: {
          fontSize: "50px",
          margin: "0 auto"
        }
    }
}));

function Footer() {
    const classes = useStyles();
    
    return (
        <div className={classes.center}>
            {/* Section Title */}
            <a name="contact" href="#contact">
                <Typography className={`${classes.title} ${classes.bold}`} variant="h1" component="h1">
                    DROP US A LINE
                </Typography>
            </a>

            <Container maxWidth="sm" style={{ margin: "2rem auto"}}>
                {/* Email Button */}
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<SendIcon />}
                    href="mailto:contact@codesign.zone"
                    style={{ float: "left" }}
                    className={classes.btn}
                >
                    <Typography variant="h4" className={classes.bold}>Email</Typography>
                </Button>

                {/* Phone Button */}
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PhoneIcon />}
                    href="tel:2818891359"
                    style={{ float: "right" }}
                    className={classes.btn}
                >
                    <Typography variant="h4" className={classes.bold}>Phone</Typography>
                </Button>
            </Container>

            {/* Copyright Info */}
            <Typography variant="caption">
                Copyright © {new Date().getFullYear()} | All Rights Reserved | codesign web applications
            </Typography>
        </div>
    );
}

export default Footer;