
const createNewLine = (componentThis) => {
    // create new line
    // line = [{posX, posY}, {posX, posY}]
    const lineHandler = [{posX: 0, posY: 0}, 
      {posX: 0, posY: 0}];
      componentThis.setState(prevState => ({
        lines: prevState.lines.concat([lineHandler]),
        linesVisible: prevState.linesVisible.concat([false])
      }));
      componentThis.currentLineId = componentThis.currentLineId + 1;
  }

export default createNewLine;