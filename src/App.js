import React, { Component } from 'react';
import Playground from './Playground';
import LineList from './LineList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [[{posX: 0, posY: 0}, {posX: 0, posY: 0}],
      [{posX: 0, posY: 0}, {posX: 0, posY: 0}],
      [{posX: 0, posY: 0}, {posX: 0, posY: 0}],
      [{posX: 0, posY: 0}, {posX: 0, posY: 0}]
    ],
      playgroundNodes: [],
      linesBegin: [{id: "d0", linesBegin: [0,1]}, {id: "d1", linesBegin: [2,3]}],
      linesEnd: [{id: "d1", linesEnd: [0]}, {id: "d2", linesEnd: [1,2]}, {id: "d0", linesEnd: [3]}]
    }
  }
  updateLineBegin = ({posX, posY}, id) => {
    if (!(this.state.lines[id][0].posX === posX
      && this.state.lines[id][0].posY === posY)) {
    this.setState(prevState => 
      ({
      lines: prevState.lines.map((el,ind) => ind === id ? [{posX: posX, posY: posY}, prevState.lines[id][1]] :
      el)
    }));
  }}
  updateLineEnd = ({posX, posY}, id) => {
    if (!(this.state.lines[id][1].posX === posX
      && this.state.lines[id][1].posY === posY)) {
    this.setState(prevState => ({
      lines: prevState.lines.map((el,ind) => ind === id ? [prevState.lines[id][0], {posX: posX, posY: posY}] :
      el)
    }));
  }
  }

  addPlaygroundNode = (el) => {
    this.setState(prevState => ({
      playgroundNodes: prevState.playgroundNodes.concat([el]),
      linesBegin: prevState.linesBegin.concat([{id: el.id, linesBegin: []}]),
      linesEnd: prevState.linesEnd.concat([{id: el.id, linesEnd: []}])
    }));
  }

  addLineBegin = (componentId, lineId) => {

  }

  componentDidMount() {
    window.addEventListener("keydown", ev => {
        if (ev.keyCode === 67) {
            // create new line
            // line = [{posX, posY}, {posX, posY}]
            console.log("dodaje linie", this.state.playgroundNodes);
            const lineHandler = [{posX: 0, posY: 0}, 
              {posX: 0, posY: 0}];
              this.setState({
                lines: this.state.lines.concat([lineHandler])
              });
              this.state.playgroundNodes.forEach(element => {
                element.el.addEventListener("click", () => {
                  console.log("click");
                })
              });
        };
      });
  }

  render() {
    return (
      <div className="App">
        <Playground lines={[this.state.linesBegin, this.state.linesEnd]} 
        add={this.addPlaygroundNode} 
        updateLine={[this.updateLineBegin, this.updateLineEnd]}/>
        <LineList lines={this.state.lines}/>
      </div>
    );
  }
}

export default App;