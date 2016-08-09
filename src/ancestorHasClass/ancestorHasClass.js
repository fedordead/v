const ancestorHasClass = (el, className) => {
    if(el === document.body) {
        return false;
    }
    if(!el.classList.contains(className)) {
        return ancestorHasClass(el.parentNode, className)
    }
    return true;
}

export default ancestorHasClass;
