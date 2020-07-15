
export default (el, componentThis) => {
    componentThis.setState(prevState => ({
      playgroundNodes: prevState.playgroundNodes.concat([el]),
      linesBegin: prevState.linesBegin.concat([{id: el.id, linesBegin: []}]),
      linesEnd: prevState.linesEnd.concat([{id: el.id, linesEnd: []}])
    }));
  }