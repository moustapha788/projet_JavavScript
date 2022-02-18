// a function who remove a note
function removeNote(idRemove) {
    const elementToRemove = document.getElementById(idRemove);
    const parentOfElement = elementToRemove.parentNode;
    parentOfElement.removeChild(elementToRemove);
}



// a function who create a note
function create(idParent) {
    const parent = getElementById(idParent);


}