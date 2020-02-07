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

            <Container maxWidth="sm" >

              {/* Get Quote Button */}
              <Button variant="outlined" size="large" style={{ float: "left" }}>
                <Typography variant="h4">Get Quote</Typography>
              </Button>

              {/* Portfolio Button */}
              <Button variant="outlined" size="large" style={{ float: "right" }}>
                <Typography variant="h4">Portfolio</Typography>
              </Button>

            </Container>
        </div>
    );
}

export default Landing;