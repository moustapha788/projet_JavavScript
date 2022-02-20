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
// !fonction non utilisée mais qui permet récupérer la valeur sasie par l'utilisateur
function getPasswordLenght(idInputPassword) {
    const inputPassword = document.getElementById(idInputPassword);
    return inputPassword.value;
}
// !fonction non utilisée mais qui permet de savoir si une valeur est un entier ou non
function estEntier(value) {
    if (Number.isInteger(value)) {
        if (value > 0) {
            return true;
        }
    } else {
        return false;
    }
}