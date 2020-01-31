import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import './App.css';

function App() {
  return (
    <Parallax pages={3}>
      
      <ParallaxLayer offset={1} speed={1} factor={1} className="bg-yellow-light" />
      <ParallaxLayer offset={2} speed={1} factor={1} className="bg-yellow-dark" />

      <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.2 }}>
        <img src="./images/rect-dark-gray-200x400.png" alt="" style={{ display: 'block', width: '10%', marginLeft: '55%' }} />
        <img src="./images/square-gray-200.png" alt="" style={{ display: 'block', width: '15%', marginLeft: '15%' }} />
        <img src="./images/rect-light-gray-200x800.png" alt="" style={{ display: "block", width: "10%", marginLeft: "40%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.1}>
        <img src="./images/logo.png" alt="" style={{ display: "block", width: "60%", margin: "2rem auto" }} />
      </ParallaxLayer>

    </Parallax>
  );
}

export default App;
