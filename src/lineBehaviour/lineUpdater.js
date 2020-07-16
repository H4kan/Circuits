

const lineUpdater = (componentThis) => {
if (componentThis.state.linesBegin !== componentThis.props.lines[0] 
    || componentThis.state.linesEnd !== componentThis.props.lines[1])
    componentThis.setState({
        linesBegin: componentThis.props.lines[0],
        linesEnd: componentThis.props.lines[1]
    });
const pos = { posX: componentThis.state.position[0], 
    posY: componentThis.state.position[1] };
    componentThis.state.linesBegin.forEach((el) => {
    if (el.id === componentThis.id)
        el.linesBegin.forEach(ind => {
        if (componentThis.props.linesVisible[ind])
            (componentThis.props.updateLine[0])(pos, ind)
        });
})
componentThis.state.linesEnd.forEach((el) => {
    if (el.id === componentThis.id){
        el.linesEnd.forEach(ind => {
            if (componentThis.props.linesVisible[ind])
                (componentThis.props.updateLine[1])(pos, ind)
        });
    }
});
}

export default lineUpdater;