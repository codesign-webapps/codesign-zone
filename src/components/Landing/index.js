import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';

function Landing() {
    return (
        <div>
            {/* Logo */}
            <img
                src="./images/logo.png"
                alt="" 
                style={{
                    display: "block",
                    width: "50%",
                    margin: "1.5rem auto"
                }}
            />

            {/* Button Container */}
            <Container maxWidth="sm" >

              {/* Get Quote Button */}
              <Button
                variant="outlined"
                size="large"
                style={{ float: "left" }}
                href="mailto:contact@codesign.zone"
              >
                <Typography variant="h4">Get Quote</Typography>
              </Button>

              {/* Portfolio Button */}
              <Button
                variant="outlined"
                size="large"
                style={{ float: "right" }}
                href="#"
              >
                <Typography variant="h4">Portfolio</Typography>
              </Button>

            </Container>
        </div>
    );
}

export default Landing;