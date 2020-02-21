import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Container } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    btn: {
      borderRadius: "35px",
      border: "4px black solid"
    },
    bold: {
      fontWeight: "bold"
    }
}));

function Footer() {
    const classes = useStyles();
    
    return (
        <div className="center">
            {/* Section Title */}
            <Typography className={classes.bold}
                variant="h1"
                component="h1"
            >
                DROP US A LINE
            </Typography>

            <Container maxWidth="sm" style={{ margin: "2rem auto"}}>
                {/* Email Button */}
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<SendIcon />}
                    href="mailto:contact@codesign.zone"
                    style={{ marginRight: "2rem" }}
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
                    style={{ marginLeft: "2rem" }}
                    className={classes.btn}
                >
                    <Typography variant="h4" className={classes.bold}>Phone</Typography>
                </Button>
            </Container>

            {/* Copyright Info */}
            <Typography variant="caption" component="block">
                Copyright © {new Date().getFullYear()} | All Rights Reserved | codesign web applications
            </Typography>
        </div>
    );
}

export default Footer;