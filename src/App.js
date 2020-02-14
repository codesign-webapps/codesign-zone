import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Button, Typography, Grid } from '@material-ui/core';
import Shape from './components/Shape';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}

         {/* Site Content */}
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          
          {/* Dark Backgrounds */}
          <ParallaxLayer offset={1} speed={1} factor={1} className="bg-dark" />
          <ParallaxLayer offset={2} speed={1} factor={1} className="bg-dark" />

          {/* Scrolling Shapes */}
          <Shape offset={0.1} speed={-0.6} type="thumbs-outlined" width="9%" left="5%" opacity="0.2" />
          <Shape offset={0.7} speed={-0.05} type="thumbs-filled" width="12%" left="85%" opacity="0.3" />

          <Shape offset={0.55} speed={-0.25} type="smiley-outlined" width="10%" left="75%" opacity="0.2" />
          <Shape offset={0.45} speed={-0.2} type="smiley-filled" width="15%" left="7%" opacity="0.2" />

          <Shape offset={0.8} speed={-0.06} type="heart-outlined" width="7%" left="20%" opacity="0.3" />
          <Shape offset={0.12} speed={-0.3} type="heart-filled" width="15%" left="80%" opacity="0.3" />

          {/* Landing Page Section */}
          <ParallaxLayer offset={0} speed={-0.13}>
            {/* Logo */}
            <img src="./images/logo.png" alt="" style={{ display: "block", width: "50%", margin: "1.5rem auto" }} />

            <Container maxWidth="sm" >
              {/* Get Quote Button */}
              <Button variant="outlined" size="large" style={{ float: "left", borderRadius: '35px', border: '#000000 solid 3px' }}>
                <Typography to="#" variant="h4" style={{fontWeight: 'bold'}}>Get Quote</Typography>
              </Button>

              {/* Portfolio Button */}
              <Button variant="outlined" size="large" style={{ float: "right", borderRadius: '35px', border: '#000000 solid 3px' }}>
              <Typography to="#" variant="h4" style={{fontWeight: 'bold'}}>Portfolio</Typography>
              </Button>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={0.9} speed={0.0}>
            {/* Scroll Icon */}
            <Container maxWidth="xs" style={{ margin: "0 auto"}}>
              <span class="scroll-icon" style={{margin: "0 auto"}}>
                <span class="scroll-icon__dot"></span>
              </span>
            </Container>
          </ParallaxLayer>

          {/* About Section */}
          <ParallaxLayer
            offset={1.1}
            speed={1}
            className="center"
            className="text-yellow">
            {/* Section Title */}
            <Typography
              variant="h1"
              component="h1"
              style={{fontWeight: 'bold', textAlign: 'center'}}>
                WHO ARE WE, ANYWAY?
            </Typography>

            {/* About Text */}
      <div className="About">
        <Grid container spacing={3}>
          <Grid item xs={6} style={{marginTop: '10%'}}>
            <Typography
              variant="h3"
              component="h2"
              style={{fontWeight: 'bold', textAlign: 'center'}}>
                Codesign Web Applications
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: 'justify', margin: '0% 5%', fontSize: '1.15rem'}}>
              is an experienced and passionate group of designers, developers, project managers, writers, and artists.
              Built on customer service first and foremost, every customer becomes a part of the Codesign family. Together we face the challenges and celebrate the victories!
            </Typography>
            </Grid>
            <Grid Item xs={6}>
              <img
                src="../images/smiley-face-yellow.png"
                alt="smiley face"
                style={{width:'25%', position: 'absolute', paddingLeft: '12%', paddingTop: '2%'}}>
              </img>
            </Grid>
          </Grid>
        </div>
            {/* What We Do Text */}
      <div className="AboutContinued">
        <Grid container spacing={3}>
        <Grid item xs={6} style={{marginTop: '10%'}}>
            <img
              src="../images/thumbs-yellow.png"
              alt="thumbs up"
              style={{width:'25%', paddingLeft: '10%', paddingTop:'-25%'}}>
            </img>
          </Grid>
          <Grid item xs={6} style={{marginTop: '8%'}}>
            <Typography
              variant="h3"
              component="h2"
              style= {{fontWeight: 'bold', textAlign: 'center'}}>
                What We Do
            </Typography>
            </Grid>
        </Grid>
      </div>
            {/* Shapes */}

          </ParallaxLayer>

          {/* Process Section */}

          {/* The Team Section */}

          {/* Footer Section */}

        </Parallax>
      </div>
    );
  }
}

export default App;
