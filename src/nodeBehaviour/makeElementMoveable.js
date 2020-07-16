
import moveWithMouse from './moveWithMouse';


const makeElementMoveable = (componentThis) => {
    const diodeDOMel = document.querySelector(`div#${componentThis.id}`);
    moveWithMouse(diodeDOMel, componentThis.updatePosition);
    componentThis.props.add({el: diodeDOMel, id: componentThis.id });
}

export default makeElementMoveable;