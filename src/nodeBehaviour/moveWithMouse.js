
const moveWithMouse = (element, updatePosFunc) => {
        const mouseMoveHandler = (ev) => 
        {
            updatePosFunc([ev.clientY, ev.clientX]);
        };
        const mouseUpHandler = (ev) => {
            window.removeEventListener("mousemove", mouseMoveHandler, false);
            window.removeEventListener("mouseup", mouseUpHandler, false);
        }
        element.addEventListener("mousedown", (ev) => {
            window.addEventListener("mousemove", mouseMoveHandler);
            window.addEventListener("mouseup", mouseUpHandler);
        });
    }

export default moveWithMouse;