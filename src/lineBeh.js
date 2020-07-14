const createNewLine = () => {
    // create new line
    // line = [{posX, posY}, {posX, posY}]
    const lineHandler = [{posX: 0, posY: 0}, 
      {posX: 0, posY: 0}];
      this.setState(prevState => ({
        lines: prevState.lines.concat([lineHandler]),
        currentLineId: prevState.currentLineId + 1,
        linesVisible: prevState.linesVisible.concat([false])
      }));
  }

const addLineBegin = (componentId, lineId) => {
    this.setState(prevState => ({
      linesBegin: prevState.linesBegin.map(
        el => el.id === componentId ? 
        ({id: componentId, linesBegin: el.linesBegin.concat([lineId])}) : el)
      })
    )
  }

const addLineEnd = (componentId, lineId) => {
    this.setState(prevState => ({
      linesEnd: prevState.linesEnd.map(
        el => el.id === componentId ? 
        ({id: componentId, linesEnd: el.linesEnd.concat([lineId])}) : el)
      })
    )
  }
const addLineHandler = () => {
    console.log(this);
window.addEventListener("keydown", ev => {
        if (ev.keyCode === 67) {

            let howManyClicked = 0;
            // console.log("dodaje linie");
            this.createNewLine();
              const setupLineHandler = (ev) => {
                howManyClicked++;
                if (howManyClicked < 2) {
                  this.addLineBegin(ev.target.id, this.state.currentLineId);
                //  console.log("click" , howManyClicked);
                } else {
                  this.addLineEnd(ev.target.id, this.state.currentLineId);
                  // console.log("dismount click");
                  this.setLineVisible(this.state.currentLineId);
                  this.state.playgroundNodes.forEach(element => {
                    element.el.removeEventListener("click", setupLineHandler, false);
                  })
                }
              }
              this.state.playgroundNodes.forEach(element => {
             
                element.el.addEventListener("click", setupLineHandler);
              });
        };
      });
    }
export default () => {addLineHandler()};