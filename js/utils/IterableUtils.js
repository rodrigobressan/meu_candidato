/**
 * Function to check wheter a given object is iterable or not
 * @param obj the object to be checked
 * @returns {boolean} if it's iterable
 */
function isIterable(obj) {
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}
