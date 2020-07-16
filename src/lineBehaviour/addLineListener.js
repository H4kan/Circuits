

import createNewLine from './createNewLine';

import {addLineBegin, addLineEnd} from './addLinePoint';

import { setLineVisible } from './switchLineVisible';
import removeLine from './removeLine';

const addLineListener = (componentThis) => {

    window.addEventListener("keydown", ev => {
        if (ev.keyCode === 67) {

            let howManyClicked = 0;
            // console.log("dodaje linie");
            createNewLine(componentThis);
              const setupLineHandler = (ev) => {
                howManyClicked++;
                if (howManyClicked < 2) {
                  addLineBegin(ev.target.id, componentThis.currentLineId, componentThis);
                  componentThis.lastClickedId = ev.target.id;
                //  console.log("click" , howManyClicked);
                } else {
                  if (componentThis.lastClickedId === ev.target.id) {
                    removeLine(componentThis.currentLineId, componentThis);
                    console.log("same component chosen twice")
                  } else {
                  addLineEnd(ev.target.id, componentThis.currentLineId, componentThis);
                  // console.log("dismount click");
                  setLineVisible(componentThis.currentLineId, componentThis);
                  }
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