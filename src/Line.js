
import React, { Component } from 'react';

class Line extends Component {
    componentDidMount() {
        const lineDOMEl = document.querySelector(`line#${this.props.id}`);
        this.props.addLine(lineDOMEl);
    }
    render() {
        return (
            <line 
            id = {this.props.id}
            x1={this.props.begin.posY} 
            y1={this.props.begin.posX} 
            x2={this.props.end.posY} 
            y2={this.props.end.posX} 
            style={{
                visibility: this.props.visible ? "visible" : "hidden"
            }} />
        );
    }
}

export default Line;
