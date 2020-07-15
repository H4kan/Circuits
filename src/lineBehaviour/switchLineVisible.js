
export const setLineVisible = (id, componentThis) => {
    componentThis.setState(prevState => ({
      linesVisible: prevState.linesVisible.map((el,ind) => ind === id ? true : el) 
    }));
  }

export const unsetLineVisible = (id, componentThis) => {
    componentThis.setState(prevState => ({
      linesVisible: prevState.linesVisible.map((el,ind) => ind === id ? false : el) 
    }));
  }