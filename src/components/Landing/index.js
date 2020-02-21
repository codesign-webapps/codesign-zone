import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  logo: {
    display: "block",
    width: "55%",
    margin: "1.5rem auto"
  },
  btn: {
    borderRadius: "35px",
    border: "4px black solid"
  },
  bold: {
    fontWeight: "bold"
  }
}));

function Landing() {
  const classes = useStyles();

  return (
    <div>
        {/* Logo */}
        <img
            src="./images/logo.png"
            alt="" 
            className={classes.logo}
        />

        {/* Button Container */}
        <Container maxWidth="sm" >

          {/* Get Quote Button */}
          <Button
            variant="outlined"
            size="large"
            style={{ float: "left" }}
            className={classes.btn}
            href="mailto:contact@codesign.zone"
          >
            <Typography variant="h4" className={classes.bold}>Get Quote</Typography>
          </Button>

          {/* Portfolio Button */}
          <Button
            variant="outlined"
            size="large"
            style={{ float: "right" }}
            className={classes.btn}
            href="#"
          >
            <Typography variant="h4" className={classes.bold}>Portfolio</Typography>
          </Button>

        </Container>
    </div>
  );
}

export default Landing;