

const addLineNode = (el, componentThis) => {
    componentThis.setState(prevState => ({
      lineNodes: prevState.lineNodes.concat([el])
    }));
  }

export default addLineNode;