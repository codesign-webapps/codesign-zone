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
                style={{ float: "left", borderRadius: "35px", border: "4px black solid" }}
                href="mailto:contact@codesign.zone"
              >
                <Typography variant="h4" style={{fontWeight: "bold"}}>Get Quote</Typography>
              </Button>

              {/* Portfolio Button */}
              <Button
                variant="outlined"
                size="large"
                style={{ float: "right", borderRadius: "35px", border: "4px black solid" }}
                href="#"
              >
                <Typography variant="h4" style={{fontWeight: "bold"}}>Portfolio</Typography>
              </Button>

            </Container>
        </div>
    );
}

export default Landing;