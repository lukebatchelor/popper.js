/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
export default function getParentNode(element) {
    if (element.parentNode) {
        return element.parentNode;
    }
    // we may be at a shadowDOM boundary, need to check .host but also need to make sure that .host
    // is an element as anchors can also have a .host property
    if (element.host && element.host instanceof HTMLElement) {
        return element.host;
    }
}
