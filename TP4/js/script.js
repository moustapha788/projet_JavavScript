/*  */
// ?======================variables======================
/* ==================
 ==============
 ==========
 ======
 ==
 */
const dataQuiz = [{
        question: "Quel est le meilleur langage de programation en 2022",
        prop1: "Java",
        prop2: "C",
        prop3: "Python",
        prop4: "JavaScript",
        prop5: "PHP",
        correction: "prop3"
    },
    {
        question: "Ou se trouve le siège de l'ODC du Sénégal",
        prop1: "Matam",
        prop2: "Dakar",
        prop3: "Tamba",
        prop4: "Sédhiou",
        prop5: "Touba",
        correction: "prop2"
    },
    {
        question: "Qui est le vainqueur de la dernière  édition de la CAN",
        prop1: "Sénégal",
        prop2: "Mali",
        prop3: "Japon",
        prop4: "Égypte",
        prop5: "Jamaïque",
        correction: "prop1"
    },
    {
        question: "Qui est l'actuel meilleur joueur de la CAN",
        prop1: "Salah",
        prop2: "Messi",
        prop3: "Mané",
        prop4: "Macky Sall",
        prop5: "PHP",
        correction: "prop3"
    },
    {
        question: "Quelle est la capitale du sénégal",
        prop1: "Guédiawaye",
        prop2: "Saint-Louis",
        prop3: "Paris",
        prop4: "Abidjan",
        prop5: "Dakar",
        correction: "prop5"
    }, {
        question: "Comment s'appelle le thioro de Souleymane Diallo.Dévine!",
        prop1: "Aby",
        prop2: "autre",
        prop3: "Fatimata",
        prop4: "Khady",
        prop5: "Oulimata",
        correction: "prop3"
    }
];
// console.log(dataQuiz.shuffle());
// ! Variables getting by 
const quizOrder = document.getElementById('quizOrder');
// todo _ mainHeader :direct parent of id[quizCard]
const mainHeader = document.getElementById('mainHeader');
// todo _ quizCard :direct parent of id[libele,questions,cadreReponse]
const quizCard = document.getElementById('quizCard');
// todo questions
const questions = document.getElementById('questions')
    // todo question
const question = document.getElementById('libQuestion');
// todo _ propositions : return an array which name  is propositions
const propositions = document.querySelectorAll('.questions input ');
// todo quizLabel
const quizLabel1 = document.getElementById('quizLabel1');
const quizLabel2 = document.getElementById('quizLabel2');
const quizLabel3 = document.getElementById('quizLabel3');
const quizLabel4 = document.getElementById('quizLabel4');
const quizLabel5 = document.getElementById('quizLabel5');
/* 
nextQuiz : suivant
cadreReponse : score 
newQuiz : New game 
*/ // todo nextQuiz - cadreReponse: 
const nextQuiz = document.getElementById('nextQuiz');
const cadreReponse = document.getElementById('cadreReponse');
const reponse = document.getElementById('reponse');
const newQuiz = document.getElementById('newQuiz');
// ?======================functions======================
/* ==================
 ==============
 ==========
 ======
 ==
 */
/*
 ****
 ***
 ****
 */
// todo initialisation 
let score = 0;
let numberQuizCourant = 0;
// 
chargerLeQuiz();
// ! fonction qui utilise le IIFE et qui permet de charger le quiz
function chargerLeQuiz() {
    deselectionner();
    quizOrder.innerText = `Question N° ${numberQuizCourant + 1} sur ${dataQuiz.length} `;
    const quizCourant = dataQuiz[numberQuizCourant];
    question.innerText = quizCourant.question;
    quizLabel1.innerText = quizCourant.prop1;
    quizLabel2.innerText = quizCourant.prop2;
    quizLabel3.innerText = quizCourant.prop3;
    quizLabel4.innerText = quizCourant.prop4;
    quizLabel5.innerText = quizCourant.prop5;
};
// ! fonction qui permet de désélectionner tous les éléments cochés si quizLabel3'est le cas
function deselectionner() {
    propositions.forEach(prop => {
        prop.checked = false;
        prop.nextElementSibling.style.color = 'black';

    });
}
// !fonction qui permet de faire une correction
function correction(rep) {
    let correct = document.getElementById(rep);
    if (rep == dataQuiz[numberQuizCourant].correction) {
        correct.nextElementSibling.style.color = 'green';
    } else {
        correct.nextElementSibling.style.color = 'red';
    }
}

// ! fonction qui permet de récupérer La Réponse Cochée
function recupereLaReponseCoche() {
    let laReponse;
    propositions.forEach(prop => {
        if (prop.checked) {
            laReponse = prop.id;
        }
    });
    return laReponse;
}
// ?======================EventHandler======================
/* ==================
 ==============
 ==========
 ======
 ==
 */
nextQuiz.addEventListener('click', () => {
    let saReponse = recupereLaReponseCoche();
    if (saReponse) {
        if (saReponse == dataQuiz[numberQuizCourant].correction) {
            score++;
        }
        correction(saReponse);
        // !passe au quiz suivant si c'est pas fini
        numberQuizCourant++;
        if (numberQuizCourant < dataQuiz.length) {
            setTimeout(chargerLeQuiz, 500);
        } else {
            quizOrder.innerText = "Merci d'avoir joué";
            quizCard.removeChild(questions);
            quizCard.removeChild(question);
            cadreReponse.setAttribute('class', 'cadreReponse');
            let scoreFinal = Math.floor(100 * (score / dataQuiz.length));
            nextQuiz.innerText = "Quiz terminé";
            nextQuiz.setAttribute('class', 'nextQuiz termine');
            const appreciations = performances(scoreFinal);
            reponse.innerText = `Vous avez trouvé ${scoreFinal}%  des questions\n` + appreciations;
            newQuiz.setAttribute('onclick', "location.reload()");
            dataQuiz.reverse();
        }
    }
});

//! fonctions qui permet d'attribuer une appréciations en fonction du score obtenue (en terme de %)
function performances(score) {
    if (0 <= score && score <= 20) {
        appreciations = "Très mal! N'empêche réssaye encore!";
    } else if (score < 50) {
        appreciations = 'Mal! Mais ne laissez pas tomber';
    } else if (score == 50) {
        appreciations = 'Passable! Amériolez-vous et n';
    } else if (score <= 60) {
        appreciations = 'Abien! je sais que vous pouvez faire mieux ';
    } else if (score <= 80) {
        appreciations = 'Bien! quelques pas pour arriver au dessus';
    } else if (score < 100) {
        appreciations = 'trés! quelques efforts encore pour arriver au sommet';
    } else {
        appreciations = 'Excellent! On dirait une bibliothèque';
    }
    return appreciations;
}