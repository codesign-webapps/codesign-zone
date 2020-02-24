import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  btn: {
    borderRadius: "35px",
    border: "4px black solid"
  },
  bold: {
    fontWeight: "bold"
  },
  grid: {
    flexGrow: 1,
  },
  box: {
    margin: "1rem",
    width: "100hw",
    height: "9rem",
    border: "2px #181818 solid"
  },
  lightBox: {
    margin: "0 1rem",
    paddingTop: "2rem",
    width: "100hw",
    height: "9rem",
    border: "2px #CCBB00 solid"
  }
}));

function Process() {
  const classes = useStyles();

  return (
    <div>
        {/* Section Title */}
        <div className="center">
          <a name="process" href="#process"><Typography variant="h1" component="h1" className={classes.bold}>OUR PROJECT PROCESS</Typography></a>
        </div>

        <Grid container
          justify="center"
          alignItems="flex-start"
          spacing={3}
          className={classes.grid}
        >

          {/* Phase 1 */}
          <Grid item xs={12} sm={9} md={4} className="center">
            <Box className={classes.box}>
              <Typography component="p" style={{fontSize: "1.25rem", textDecoration: "underline"}}>Phase 1</Typography>
              <Typography variant="h4">Strategy & Conceptualization</Typography>
            </Box>

            {/* <br /> */}

            <Box className={classes.lightBox}>
              <Typography component="p">Project Kickoff</Typography>
              <Typography component="p">Research & Strategy</Typography>
              <Typography component="p">Sitemap & Content Mapping</Typography>
              <Typography component="p">Wireframes & Sketches</Typography>
            </Box>
          </Grid>

          {/* <Grid item xs={0} sm={0} md={1}></Grid> */}

          {/* Phase 2 */}
          <Grid item xs={12} sm={9} md={4} className="center">
            <Box className={classes.box}>
              <Typography component="p" style={{fontSize: "1.25rem", textDecoration: "underline"}}>Phase 2</Typography>
              <Typography variant="h4" style={{padding: "1.5rem 0"}}>Digital Design</Typography>
            </Box>
            
            {/* <br /> */}

            <Box className={classes.lightBox}>
              <Typography component="p">High-Fidelity Mockups</Typography>
              <Typography component="p">Illustrations</Typography>
              <Typography component="p">Photography</Typography>
              <Typography component="p">Typography</Typography>
            </Box>
          </Grid>

          {/* <Grid item xs={0} sm={0} md={1}></Grid> */}

          {/* Phase 3 */}
          <Grid item xs={12} sm={9} md={4} className="center">
            <Box className={classes.box}>
              <Typography component="p" style={{fontSize: "1.25rem", textDecoration: "underline"}}>Phase 3</Typography>
              <Typography variant="h4">Development & Quality Assessment</Typography>
            </Box>

            {/* <br /> */}

            <Box className={classes.lightBox}>
              <Typography component="p">Front End Development</Typography>
              <Typography component="p">Back End Development</Typography>
              <Typography component="p">3rd Party Integrations</Typography>
              <Typography component="p">Quality Assurance & Testing</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} className="center">
            <Typography variant="h4" className={classes.bold}>READY TO DO THIS?</Typography>
          </Grid>

          {/* Get Quote Button */}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              size="large"
              className={classes.btn}
              href="mailto:contact@codesign.zone"
            >
              <Typography variant="h4" className={classes.bold}>Get Quote</Typography>
            </Button>
          </Grid>
        </Grid>
    </div>
  );
}

export default Process;