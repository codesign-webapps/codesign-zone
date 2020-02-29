import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  logo: {
    display: "block",
    width: "55%",
    margin: "1.5rem auto",
    [theme.breakpoints.down('xs')]: {
      width: "100%"
    },
    [theme.breakpoints.down('sm')]: {
      width: "75%"
    }
  },
  btn: {
    borderRadius: "35px",
    border: "4px black solid",
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      flexGrow: "1",
      margin: "5px",
      float: "none !important",
    }
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
        <a name="top" href="#top"><img
            src="./images/codesignlogo.png"
            alt="" 
            className={classes.logo}
        /></a>

        {/* Button Container */}
        <Container maxWidth="sm" >

          {/* Get Quote Button */}
          <Button
            variant="outlined"
            size="large"
            className={classes.btn}
            href="mailto:contact@codesign.zone"
            style={{ float: "left" }}
          >
            <Typography variant="h4" className={classes.bold}>Get Quote</Typography>
          </Button>

          {/* Portfolio Button */}
          <Button
            variant="outlined"
            size="large"
            className={classes.btn}
            href="#"
            style={{ float: "right" }}
          >
            <Typography variant="h4" className={classes.bold}>Portfolio</Typography>
          </Button>

        </Container>
    </div>
  );
}

export default Landing;