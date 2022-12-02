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

    saluer() {
        alert("Bonjour, je me présente : " + this.prenom + " !");
    }
}


let adversaire = new Utilisateur("Dupont","Gerard",29,"Poid Lourd");
let utilisateur = new Utilisateur("Engelaere","Alexis",24,"Poid plume");

/*Partie bonus sur l'extension, l'héritage, la surchage, etc...*/
/*
class Master extends Utilisateur {
    #privateField;
    constructor(
        nom,
        prenom,
        age,
        categorie
    ){
        super(nom, prenom, age, categorie);
        this.#privateField = "Master";
    }

    saluer() {
        alert("Bonjour, je suis le master : " + this.prenom + " !");
    }
}


let master1 = new Master("Doe","John",55,"Poid plume");
master1.saluer();
let adversaire = new Utilisateur("Dupont","Gerard",29,"Poid Lourd");
adversaire.saluer();
let adversaireSolo = {
    nom: "Dupont",
    prenom: "Jean",
    age: 23,
    categorie: "Poid lourd" 
};

//Ne fonctionnera pas, puisque adversaireSolo n'est pas une instance de la class Utilisateur
adversaireSolo.saluer();
*/

let myScore = 0;
let myAdversaireScore = 0;
let tabChoice = ["Pierre","Feuille","Ciseaux"];

let pierreButton = document.getElementById('pierre');
pierreButton.onclick = function () {
    replaceChoicesAndResult("Pierre");
    replaceScores();
    
    checkFinalWinner(myScore, myAdversaireScore);
} 

let feuilleButton = document.getElementById('feuille');
feuilleButton.onclick = function () {
    replaceChoicesAndResult("Feuille");
    replaceScores();

    checkFinalWinner(myScore, myAdversaireScore);
}

let ciseauxButton = document.getElementById('ciseaux');
ciseauxButton.onclick = function () {
    replaceChoicesAndResult("Ciseaux");
    replaceScores();

    checkFinalWinner(myScore, myAdversaireScore);
}

/*Permet de vérifier s'il y a un gagnant final*/
function checkFinalWinner(myFunctionScore, myFunctionAdversaireScore) {
    if (myFunctionScore === 3) {
        alert("J'ai gagné la partie ! ");
    } else if (myFunctionAdversaireScore === 3) {
        alert("L'ordinateur a gagné la partie !");
    }
}

/*Permet de calculer le gagnant d'une manche*/
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

/*Permet de générer aléatoirement le choix de l'adversaire*/
function generateAdversaireChoice(myFunctionTabChoice) {
    let randNumber = Math.floor(Math.random()*myFunctionTabChoice.length);
    let advChoice = myFunctionTabChoice[randNumber];
    return advChoice;
}

/*Permet de remplacer les choix des joueurs dans le code HTML, ainsi que le résultat de la manche*/
function replaceChoicesAndResult(myChoice) {
    const advChoice = generateAdversaireChoice(tabChoice);
    document.getElementById("definitifChoiceAdversaire").innerHTML = advChoice;
    document.getElementById("definitifChoice").innerHTML = myChoice;

    const resultManche = calculeWinner(myChoice, advChoice);
    let resultMancheElement = document.createElement("h2");
    resultMancheElement.innerHTML = resultManche;
    document.getElementById("resultatManche").appendChild(resultMancheElement);
}

/*Permet de remplacer les scores dans le code HTML*/
function replaceScores() {
    document.getElementById("myScore").innerHTML = "Mon score : " + myScore;
    document.getElementById("myAdversaireScore").innerHTML = "Adversaire score : " + myAdversaireScore;
}

/*Charge l'utilisateur 1 dans le code HTML*/
window.onload = function() {
    document.getElementById("myName").innerHTML = utilisateur.nom;
    document.getElementById("myFirstName").innerHTML = utilisateur.prenom;
    document.getElementById("myAge").innerHTML = utilisateur.age;
    document.getElementById("myCategory").innerHTML = utilisateur.categorie;

    document.getElementById("herName").innerHTML = adversaire.nom;
    document.getElementById("herFirstName").innerHTML = adversaire.prenom;
    document.getElementById("herAge").innerHTML = adversaire.age;
    document.getElementById("herCategory").innerHTML = adversaire.categorie;
}

/*Permet de recommencer le jeu en rechargeant la page*/
document.getElementById("tryAgain").onclick = function() {
    window.location.reload();
}


/*Bonus : Découverte des promesses*/
function divide(numerator,denominator) {
    return new Promise((resolve,reject) =>  {
        if (denominator === 0) {
            reject("Division par 0 impossible");
            return;
        }
        resolve(numerator/denominator);
    });
};

divide(10,0)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(console.log('Vous avez essayé une division'));


/*let promise = new Promise((resolve, reject) => {
    resolve(fetch('https://jsonplaceholder.typicode.com/todos/10'));
    reject(new Error("An error occured !"));
});*/
