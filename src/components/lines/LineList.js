

import React, { Component } from 'react';
import Line from './Line';

class LineList extends Component {

    render() {
        return (
            <svg 
            height={document.documentElement.clientHeight - 4} 
            width={document.documentElement.clientWidth}>
                {this.props.lines.map((el, key) => 
                <Line begin={el[0]} end={el[1]} 
                visible={this.props.linesVisible[key]} key={key} id={"l" + key}
                addLine={this.props.addLine}/>)}
            </svg>
        );
    }
}

export default LineList;