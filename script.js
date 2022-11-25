class Utilisateur {
    constructor(
        nom,
        prenom,
        age,
        categorie
    ){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.categorie = categorie;
    }
}

let adversaire = new Utilisateur("Dupont","Gerard",29,"Poid Lourd");

let utilisateur = new Utilisateur("Engelaere","Alexis",24,"Poid plume");

let myScore = 0;
let myAdversaireScore = 0;
let tabChoice = ["Pierre","Feuille","Ciseaux"];
let num = [1,2,3];

function calculeWinner(myChoice, advChoice) {
    if (myChoice === advChoice) {
        return "Egalité !";
    }

    if (myChoice === "Pierre") {
        if (advChoice === "Feuille") {
            myAdversaireScore++;
            return "L'ordinateur a gagné !";
        } else {
            myScore++;
            return "J'ai gagné !";
        }
    }

    if (myChoice === "Feuille") {
        if (advChoice === "Ciseaux") {
            myAdversaireScore++;
            return "L'ordinateur a gagné !";
        } else {
            myScore++;
            return "J'ai gagné !";
        }
    }

    if (myChoice === "Ciseaux") {
        if (advChoice === "Pierre") {
            myAdversaireScore++;
            return "L'ordinateur a gagné !";
        } else {
            myScore++;
            return "J'ai gagné !";
        }
    }
}

// console.log(calculeWinner("Ciseaux","Pierre"));
// console.log(calculeWinner("Ciseaux","Pierre"));
// console.log(calculeWinner("Ciseaux","Pierre"));
// console.log(myScore);
// console.log(myAdversaireScore);

function checkFinalWinner(myFunctionScore, myFunctionAdversaireScore) {
    if (myFunctionScore === 3) {
        return "J'ai gagné la partie ! ";
    } else if (myFunctionAdversaireScore === 3) {
        return "L'ordinateur a gagné la partie !";
    } else {
        return "Personne n'a encore gagné !";
    }
}


let pierreButton = document.getElementById('pierre');
pierreButton.onclick = function () {
    const advChoice = generateAdversaireChoice(tabChoice);
    console.log(advChoice);
    const resultManche = calculeWinner("Pierre", advChoice);
    console.log("myScore " + myScore);
    console.log("myAdversaireScore " + myAdversaireScore);
    const resultJeu = checkFinalWinner(myScore, myAdversaireScore);
    console.log(resultJeu);
} 

let feuilleButton = document.getElementById('feuille');
feuilleButton.onclick = function () {
    const advChoice = generateAdversaireChoice(tabChoice);
    const resultManche = calculeWinner("Feuille", advChoice);
    console.log("myScore " + myScore);
    console.log("myAdversaireScore " + myAdversaireScore);
    const resultJeu = checkFinalWinner(myScore, myAdversaireScore);
    console.log(resultJeu);
}


function generateAdversaireChoice(myFunctionTabChoice) {
    let randNumber = Math.floor(Math.random()*myFunctionTabChoice.length);
    let advChoice = myFunctionTabChoice[randNumber];
    return advChoice;
}