const each = (nodeList, callback, scope) => {
    for (let i = 0; i < nodeList.length; i++) {
        callback.call(scope, i, nodeList[i]);
    }
};

export default each;
