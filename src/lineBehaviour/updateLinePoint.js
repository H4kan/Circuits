
export const updateLineBegin = ({posX, posY}, id, componentThis) => {
    if (!(componentThis.state.lines[id][0].posX === posX
      && componentThis.state.lines[id][0].posY === posY)) {
        componentThis.setState(prevState => 
      ({
      lines: prevState.lines.map((el,ind) => ind === id ? [{posX: posX, posY: posY}, prevState.lines[id][1]] :
      el)
    }));
  }}
export const updateLineEnd = ({posX, posY}, id, componentThis) => {
    if (!(componentThis.state.lines[id][1].posX === posX
      && componentThis.state.lines[id][1].posY === posY)) {
        componentThis.setState(prevState => ({
      lines: prevState.lines.map((el,ind) => ind === id ? [prevState.lines[id][0], {posX: posX, posY: posY}] :
      el)
    }));
  }
  }