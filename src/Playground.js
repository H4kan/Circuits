
import React, { Component } from 'react';
import Diode from './Diode';




class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diodesIds: ["d0", "d1", "d2"]        
        }
    }

    addDiode = () => {
        if (this.state.diodesIds.length === 0)
            this.setState({
                diodesIds: ["d0"]
            });
        else {
            let handler = this.state.diodesIds[this.state.diodesIds.length - 1];
            handler = handler.substring(1);
            this.setState(prevState => ({
                diodesIds: prevState.diodesIds.concat(["d" + (parseInt(handler) + 1)])
            }))
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", ev => {
            if (ev.keyCode === 68)
                this.addDiode();
        })
    }

    render() {
        return (
            <div className="playground">
                {this.state.diodesIds.map(id => 
                    <Diode lines={this.props.lines}
                    add={this.props.add} id={id} 
                    updateLine={this.props.updateLine} key={id}/>)}
            </div>
        );
    }
}

export default Playground;
