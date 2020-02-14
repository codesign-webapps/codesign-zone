import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons'

function Shape(props) {
    return (
        <ParallaxLayer offset={props.offset} speed={props.speed}>
            <img
                src={`./images/${props.type}.png`}
                alt=""
                style={{
                    display: "block",
                    width: props.width,
                    marginLeft: props.left,
                    opacity: props.opacity
                }}
            />
        </ParallaxLayer>
    )
}

export default Shape;