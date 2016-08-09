/**
 * Determines which direction is most appropriate to render an element.  Typically composed with
 * `isInView`.
 *
 * @param {object} [directions] - Each direction with an indication of whether space is available
 * and what it's opposite is.
 * @param {string} [desiredPosition] - Preferred direction to render
 * @return {string} Returns a string with the most suitable direction
 *
 * @todo  increase options to include combos like top-left, bottom-right etc
 */
const getBestViewPortDirection = (
    directions,
    desiredPosition
) => {

    let position;

    if(directions[desiredPosition].hasSpace) {
        position = desiredPosition;
    } else if (directions[directions[desiredPosition].opposite].hasSpace) {
        position = directions[desiredPosition].opposite;
    } else {
        // this will potentially duplicate a previous check of a direction
        // but as the max is only 4 this won't be a performance problem.
        for (let prop in directions) {
            if(directions[prop].hasSpace) {
                return prop;
            }
        }
    }

    return position || desiredPosition;
};


export default getBestViewPortDirection;
