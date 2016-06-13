const setTargetDisplay = (el, displayType) => {
    const element = el;

    if (displayType) {
        element.style.display = displayType.trim();
    } else if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }

    return element;
};

export default setTargetDisplay;
