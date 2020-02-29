import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, List } from "@material-ui/core";
import InfoList from '../InfoList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: "1rem"
  },
  center: {
    textAlign: "center",
    margin: "0 auto"
  },
  paper: {
    padding: theme.spacing(1),
    color: "#FFEA00",
    background: "#181818"
  },
  header: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "33px",
    }
  },
  image: {
    width: "50%",
    [theme.breakpoints.down('sm')]: {
      display: "none",
    }
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "50px",
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
  bold: {
    fontWeight: 'bold'
  },
  split: {
    [theme.breakpoints.up('md')]: {
      columns: 2
    }
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div>
      {/* Section Title */}
      <a name="about" href="#about">
        <Typography className={`${classes.title} ${classes.bold}`} variant="h1" component="h1">
          WHO ARE WE ANYWAY?
        </Typography>
      </a>

      <div className={classes.root}>
        <Grid container spacing={3} style={{justifyContent: 'center'}}>

            {/* About Text */}
            <Grid item xs={12} sm={7}>
                <Typography variant="h3" component="h2" className={`${classes.header} ${classes.bold}`}>
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
            </Grid>

            {/* Smiley Face */}
            <Grid item xs={5}>
                <img src="../images/smiley-yellow.png" alt="smiley face" id="smiley" className={classes.image} />
            </Grid>
            
            {/* Thumbs Up */}
            <Grid item xs={5}>
               <img src="../images/thumbs-yellow.png" alt="smiley face" id="smiley" className={classes.image} />
            </Grid>

            {/* What We Do Text */}
            <Grid item xs={12} sm={7}>
                <Typography className={`${classes.header} ${classes.bold}`} variant="h3" component="h2">
                    What We Do?
                </Typography>
                <List className={classes.split}>
                  <InfoList className={classes.list} text="Web Design" />
                  <InfoList className={classes.list} text="Web Hosting" />
                  <InfoList className={classes.list} text="App Development" />
                  <InfoList className={classes.list} text="Web Copywriting" />
                  <InfoList className={classes.list} text="SEO" />
                  <InfoList className={classes.list} text="Photography" />
                </List>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
