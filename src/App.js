import React, { Component } from 'react';
import Playground from './components/Playground';
import LineList from './components/lines/LineList';
import addLineListener from './lineBehaviour/addLineListener';
import { updateLineBegin, updateLineEnd } from './lineBehaviour/updateLinePoint';
import addPlaygroundNode from './nodeBehaviour/addPlaygroundNode';
import removeLineListener from './lineBehaviour/removeLineListener';
import addLineNode from './lineBehaviour/addLineNode';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.currentLineId = -1;
    this.lastClickedId = "";
    this.state = {
      lines: [],
      playgroundNodes: [],
      lineNodes: [],
      linesVisible: [],
      linesBegin: [],
      linesEnd: [],

    }

    this.updateLineBegin = ({posX, posY}, id) => updateLineBegin({posX, posY}, id, this);
    this.updateLineEnd = ({posX, posY}, id) => updateLineEnd({posX, posY}, id, this);
    this.addPlaygroundNode = (el) => addPlaygroundNode(el, this);
    this.addLineNode = (el) => addLineNode(el, this);
  }

  componentDidMount() {
    addLineListener(this);
    removeLineListener(this);
  }

  render() {
    return (
      <div className="App">
        <Playground lines={[this.state.linesBegin, this.state.linesEnd]}
        linesVisible={this.state.linesVisible}
        add={this.addPlaygroundNode} 
        updateLine={[this.updateLineBegin, this.updateLineEnd]}/>
        <LineList lines={this.state.lines}
                linesVisible={this.state.linesVisible}
                addLine={this.addLineNode}/>
      </div>
    );
  }
}

export default App;