import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Navbar from './components/Navbar';
import Shape from './components/Shape';
import Landing from './components/Landing';
import Scroller from './components/Scroller';
import About from './components/About';
import Process from './components/Process';
import Team from './components/Team';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  bgYellow: {
    background: "#FFEA00"
  },
  bgDark: {
    background: "#181818"
  },
  textYellow: {
    color: "#FFEA00"
  },
  center: {
    margin: "0 auto",
    textAlign: "center"
  },
  section: {
    paddingTop: "2rem",
    paddingBottom: "2rem"
  }
}));

const min = 550, max = 2000;
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

function App() {
  const classes = useStyles();
  const [posY, setPosY] = useState(0);
  const onScroll = useCallback(e => setPosY(e.target.scrollTop), []);
  const pages = map(window.innerHeight, min, max, 5.1, 2.17);

  return (
    <div onScroll={onScroll}>
      {/* Navbar */}
      <Navbar posY={posY} />

      {/* Site Content */}
      <Parallax pages={pages}>

          {/* Scrolling Shapes */}
          <Shape offset={0.1} speed={-0.6} type="thumbs-outlined" width="9%" left="5%" opacity="0.2" />
          <Shape offset={0.7} speed={-0.05} type="thumbs-filled" width="12%" left="85%" opacity="0.3" />

          <Shape offset={0.55} speed={-0.25} type="smiley-outlined" width="10%" left="75%" opacity="0.2" />
          <Shape offset={0.45} speed={-0.2} type="smiley-filled" width="15%" left="7%" opacity="0.2" />

          <Shape offset={0.8} speed={-0.06} type="heart-outlined" width="7%" left="20%" opacity="0.3" />
          <Shape offset={0.12} speed={-0.3} type="heart-filled" width="15%" left="80%" opacity="0.3" />

          {/* Landing Page Section */}
          <ParallaxLayer offset={0} speed={-0.13}>
            <Landing />
          </ParallaxLayer>

          {/* Scroll Icon */}
          <ParallaxLayer offset={0.9} speed={0}>
            <Scroller />
          </ParallaxLayer>

          
          <ParallaxLayer offset={1} speed={1} factor={3} className={classes.center}>
            {/* About Section */}
            <div className={`${classes.bgDark} ${classes.textYellow} ${classes.section}`}>
              <About />
            </div>

            {/* Process Section */}
            <div className={`${classes.textYellow} ${classes.section}`}>
              <Process />
            </div>
            
            {/* Team Section */}
            <div className={`${classes.bgDark} ${classes.textYellow} ${classes.section}`}>
              <Team />
            </div>

            {/* Footer Section */}
            <div className={`${classes.textYellow} ${classes.section}`}>
              <Footer />
            </div>
          </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
