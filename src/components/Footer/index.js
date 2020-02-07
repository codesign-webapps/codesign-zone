import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { SendIcon, PhoneIcon, CopyrightIcon } from '@material-ui/icons';

function Footer() {
    return (
        <div>
            <Typography variant="h2" component="h2">Drop Us A Line</Typography>

            <Button variant="outlined" size="large" startIcon={<SendIcon />}>
                <Typography variant="h4">Email</Typography>
            </Button>

            <Button variant="outlined" size="large" startIcon={<PhoneIcon />}>
                <Typography variant="h4">Phone</Typography>
            </Button>

            <Typography variant="caption" component="block">
                Copyright <CopyrightIcon /> 2020 codesign web applications
            </Typography>
        </div>
    );
}

export default Footer;