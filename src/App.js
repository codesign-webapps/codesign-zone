import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Shape from './components/Shape';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}

         {/* Site Content */}
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          
          <ParallaxLayer offset={1} speed={1} factor={1} className="bg-dark" />
          <ParallaxLayer offset={2} speed={1} factor={1} className="bg-dark" />

          {/* Scrolling Shapes */}
          <Shape offset={0.5} speed={-0.2} type="smiley-outlined" width="15%" left="10%" opacity="0.2" />
          <Shape offset={0.2} speed={-0.1} type="thumbs-filled" width="10%" left="80%" opacity="0.3" />

          <ParallaxLayer offset={0} speed={-0.13}>
            {/* Logo */}
            <img src="./images/logo.png" alt="" style={{ display: "block", width: "50%", margin: "2rem auto" }} />

            {/* Start Project Button */}

            {/* View Portfolio Button */}

            {/* Scroll Icon */}

          </ParallaxLayer>

          {/* About Section */}

          {/* Process Section */}

          {/* The Team Section */}

          {/* Footer Section */}

        </Parallax>
      </div>
    );
  }
}

export default App;
