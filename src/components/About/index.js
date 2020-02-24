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
    [theme.breakpoints.down('sm')]: {
      flexGrow: "1",
    }
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#FFEA00",
    background: "#181818",
    margin: "0 auto",
  },
  header: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "33px",
    }
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      display: "none",
    }
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
      margin: "0 auto"
    }
  },
  paragraph: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "20px",
      margin: "0 auto"
    }
  },
  list: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "10px",
      margin: "0 auto"
    }
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div>
      {/* Section Title */}
      <a name="about" href="#about"><Typography
        className={classes.header}
        variant="h1"
        component="h1"
        style={{ fontWeight: "bold" }}
      >
        WHO ARE WE ANYWAY?
      </Typography></a>

      <div className={classes.root}>
        <Grid container spacing={3} style={{justifyContent: 'center'}}>

            {/* About Text */}
            <Grid item xs={12} sm={7}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="h3" component="h2" className={classes.title}
                  style={{fontWeight: 'bold'}}>
                  Codesign Web Applications
                </Typography>
              <Typography variant="body1" component="p" className={classes.paragraph}
                style={{fontSize: '1.25rem'}}>
                  is an experienced and passionate group of designers, developers,
                  project managers, writers, and artists. Built on customer
                  service first and foremost, every customer becomes a part of the
                  codesign family. Together we face the challenges and celebrate
                  the victories!
                </Typography>
              </Paper>
            </Grid>

            {/* Smiley Face */}
            <Grid item xs={5}>
              <Paper className={classes.paper} elevation={0}>
                <img src="../images/smiley-yellow.png" alt="smiley face" id="smiley" className={classes.image} />
              </Paper>
            </Grid>
            
            {/* Thumbs Up */}
            <Grid item xs={5}>
              <Paper className={classes.paper} elevation={0}>
                <img src="../images/thumbs-yellow.png" alt="smiley face" id="smiley" className={classes.image} />
              </Paper>
            </Grid>

            {/* What We Do Text */}
            <Grid item xs={12} sm={7}>
              <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.header} variant="h3" component="h2"
                  style={{fontWeight: 'bold'}}>
                    What We Do?
                </Typography>
                <List>
                  <InfoList className={classes.list} text="Web Design" />
                  <InfoList className={classes.list} text="Web Hosting" />
                  <InfoList className={classes.list} text="App Development" />
                  <InfoList className={classes.list} text="Web Copywriting" />
                  <InfoList className={classes.list} text="SEO" />
                  <InfoList className={classes.list} text="Photography" />
                </List>
              </Paper>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
