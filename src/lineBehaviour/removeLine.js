
import { unsetLineVisible } from './switchLineVisible';

const removeLine = (id, componentThis) => 
{
    componentThis.setState(prevState => ({
        lines: prevState.lines.map((el,ind) => ind === id ? [{posX:0, posY:0}, {posX:0, posY:0}] : el),
        lineNodes: prevState.lineNodes.map((el, ind) => ind === id ? null : el),
    }));
    unsetLineVisible(id, componentThis);
}

export default removeLine;