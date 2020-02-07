import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { SendIcon, PhoneIcon, CopyrightIcon } from '@material-ui/icons';

function Footer() {
    return (
        <div>
            {/* Section Title */}
            <Typography variant="h2" component="h2">Drop Us A Line</Typography>

            {/* Email Button */}
            <Button
                variant="outlined"
                size="large"
                startIcon={<SendIcon />}
                href="mailto:contact@codesign.zone"
            >
                <Typography variant="h4">Email</Typography>
            </Button>

            {/* Phone Button */}
            <Button
                variant="outlined"
                size="large"
                startIcon={<PhoneIcon />}
                href="tel:2818891359"
            >
                <Typography variant="h4">Phone</Typography>
            </Button>

            {/* Copyright Info */}
            <Typography variant="caption" component="block">
                Copyright <CopyrightIcon /> 2020 codesign web applications
            </Typography>
        </div>
    );
}

export default Footer;