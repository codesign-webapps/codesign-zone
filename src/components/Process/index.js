import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';

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
    // paddingLeft: "2rem",
    // paddingRight: "2rem"
  },
  border: {
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
          <Grid item xs={3} className={classes.border}>
            {/* TODO */}
            TODO
          </Grid>

          {/* Phase 2 */}
          <Grid item xs={3} className={classes.border}>
            {/* TODO */}
            TODO
          </Grid>

          {/* Phase 3 */}
          <Grid item xs={3} className={classes.border}>
            {/* TODO */}
            TODO
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