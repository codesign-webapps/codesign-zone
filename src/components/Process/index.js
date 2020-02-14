import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';

function Process() {
    return (
        <div>
            {/* Section Title */}
            <Typography variant="h2" component="h2">Our Poject Process</Typography>

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