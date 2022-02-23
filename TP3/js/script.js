// ?======================const======================
/* ==================
 ==============
 ==========
 ======
 ==
 */
// TODO : Récupération de mes élémént pour créer mon DOM
// !cadran
const cadran = document.getElementById('cadran');
// !ecran
// *ecran
let ecran = document.getElementById('ecran');
// *tooltip copy
const tooltip = document.getElementById('tooltip');
// !caractéristiques du mot de passe 
// *passwordLenght
const passwordLenght = document.getElementById('passwordLenght');
// *error
const error = document.getElementById('error');
const mesSelect = document.querySelectorAll('#features input[type="checkbox"]')
    // *upperCaseValue
const upperCaseValue = document.getElementById('upperCaseValue');
// *lowerCaseValue
const lowerCaseValue = document.getElementById('lowerCaseValue');
// *numericalValue
const numericalValue = document.getElementById('numericalValue');
// *specialCharsetalue
const specialCharsetalue = document.getElementById('specialCharsetalue');
// !generer
const generer = document.getElementById('generer');

// ?======================data======================
/* ==================
 ==============
 ==========
 ======
 ==
 */
// !liste de l'alphabet français et des chiffres de 0 à 9
var alphabetFr = "azertyuiopqsdfghjklmwxcvbn";
var numbers = "0123456789";
// !listes de tous les caractères spéciaux pris en compte dans mon script
var charCode = "!@#$%^&*-=+\|:;',.></?°[]{}§¨~`";
// !tableaux de données
var dataUpperChar = alphabetFr.toUpperCase().split('');
var dataLowerChar = alphabetFr.split('');

var dataNumerik = numbers.split('');
var dataCharCode = charCode.split('');
// ?======================function======================
/* ==================
 ==============
 ==========
 ======
 ==
 */
// !fonction qui permet de savoir si un input de type chexbox est coché ou non  :
function isChecked(idInput) {
    idInput = document.getElementById(idInput);
    return idInput.checked;
}
// !fonction qui permet de renvoyer un tableau suivant que l'élémént chexbox est coché ou non
function returnItemTrousseau(idInput, tabChar) {
    let tabData = [];
    if (isChecked(idInput)) {
        tabData = tabChar;
    }
    return tabData;
}






// si aucun critère est coché alors alors le bojuton
upperCaseValue.addEventListener('click', () => {
    if (isChecked('upperCaseValue') || isChecked('lowerCaseValue') || isChecked('numericalValue') || isChecked('specialCharsetalue')) {
        generer.setAttribute('class', 'generer');
    } else {
        generer.setAttribute('class', 'generer disabled');
    }
});
lowerCaseValue.addEventListener('click', () => {
    if (isChecked('upperCaseValue') || isChecked('lowerCaseValue') || isChecked('numericalValue') || isChecked('specialCharsetalue')) {
        generer.setAttribute('class', 'generer');
    } else {
        generer.setAttribute('class', 'generer disabled');
    }
});
numericalValue.addEventListener('click', () => {
    if (isChecked('upperCaseValue') || isChecked('lowerCaseValue') || isChecked('numericalValue') || isChecked('specialCharsetalue')) {
        generer.setAttribute('class', 'generer');
    } else {
        generer.setAttribute('class', 'generer disabled');
    }
});
specialCharsetalue.addEventListener('click', () => {
    if (isChecked('upperCaseValue') || isChecked('lowerCaseValue') || isChecked('numericalValue') || isChecked('specialCharsetalue')) {
        generer.setAttribute('class', 'generer');
    } else {
        generer.setAttribute('class', 'generer disabled');
    }
});
// 




// ! fonction qui permet de générer un mot de passe
function genererMotDePasse() {
    // todo Initialisation de mon trousseau de jetons(chiffres ,.caractères spéciaux...)
    let trousseau = [];
    // * uppercase
    const T1 = returnItemTrousseau('upperCaseValue', dataUpperChar);
    // * lowercase
    const T2 = returnItemTrousseau('lowerCaseValue', dataLowerChar);
    // * numeric
    const T3 = returnItemTrousseau('numericalValue', dataNumerik);
    // * specialCharCode
    const T4 = returnItemTrousseau('specialCharsetalue', dataCharCode);
    // todo mon nouveau trousseau de jetons(chiffres ,.caractères spéciaux...)
    trousseau = trousseau.concat(T1, T2, T3, T4);

    // ! si l'utilisateur ne coche aucun élément n'éxécute ne continue pas
    if (trousseau.length === 0) {
        tooltip.setAttribute('class', 'inaccessible');
        //  ! générer dans l'écran
        ecran.value = 'Aucun critère choisi ';
        ecran.setAttribute('class', 'ecran color_red');
        setTimeout(() => {
            ecran.setAttribute("class", 'ecran')
            ecran.value = 'Générateur de mot passe ';
        }, 2000);
        //  ! générer en bas
        error.setAttribute('class', 'error');
        error.innerHTML = 'vérifiez que vous  avez sélectionné des critères pour le mot de passe ';
        setTimeout(() => {
            error.setAttribute("class", 'inaccessible')
        }, 2000);
        return;
    }
    if (!(passwordLenght.value) || trousseau.length == 0) {
        tooltip.setAttribute('class', 'inaccessible');
        //  ! générer dans l'écran
        ecran.value = 'taille mot de passe vide ou invalide ';
        ecran.setAttribute('class', 'ecran color_red');
        setTimeout(() => {
            ecran.value = 'Générateur de mot passe ';
            ecran.setAttribute("class", 'ecran');
        }, 2000);
        //  ! générer en bas
        error.setAttribute('class', 'error');
        error.innerHTML = 'la valeur ne peut être vide et doit être un entier';
        setTimeout(() => {
            error.setAttribute("class", 'inaccessible');
        }, 2000);
    } else {
        if ((passwordLenght.value >= 5) && (passwordLenght.value <= 20)) {

            // !Génération du mot de passe
            let passwordGenerate = '';
            for (let i = 0; i < passwordLenght.value; i++) {
                let pos = Math.floor((Math.random()) * trousseau.length);
                passwordGenerate += trousseau[pos];
            }
            // !copier le mot de passe générer dans l'écran
            ecran.value = passwordGenerate;
            generer.innerHTML = 'mot de passe généré';
            generer.setAttribute("disabled", 'disabled');

            // !événement survole sur l'ecran
            ecran.addEventListener('mouseover', () => {
                // !evénement copier
                tooltip.setAttribute('class', 'tooltip');
                setTimeout(() => { generer.innerHTML = 'Générer le mot de passe'; }, 1000);
                tooltip.addEventListener('click', () => {
                    // ! sélection puis copie de mot de passe
                    ecran.select();
                    document.execCommand("copy");
                    this.setAttribute('class', 'inaccessible');
                });
            });
            setTimeout(() => {
                tooltip.addEventListener('mouseleave', () => {
                    ecran.blur();
                    generer.setAttribute('class', 'generer');
                });
            }, 2000)
        } else {
            //  ! générer dans l'écran
            ecran.value = 'Le mot de passe doit être compris entre 5 et 20';
            ecran.setAttribute('class', 'ecran color_red');
            ecran.style.fontSize = '1.75em';
            setTimeout(() => {
                ecran.value = 'Générateur de mot passe ';
                ecran.setAttribute("class", 'ecran');
                ecran.style.fontSize = '2.5em';
            }, 2000);
        }

    }
}
// ?======================Events======================
/* ==================
 ==============
 ==========
 ======
 ==
 */ // !evénement générer
console.log(mesSelect);
generer.addEventListener('click', genererMotDePasse);
/* document.addEventListener('load', () => {

}) */