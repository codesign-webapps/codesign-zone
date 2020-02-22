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
  }
}));

function Process() {
  const classes = useStyles();

  return (
    <div>
        {/* Section Title */}
        <div className="center">
          <Typography variant="h1" component="h1" className={classes.bold}>OUR PROJECT PROCESS</Typography>
        </div>

        <Grid container
          justify="center"
          alignItems="flex-start"
          spacing={3}
          className={classes.grid}
        >

          {/* Phase 1 */}
          <Grid item xs={3}>
            {/* TODO */}
            <Box className={classes.box}>
            <Typography variant="p" style={{fontSize: "1.25rem", textDecoration: "underline"}}>Phase 1</Typography>
            <Typography variant="h4">Strategy & Conceptualization</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
          {/* Phase 2 */}
          <Grid item xs={3}>
            {/* TODO */}
            <Box className={classes.box}>
            <Typography variant="p" style={{fontSize: "1.25rem", textDecoration: "underline"}}>Phase 2</Typography>
            <Typography variant="h4" style={{padding: "1.5rem 0"}}>Digital Design</Typography>
            </Box>
          </Grid>
<Grid item xs={1}></Grid>
          {/* Phase 3 */}
          <Grid item xs={3}>
            {/* TODO */}
            <Box className={classes.box}>
            <Typography variant="p" style={{fontSize: "1.25rem", textDecoration: "underline"}}>Phase 3</Typography>
            <Typography variant="h4">Development & Quality Assessment</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="p">Project Kickoff</Typography><br />
            <Typography variant="p">Research & Strategy</Typography><br />
            <Typography variant="p">Sitemap & Content Mapping</Typography><br />
            <Typography variant="p">Wireframes & Sketches</Typography><br />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="p">High-Fidelity Mockups</Typography><br />
            <Typography variant="p">Illustrations</Typography><br />
            <Typography variant="p">Photography</Typography><br />
            <Typography variant="p">Typography</Typography><br />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="p">Front End Development</Typography><br />
            <Typography variant="p">Back End Development</Typography><br />
            <Typography variant="p">3rd Party Integrations</Typography><br />
            <Typography variant="p">Quality Assurance & Testing</Typography><br />  
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