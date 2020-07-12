
import React, { Component } from 'react';
import moveWithMouse from './moveWithMouse';

class Diode extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.isTracking = false;
        this.linesBegin = props.lines[0];
        this.linesEnd = props.lines[1];
        this.state = {
            active: false,
            position: [100, 100],
            size: 'medium'
        }
    }

    updatePosition = (pos) => {
        this.setState({
            position: pos
        })
    }
    componentDidMount() {
        const diodeDOMel = document.querySelector(`div#${this.id}`);
        moveWithMouse(diodeDOMel, this.updatePosition);
        this.props.add({el: diodeDOMel, id: this.id });
    }
    componentDidUpdate() {
        const pos = { posX: this.state.position[0], posY: this.state.position[1] };
        this.linesBegin.forEach((el,id) => {
            if (el.id === this.id)
                el.linesBegin.forEach(ind => 
                (this.props.updateLine[0])(pos, ind));
        })
        this.linesEnd.forEach((el, ind) => {
            if (el.id === this.id){
                el.linesEnd.forEach(ind => 
                    (this.props.updateLine[1])(pos, ind));
            }
        });
    }
    render() {
        return (
            <div className={`diode ${this.state.size}`} id={this.id}
        style={{top: this.state.position[0], left: this.state.position[1]}}>{this.id}</div>
        );
    }
}

export default Diode;