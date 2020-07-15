
import removeLine from "./removeLine";


const removeLineListener = (componentThis) => 
{
    window.addEventListener("keydown", ev => {
        if (ev.keyCode === 82) {
            // console.log("usuwam linie");
                const listenerHandler = (ev) => {
                    // console.log("usuwam linie o id", el.id);
                    removeLine(parseInt(ev.target.id.substring(1)), componentThis);
                    componentThis.state.lineNodes.forEach(element => {
                    if (element)
                        element.removeEventListener("click", listenerHandler, false);
                    });
                }
                componentThis.state.lineNodes.forEach(el => {
                    if (el)
                        el.addEventListener("click", listenerHandler);
                })
        }
    })
}

export default removeLineListener;