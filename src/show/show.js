import defaults from '../defaults/index.js';

const show = el => {
    if (el.classList.contains(defaults.hideClassName)) {
        el.classList.remove(defaults.hideClassName);
    }
    el.classList.add(defaults.showClassName);
};

export default show;
