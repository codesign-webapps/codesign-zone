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
        <Parallax ref={ref => (this.parallax = ref)} pages={2.92}>

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

          
          <ParallaxLayer offset={1} speed={1} factor={3} className="center">
            {/* About Section */}
            <div className="bg-dark text-yellow full-height">
              <About />
            </div>

            {/* Process Section */}
            <div className="bg-yellow full-height">
              <Process />
            </div>
            
            {/* Team Section */}
            <div className="bg-dark text-yellow full-height">
              <Team />
            </div>

            {/* Footer Section */}
            <div className="bg-yellow" style={{ paddingTop: "2rem" }}>
              <Footer />
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    );
  }
}

export default App;
