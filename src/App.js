import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Container, Button, Typography } from '@material-ui/core';
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
              <Button variant="outlined" size="large" style={{ float: "left" }}>
                <Typography variant="h4">Get Quote</Typography>
              </Button>

              {/* Portfolio Button */}
              <Button variant="outlined" size="large" style={{ float: "right" }}>
              <Typography variant="h4">Portfolio</Typography>
              </Button>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={0.9} speed={0.5}>
            {/* Scroll Icon */}
            <Container maxWidth="xs" style={{ margin: "0 auto"}}>
              <span class="scroll-icon" style={{margin: "0 auto"}}>
                <span class="scroll-icon__dot"></span>
              </span>
            </Container>
          </ParallaxLayer>

          {/* About Section */}
          <ParallaxLayer offset={1.1} speed={1} className="center" className="text-yellow">
            {/* Section Title */}
            <Typography variant="h2" component="h2">Who are we anyway?</Typography>

            {/* About Text */}
            <Typography variant="h4" component="h2">Codesign Web Applications</Typography>
            <Typography variant="body1" component="p">
              is an experienced and passionate group of designers, developers, project managers, writers, and artists.
              Built on customer service first and foremost, every customer becomes a part of the Codesign family. Together we face the challenges and celebrate the victories!
            </Typography>

            {/* What We Do Text */}
            <Typography variant="h4" component="h2">What We Do</Typography>
            <ul>
              <li>Web Design</li>
              <li>Web Hosting</li>
              <li>App Development</li>
              <li>Web Copy Writing</li>
              <li>Photography</li>
              <li>Videography</li>
            </ul>

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
