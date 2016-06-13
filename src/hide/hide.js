import defaults from '../defaults/index.js';

const hide = el => {
    if (el.classList.contains(defaults.showClassName)) {
        el.classList.remove(defaults.showClassName);
    }
    el.classList.add(defaults.hideClassName);
};

export default hide;
