import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography,
         Grid,
         Paper,
         List} from "@material-ui/core";
import InfoList from '../InfoList';
import "./about.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#FFEA00",
    background: "#181818",
    margin: "0 auto",
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div>
      {/* Section Title */}
      <Typography
        className="title"
        variant="h1"
        component="h1"
        style={{ fontWeight: "bold" }}
      >
        WHO ARE WE ANYWAY?
      </Typography>

      <div className={classes.root}>
        <Grid container spacing={3}>
            {/* About Text */}
            <Grid item container xs={12} style={{justifyContent: 'center'}}>
              <Grid item xs={6} alignItems="center">
                <Paper className={classes.paper}>
                  <Typography variant="h3" component="h2"
                    style={{fontWeight: 'bold'}}>
                    Codesign Web Applications
                  </Typography>
                <Typography variant="body1" component="p"
                  style={{fontSize: '1.25rem'}}>
                  is an experienced and passionate group of designers, developers,
                  project managers, writers, and artists. Built on customer
                  service first and foremost, every customer becomes a part of the
                  Codesign family. Together we face the challenges and celebrate
                  the victories!
                </Typography>
              </Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <img src="../images/smiley-yellow.png" alt="smiley face" id="smiley" />
                </Paper>
              </Grid>
            </Grid>

            {/* What We Do Text */}
            <Grid item container xs={12} style={{justifyContent: 'center'}}>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <img src="../images/thumbs-yellow.png" alt="smiley face" id="smiley" />
                </Paper>
              </Grid>
              <Grid item xs={6} alignItems="center">
                <Paper className={classes.paper}>
                  <Typography variant="h3" component="h2"
                    style={{fontWeight: 'bold'}}>
                    What We Do?
                  </Typography>
                  <List>
                    <InfoList text="Web Design" />
                    <InfoList text="Web Hosting" />
                    <InfoList text="App Development" />
                    <InfoList text="Web Copywriting" />
                    <InfoList text="SEO" />
                    <InfoList text="Photography" />
                  </List>
                </Paper>
              </Grid>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
