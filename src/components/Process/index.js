import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';

function Process() {
    return (
        <div>
            {/* Section Title */}
            <Typography className="title" variant="h1" component="h1" style={{fontWeight: "bold", zIndex: '1'}}>OUR PROJECT PROCESS</Typography>

            {/* Phase 1 */}
            <Container></Container>

            {/* Phase 2 */}
            <Container></Container>

            {/* Phase 3 */}
            <Container></Container>

            {/* Text */}
            <Typography variant="h4" component="block"></Typography>

            {/* Get Quote Button */}
            <Button
                variant="outlined"
                size="large"
                style={{ float: "left" }}
                href="mailto:contact@codesign.zone"
              >
                <Typography variant="h4">Get Quote</Typography>
              </Button>
        </div>
    );
}

export default Process;