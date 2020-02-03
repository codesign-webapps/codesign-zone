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
          <Shape offset={0.1} speed={-0.6} type="thumbs-outlined" width="9%" left="5%" opacity="0.2" />
          <Shape offset={0.7} speed={-0.05} type="thumbs-filled" width="12%" left="85%" opacity="0.3" />

          <Shape offset={0.55} speed={-0.25} type="smiley-outlined" width="10%" left="75%" opacity="0.2" />
          <Shape offset={0.45} speed={-0.2} type="smiley-filled" width="15%" left="7%" opacity="0.2" />

          <Shape offset={0.8} speed={-0.06} type="heart-outlined" width="7%" left="20%" opacity="0.3" />
          <Shape offset={0.12} speed={-0.3} type="heart-filled" width="15%" left="80%" opacity="0.3" />

          {/* Landing Page Section */}
          <ParallaxLayer offset={0} speed={-0.13}>
            {/* Logo */}
            <img src="./images/logo.png" alt="" style={{ display: "block", width: "47%", margin: "1.5rem auto" }} />

            {/* Get Quote Button */}

            {/* Portfolio Button */}

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
