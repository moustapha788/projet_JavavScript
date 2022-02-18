// ! Tableau de texte
const tableauText = ["Mon Premier",
    "Mon Deuxième",
    "Mon Troisème",
    "Mon Quatrième"
];

// !Récupération des éléments

// * mes 2 boîtes
const divGauche = document.getElementById('divGauche');
const divDroite = document.getElementById('divDroite');
// * mes paragraphes
const mesParagraphes = document.querySelectorAll('p');
// * mes 2 boutons 
const btnMoveL2R = document.getElementById('btnMoveL2R');
const btnMoveR2L = document.getElementById('btnMoveR2L');

// ! fonction à flèche pour déplacer les éléments 
(() => {
    for (let i = 0; i < mesParagraphes.length; i++) {
        // todo Event: clique sur mon un des paragraphe
        mesParagraphes[i].addEventListener('click', function() {
            this.classList.toggle("selected");
        });
        // todo Event: déplacement de Gauchge à Droite
        btnMoveL2R.addEventListener('click',
            () => {
                if (divGauche.children.length != 0) {
                    const selected = document.querySelector('.selected');
                    divDroite.appendChild(selected);
                    selected.setAttribute('class', 'theMobileText');
                } else {
                    if (i == 0) {
                        alert("this action is impossible");
                        i = 4;
                    }
                }
            });
        // todo Event: déplacement de Gauchge à Droite
        btnMoveR2L.addEventListener('click',
            () => {
                if (divDroite.children.length != 0) {
                    const selected = document.querySelector('.selected');
                    divGauche.appendChild(selected);
                    selected.setAttribute('class', 'theMobileText');
                } else {
                    if (i == 4) {
                        alert("this action is impossible");
                        i = 0;
                    }
                }
            });
    } /* fin de mon for */
})();