// a function who remove a note
function removeNote(idRemove) {
    const elementToRemove = document.getElementById(idRemove);
    const parentOfElement = elementToRemove.parentNode;
    parentOfElement.removeChild(elementToRemove);
}



// fonction anonyme pour gérer toutes les cartes et leurs fonctionnalités
(() => {

    // !AJOUT D'UN NOUVEL NOTE
    const addNote = document.getElementById('addNote');
    let i = 0;
    addNote.addEventListener('click', () => {

        i++;
        // ! CRÉATION DES COMPOSANTS DE LA NOTE
        // todo récupération du bag de notes
        const noteContainer = document.getElementById('noteContainer');
        // todo création du cadre de la note
        const note = document.createElement('div');
        // ! CRÉATION DU CADRE DU MENU
        const noteMenu = document.createElement('div');
        // * création de l'item éditer
        const editNote = document.createElement('span');
        const editNoteImage = document.createElement('i');
        // * création de l'item éditer
        const deleteNote = document.createElement('span');
        const deleteNoteImage = document.createElement('i');
        // ! THE NOTE IT SELF
        const noteText = document.createElement('div');
        const addText = document.createElement('textarea');


        // ! ORGANISATION DES ÉLÉMENTS
        noteContainer.appendChild(note);
        // * ajout du menu dans la note
        note.appendChild(noteMenu);
        // *ajout de noteText dans la note
        note.appendChild(noteText);
        // * ajout des icones dans les span
        editNote.appendChild(editNoteImage);
        deleteNote.appendChild(deleteNoteImage);
        // * ajout des span dans le menu
        noteMenu.appendChild(editNote);
        noteMenu.appendChild(deleteNote);

        // *ajout du textearrea dans  noteText
        noteText.appendChild(addText);



        // ! ajout de style à mes éléments
        // *note
        note.setAttribute('class', 'note');
        // todo noteMenu
        noteMenu.setAttribute('class', 'noteMenu');
        // *editNote
        editNote.setAttribute('class', 'editNote');
        editNote.setAttribute('id', `editNote${i}`);
        editNoteImage.setAttribute('class', 'fa-solid fa-pen-to-square');
        // *deleteNote
        deleteNote.setAttribute('class', 'deleteNote');
        deleteNote.setAttribute('id', `deleteNote${i}`);
        deleteNoteImage.setAttribute('class', 'fa-solid fa-trash-can');
        // todo noteText
        // *noteText
        noteText.setAttribute('id', `noteText${i}`);
        noteText.setAttribute('class', 'noteText');
        // *addText
        addText.setAttribute('id', `addText${i}`);
        addText.setAttribute('class', 'addText');

        // ! supprimer la note
        deleteNote.addEventListener('click', () => {
            noteContainer.removeChild(note);
        });

        // !editer la note
        editNote.addEventListener('click', () => {
            addText.toggleAttribute('disabled');
            addText.focus();
        });

    }, false);
})();