

import createNewLine from './createNewLine';

import {addLineBegin, addLineEnd} from './addLinePoint';

import { setLineVisible } from './switchLineVisible';

const addLineListener = (componentThis) => {

    window.addEventListener("keydown", ev => {
        if (ev.keyCode === 67) {

            let howManyClicked = 0;
            // console.log("dodaje linie");
            createNewLine(componentThis);
              const setupLineHandler = (ev) => {
                howManyClicked++;
                if (howManyClicked < 2) {
                  addLineBegin(ev.target.id, componentThis.state.currentLineId, componentThis);
                //  console.log("click" , howManyClicked);
                } else {
                  addLineEnd(ev.target.id, componentThis.state.currentLineId, componentThis);
                  // console.log("dismount click");
                  setLineVisible(componentThis.state.currentLineId, componentThis);
                  componentThis.state.playgroundNodes.forEach(element => {
                    element.el.removeEventListener("click", setupLineHandler, false);
                  })
                }
              }
              componentThis.state.playgroundNodes.forEach(element => {
             
                element.el.addEventListener("click", setupLineHandler);
              });
        };
      });
}

export default addLineListener;