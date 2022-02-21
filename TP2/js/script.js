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
theMobileText0.innerText = "Mon Premier";
theMobileText1.innerText = "Mon Deuxième";
theMobileText2.innerText = "Mon Troisème";
theMobileText3.innerText = "Mon Quatrième";
// * Ajout de class
theMobileText0.setAttribute('class', 'theMobileText');
theMobileText1.setAttribute('class', 'theMobileText');
theMobileText2.setAttribute('class', 'theMobileText');
theMobileText3.setAttribute('class', 'theMobileText');
// * Ajout d 'id
theMobileText0.setAttribute('id', 'theMobileText0');
theMobileText1.setAttribute('id', 'theMobileText2');
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
// ! fonction à flèche pour déplacer les éléments 
(() => {
    for (let i = 0; i < mesParagraphes.length; i++) {
        // todo Event: clique sur mon un des paragraphe
        mesParagraphes[i].addEventListener('click', function() {
            this.classList.toggle("selected");
            const surLaVoie = document.getElementsByClassName('selected');
            let lesMeilleurs = [];
            lesMeilleurs.push(surLaVoie);
        });
        // todo Event: déplacement de Gauchge à Droite
        btnMoveL2R.addEventListener('click', () => {
            if (divGauche.children.length != 0) {
                const selected = document.querySelector('.selected');
                divDroite.appendChild(selected);
                selected.setAttribute('class', 'theMobileText');
            } else {
                if (i == 0) {
                    // !gestion des actions impossibles
                    cadre.setAttribute('class', 'cadre error');
                    cadre.innerText = 'cette action est impossible';
                    setTimeout(() => {
                        cadre.setAttribute('class', 'cadre ');
                        cadre.innerText = 'Déplacez des éléments';
                    }, 1000);
                }
            }
        });
        // !
        // todo Event: déplacement de Gauchge à Droite
        btnMoveR2L.addEventListener('click', () => {
            if (divDroite.children.length != 0) {
                const selected = document.querySelector('.selected');
                divGauche.appendChild(selected);
                selected.setAttribute('class', 'theMobileText');

            } else {
                if (i == 0) {
                    // !gestion des actions impossibles
                    cadre.setAttribute('class', 'cadre error');
                    cadre.innerText = 'cette action est impossible';
                    setTimeout(() => {
                        cadre.setAttribute('class', 'cadre ');
                        cadre.innerText = 'Déplacez des éléments';
                    }, 1000);
                }
            }
        });
    } /* fin de ma boucle for */
})();