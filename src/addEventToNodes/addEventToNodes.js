const addEventToNodes = (evt, nodes, func) => {
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener(evt, func, true);
    }
};

export default addEventToNodes;
