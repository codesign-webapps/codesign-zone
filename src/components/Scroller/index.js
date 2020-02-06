import React from 'react';
import { Container } from '@material-ui/core';

function Scroller() {
    return (
        <div>
            <Container maxWidth="xs" className="center">
              <span className="scroll-icon center">
                <span className="scroll-icon__dot"></span>
              </span>
            </Container>
        </div>
    );
}

export default Scroller;