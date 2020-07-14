

import React from 'react';

function Line(props) {
    return (
        <line 
        x1={props.begin.posY} 
        y1={props.begin.posX} 
        x2={props.end.posY} 
        y2={props.end.posX} 
        style={{
            stroke: "rgb(255,0,0)", 
            strokeWidth:2,
            visibility: props.visible ? "visible" : "hidden"}} />
    );
}

export default Line;