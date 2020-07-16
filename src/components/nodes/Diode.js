
import React, { Component } from 'react';
import lineUpdater from '../../lineBehaviour/lineUpdater';
import updatePosition from '../../nodeBehaviour/updatePosition';
import { NODE_DEFAULT_STATE } from '../../templates/NODE_DEFAULT_STATE';
import makeElementMoveable from '../../nodeBehaviour/makeElementMoveable';

class Diode extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.state = {
            ...NODE_DEFAULT_STATE(props),
            
            active: false
        }
        this.updatePosition = (pos) => updatePosition(pos, this);
    }


    componentDidMount() {
        makeElementMoveable(this);
    }

    componentDidUpdate() {
        lineUpdater(this);
    }

    render() {
        return (
            <div className={`diode ${this.state.size}`} 
            id={this.id}
            style={{top: this.state.position[0], 
            left: this.state.position[1]}}>{this.id}</div>
        );
    }
}

export default Diode;