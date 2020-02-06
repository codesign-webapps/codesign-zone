import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Navbar from './components/Navbar';
import Shape from './components/Shape';
import Landing from './components/Landing';
import Scroller from './components/Scroller';
import About from './components/About';
import Process from './components/Process';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <Navbar />

         {/* Site Content */}
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          
          {/* Dark Backgrounds */}
          <ParallaxLayer offset={1} speed={1} factor={1} className="bg-dark" />
          <ParallaxLayer offset={2} speed={1} factor={1} className="bg-dark" />

          {/* Scrolling Shapes */}
          <Shape offset={0.1} speed={-0.6} type="thumbs-outlined" width="9%" left="5%" opacity="0.2" />
          <Shape offset={0.7} speed={-0.05} type="thumbs-filled" width="12%" left="85%" opacity="0.3" />
          <Shape offset={1.6} speed={1} type="thumbs-yellow" width="12%" left="5%" opacity="1.0" />

          <Shape offset={0.55} speed={-0.25} type="smiley-outlined" width="10%" left="75%" opacity="0.2" />
          <Shape offset={0.45} speed={-0.2} type="smiley-filled" width="15%" left="7%" opacity="0.2" />
          <Shape offset={1.2} speed={1} type="smiley-yellow" width="15%" left="70%" opacity="1.0" />

          <Shape offset={0.8} speed={-0.06} type="heart-outlined" width="7%" left="20%" opacity="0.3" />
          <Shape offset={0.12} speed={-0.3} type="heart-filled" width="15%" left="80%" opacity="0.3" />

          {/* Landing Page Section */}
          <ParallaxLayer offset={0} speed={-0.13}>
            <Landing />
          </ParallaxLayer>

          {/* Scroll Icon */}
          <ParallaxLayer offset={0.9} speed={0.9}>
            <Scroller />
          </ParallaxLayer>

          {/* About Section */}
          <ParallaxLayer offset={1.1} speed={1} className="center text-yellow">
            <About />
          </ParallaxLayer>

          {/* Process Section */}
          <ParallaxLayer offset={2.1} speed={1} className="center">
            <Process />
          </ParallaxLayer>

          {/* Team Section */}
          <ParallaxLayer offset={3.1} speed={1} className="center text-yellow">
            <Team />
          </ParallaxLayer>

          {/* Footer Section */}
          <ParallaxLayer offset={4.1} speed={1} className="center">
            <Footer />
          </ParallaxLayer>

        </Parallax>
      </div>
    );
  }
}

export default App;
