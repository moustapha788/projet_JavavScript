// ?======================const======================
/* ==================
 ==============
 ==========
 ======
 ==
 */
// TODO : Récupération de mes élémént pour créer mon DOM
// !ecran
// *ecran
let ecran = document.getElementById('ecran');
// *tooltip copy
const tooltip = document.getElementById('tooltip');
// !caractéristiques du mot de passe 
// *passwordLenght
const passwordLenght = document.getElementById('passwordLenght');
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
// !fonction qui permet de générer un tableau de caractères qui sont très spéciales
/* 
spé : START 33 - END 47
0-9 : START 48 - END 57
A-Z : START 65 - END 90
a-z : START 97 - END 122
 */
function generator(start, end) {
    let tabGenerated = ''; // ! Initialisation
    for (let i = start; i < end; i++) {
        tabGenerated += String.fromCharCode(i);
    }
    return tabGenerated.split('');
}
// !fonction qui permet de savoir si un input de type chexbox est coché ou pas afin :
function isChecked(idInput) {
    idInput = document.getElementById(idInput);
    return idInput.checked;
}
// !fonction qui permet de renvoyer un tableau suivant que l'élémént chexbox est coché au non
function returnItemTrousseau(idInput, tabChar) {
    tabData = [];
    if (isChecked(idInput)) {
        tabData = tabChar;
    }
    return tabData;
}
// !fonction qui permet récupérer la valeur sasie par l'utilisateur
function getPasswordLenght(idInputPassword) {
    const inputPassword = document.getElementById(idInputPassword);
    return inputPassword.value;
}
// !fonction qui permet de savoir si une valeur est un entier ou non
function estEntier(value) {
    if (Number.isInteger(value)) {
        if (value > 0) {
            return true;
        }
    } else {
        return false;
    }
}
// ! fonction qui permet de générer un mot de passe
function genererMotDePasse() {
    // todo Initialisation de mon trousseau de jetons(chiffres ,.caractères spéciaux...)
    let trousseau = [];
    // uppercase
    const T1 = returnItemTrousseau('upperCaseValue', dataUpperChar);
    // lowercase
    const T2 = returnItemTrousseau('lowerCaseValue', dataLowerChar);
    // numeric
    const T3 = returnItemTrousseau('numericalValue', dataNumerik);
    // specialCharCode
    const T4 = returnItemTrousseau('specialCharsetalue', dataCharCode);
    // todo mon nouveau trousseau de jetons(chiffres ,.caractères spéciaux...)
    trousseau = trousseau.concat(T1, T2, T3, T4);
    // ! si l'utilisateur ne coche aucun élément n'éxécute ne continue pas
    if (trousseau.length === 0) {
        ecran = document.getElementById('ecran');
        ecran.value = 'Générateur de mot de passe';
        alert('vérifiez que vous  avez sélectionné des critères pour le mot de passe ')
        return;
    }
    if (!(passwordLenght.value)) {
        alert("la valeur ne peut être vide et doit être un entier");
    } else {
        // !Génération du mot de passe
        let passwordGenerate = '';
        for (let i = 0; i < passwordLenght.value; i++) {
            let pos = Math.floor((Math.random()) * trousseau.length);
            passwordGenerate += trousseau[pos];
        }
        // !copier le mot de passe générer dans l'écran
        ecran.value = passwordGenerate;
        // !evénement copier
        tooltip.setAttribute('class', 'tooltip');
        generer.innerHTML = 'mot de passe généré';
        setTimeout(() => { generer.innerHTML = 'Générer le mot de passe'; }, 1000);
        tooltip.addEventListener('click', () => {
            // ! sélection puis copie de mot de passe
            ecran.select();
            document.execCommand("copy");
        });
    }
}
// ?======================Events======================
/* ==================
 ==============
 ==========
 ======
 ==
 */ // !evénement générer
generer.addEventListener('click', genererMotDePasse);