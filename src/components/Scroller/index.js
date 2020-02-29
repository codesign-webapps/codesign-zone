import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  center: {
    margin: "0 auto"
  },
  scrollIconDot: {
    display: "block",
    position: "absolute",
    left: "50%",
    background: "#181818",
    height: ".5em",
    width: ".5em",
    top: ".6em",
    marginLeft: "-.25em",
    borderRadius: "50%",
    transformOrigin: "top center",
    backfaceVisibility: "hidden",
    animation: "scroll 2s ease-out infinite"
  },
  scrollIcon: {
    display: "block",
    position: "relative",
    height: "3em",
    width: "1.5em",
    border: ".25em solid #181818",
    borderRadius: "1em"
  }
}));

function Scroller() {
  const classes = useStyles();
  return (
      <div>
          <Container maxWidth="xs" className={classes.center}>
            <span className={`${classes.scrollIcon} ${classes.center}`}>
              <span className={classes.scrollIconDot}></span>
            </span>
          </Container>
      </div>
  );
}

export default Scroller;