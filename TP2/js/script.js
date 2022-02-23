'use strict';
// ! Tableau de texte
const tableauText = ["Mon Premier",
    "Mon Deuxième",
    "Mon Troisème",
    "Mon Quatrième"
];
// !création et récupération des éléments
// todo  cadre
cadre = document.getElementById('cadre');
// todo mes 2 boîtes
const divGauche = document.getElementById('divGauche');
const divDroite = document.getElementById('divDroite');
const theMobileText0 = document.createElement('p');
const theMobileText1 = document.createElement('p');
const theMobileText2 = document.createElement('p');
const theMobileText3 = document.createElement('p');
// todo Ajout d'attribut et de texte
// * Ajout de texte
theMobileText0.innerText = tableauText[0];
theMobileText1.innerText = tableauText[1];
theMobileText2.innerText = tableauText[2];
theMobileText3.innerText = tableauText[3];
// * Ajout de class
theMobileText0.setAttribute('class', 'theMobileText');
theMobileText1.setAttribute('class', 'theMobileText');
theMobileText2.setAttribute('class', 'theMobileText');
theMobileText3.setAttribute('class', 'theMobileText');
// * Ajout d 'id
theMobileText0.setAttribute('id', 'theMobileText0');
theMobileText1.setAttribute('id', 'theMobileText1');
theMobileText2.setAttribute('id', 'theMobileText2');
theMobileText3.setAttribute('id', 'theMobileText3');
// * Lier les paragraphes à leur parent 
divGauche.appendChild(theMobileText0);
divGauche.appendChild(theMobileText1);
divGauche.appendChild(theMobileText2);
divGauche.appendChild(theMobileText3);
// todo mes paragraphes
const mesParagraphes = document.querySelectorAll('p');
// todo mes 2 boutons 
const btnMoveL2R = document.getElementById('btnMoveL2R');
const btnMoveR2L = document.getElementById('btnMoveR2L');
//! fonction qui permet de savoir si au moins un paragraphe est séléctionné
function isSelected() {
    let estSelectionne = false;
    val0 = theMobileText0.classList.contains('selected');
    val1 = theMobileText1.classList.contains('selected');
    val2 = theMobileText2.classList.contains('selected');
    val3 = theMobileText3.classList.contains('selected');
    if (val0 || val1 || val2 || val3) {
        estSelectionne = true;
    }
    return estSelectionne;
}
// ! MÉGA FONCTION  POUR DÉPLACER LES ÉLÉMENTS 
(() => {
    mesParagraphes.forEach(monPara => {
        monPara.addEventListener('click', function() {
            monPara.classList.toggle("selected");
        });
    });
    // !=============================?==============================!
    // todo Event: déplacement de Gauche à Droite
    btnMoveL2R.addEventListener('click', () => {
        //! variables Collection de éléments HTML me permettant de savoir ceux sonnt séléctionné dans la boîte gauche
        let selectedFromLeft = document.querySelectorAll('#divGauche .selected');
        if (selectedFromLeft.length != 0) {
            if (divGauche.children.length != 0) {
                selectedFromLeft.forEach(theP => {
                    divDroite.appendChild(theP);
                    theP.setAttribute('class', 'theMobileText');
                });
            } else {
                // !gestion des actions impossibles
                cadre.setAttribute('class', 'cadre error');
                cadre.innerText = 'cette action est impossible';
                setTimeout(() => {
                    cadre.setAttribute('class', 'cadre ');
                    cadre.innerText = 'Déplacez des éléments';
                }, 1000);
            }
        } else {
            // !gestion des actions impossibles
            cadre.setAttribute('class', 'cadre error');
            cadre.innerText = 'cette action est impossible';
            setTimeout(() => {
                cadre.setAttribute('class', 'cadre ');
                cadre.innerText = 'Déplacez des éléments';
            }, 1000);
        }
    }); //fin événement
    // todo Event: déplacement de Droite à Gauche
    btnMoveR2L.addEventListener('click', () => {
        //! variables Collection de éléments HTML me permettant de savoir ceux sonnt séléctionné dans la boîte droite
        let selectedFromRight = document.querySelectorAll('#divDroite .selected');
        if (selectedFromRight.length != 0) {
            if (divDroite.children.length != 0) {
                selectedFromRight.forEach(theP => {
                    divGauche.appendChild(theP);
                    theP.setAttribute('class', 'theMobileText');
                });
            } else {
                // !gestion des actions impossibles
                cadre.setAttribute('class', 'cadre error');
                cadre.innerText = 'cette action est impossible';
                setTimeout(() => {
                    cadre.setAttribute('class', 'cadre ');
                    cadre.innerText = 'Déplacez des éléments';
                }, 1000);
            }
        } else {
            // !gestion des actions impossibles
            cadre.setAttribute('class', 'cadre error');
            cadre.innerText = 'cette action est impossible';
            setTimeout(() => {
                cadre.setAttribute('class', 'cadre ');
                cadre.innerText = 'Déplacez des éléments';
            }, 1000);
        }
    }); //fin événement
})();