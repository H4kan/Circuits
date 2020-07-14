import React, { Component } from 'react';
import Playground from './Playground';
import LineList from './LineList';
import addLineListener from './lineBehaviour/addLineListener';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      playgroundNodes: [],
      linesVisible: [],
      linesBegin: [],
      linesEnd: [],
      currentLineId: -1
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

  setLineVisible = (id) => {
    this.setState(prevState => ({
      linesVisible: prevState.linesVisible.map((el,ind) => ind === id ? true : el) 
    }));
  }

  unsetLineVisible = (id) => {
    this.setState(prevState => ({
      linesVisible: prevState.linesVisible.map((el,ind) => ind === id ? false : el) 
    }));
  }


  addPlaygroundNode = (el) => {
    this.setState(prevState => ({
      playgroundNodes: prevState.playgroundNodes.concat([el]),
      linesBegin: prevState.linesBegin.concat([{id: el.id, linesBegin: []}]),
      linesEnd: prevState.linesEnd.concat([{id: el.id, linesEnd: []}])
    }));
  }

  
  componentDidMount() {
    addLineListener(this);
  }

  render() {
    return (
      <div className="App">
        <Playground lines={[this.state.linesBegin, this.state.linesEnd]}
        linesVisible={this.state.linesVisible}
        add={this.addPlaygroundNode} 
        updateLine={[this.updateLineBegin, this.updateLineEnd]}/>
        <LineList lines={this.state.lines}
                linesVisible={this.state.linesVisible}/>
      </div>
    );
  }
}

export default App;