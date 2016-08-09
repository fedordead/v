/**
 * Determines if an element is viewport safe by checking against the height of the viewport.
 *
 * @param {element} [el] - Testable element
 * @return {object} Returns an object which tells you which directions will be safe. Provides
 * details of opposite which can be used as a fallback direction.
 */
const viewportSafe = el => {
    const element = el.getBoundingClientRect();

    const page = {
        top: 0,
        bottom: window.innerHeight,
        left: 0,
        right: window.innerWidth
    };

    const fitsInsideTopOfScreen = element.top >= page.top;
    const fitsInsideBottomOfScreen = element.bottom <= page.bottom;
    const fitsInsideLeftOfScreen = element.left >= page.left;
    const fitsInsideRightOfScreen = element.right <= page.right;

    return {
        top: {
            hasSpace: fitsInsideTopOfScreen,
            opposite: 'bottom'
        },
        right: {
            hasSpace: fitsInsideRightOfScreen,
            opposite: 'left'
        },
        bottom: {
            hasSpace: fitsInsideBottomOfScreen,
            opposite: 'top'
        },
        left: {
            hasSpace: fitsInsideLeftOfScreen,
            opposite: 'right'
        }
    };
};


export default viewportSafe;

