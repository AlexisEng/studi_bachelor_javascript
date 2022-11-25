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

// TODO -> opérateur sur les tableaux

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

console.log(calculeWinner("Ciseaux","Pierre"));
console.log(calculeWinner("Ciseaux","Pierre"));
console.log(calculeWinner("Ciseaux","Pierre"));
console.log(myScore);
console.log(myAdversaireScore);

function checkFinalWinner(myFunctionScore, myFunctionAdversaireScore) {
    if (myFunctionScore === 3) {
        return "J'ai gagné la partie ! ";
    } else if (myFunctionAdversaireScore === 3) {
        return "L'ordinateur a gagné la partie !";
    } else {
        return "Personne n'a encore gagné !";
    }
}

console.log(checkFinalWinner(myScore, myAdversaireScore));




let pierre = document.getElementById('pierre');
console.log(pierre);
pierre.onclick = function () {
    let randNumber = Math.floor(Math.random()*tabChoice.length); 
} 