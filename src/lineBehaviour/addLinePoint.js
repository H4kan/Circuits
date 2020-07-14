

export const addLineBegin = (componentId, lineId, componentThis) => {
    componentThis.setState(prevState => ({
        linesBegin: prevState.linesBegin.map(
          el => el.id === componentId ? 
          ({id: componentId, linesBegin: el.linesBegin.concat([lineId])}) : el)
        })
      )
    }

export const addLineEnd = (componentId, lineId, componentThis) => {
    componentThis.setState(prevState => ({
        linesEnd: prevState.linesEnd.map(
          el => el.id === componentId ? 
          ({id: componentId, linesEnd: el.linesEnd.concat([lineId])}) : el)
        })
      )
    }


