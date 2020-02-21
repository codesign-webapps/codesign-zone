import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';

function Footer() {
    return (
        <div style={{ textAlign: "center" }}>
            {/* Section Title */}
            <Typography className="title"
                variant="h1"
                component="h1"
                style={{ fontWeight: "bold" }}
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
                >
                    <Typography variant="h4">Email</Typography>
                </Button>

                {/* Phone Button */}
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PhoneIcon />}
                    href="tel:2818891359"
                    style={{ marginLeft: "2rem" }}
                >
                    <Typography variant="h4">Phone</Typography>
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