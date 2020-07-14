
const createNewLine = (componentThis) => {
    // create new line
    // line = [{posX, posY}, {posX, posY}]
    const lineHandler = [{posX: 0, posY: 0}, 
      {posX: 0, posY: 0}];
      componentThis.setState(prevState => ({
        lines: prevState.lines.concat([lineHandler]),
        currentLineId: prevState.currentLineId + 1,
        linesVisible: prevState.linesVisible.concat([false])
      }));
  }

export default createNewLine;