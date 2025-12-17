let choix = 0//extraire le vrai choix de l'html mais suppose que c'est 5
function choix5(){

    //Choisit un nombre  aléatoire de 0 à 9
            let choixBanqueMot5 = Math.floor(Math.random() * 10)
            //Basé sur le nombre généré, choisit un mot à 5 lettres de la banque de mot ci-dessous
            switch (choixBanqueMot5){
                case 0:
                    motReponse = "buche"
                    break;
                case 1:
                    motReponse = "hiver"
                    break;
                case 2:
                    motReponse = "dinde"
                    break;
                case 3:
                    motReponse = "jouet"
                    break;
                case 4:
                    motReponse = "sapin"
                    break;
                case 5:
                    motReponse = "avent"
                    break;
                case 6:
                    motReponse = "lutin"
                    break;
                case 7:
                    motReponse = "botte"
                    break;
                case 8:
                    motReponse = "froid"
                    break;
                case 9:
                    motReponse = "givre"
                    break;
                return motReponse;

            }
            localStorage.setItem("mot5", motReponse);
}

function choix6(){

            //Choisit un nombre  aléatoire de 0 à 9
            let choixBanqueMot6 = Math.floor(Math.random() * 10)
            //Basé sur le nombre généré, choisit un mot à 6 lettres de la banque de mot ci-dessous
            switch (choixBanqueMot6){
                case 0:
                    motReponse = "cadeau"
                    break;
                case 1:
                    motReponse = "creche"
                    break;
                case 2:
                    motReponse = "flocon"
                    break;
                case 3:
                    motReponse = "etoile"
                    break;
                case 4:
                    motReponse = "bougie"
                    break;
                case 5:
                    motReponse = "enfant"
                    break;
                case 6:
                    motReponse = "eglise"
                    break;
                case 7:
                    motReponse = "festin"
                    break;
                case 8:
                    motReponse = "glacon"
                    break;
                case 9:
                    motReponse = "joyeux"
                    break;
            }
            localStorage.setItem("mot6", motReponse);
}

function choix7(){

            //Choisit un nombre  aléatoire de 0 à 9
            let choixBanqueMot7 = Math.floor(Math.random() * 10)
            //Basé sur le nombre généré, choisit un mot à 7 lettres de la banque de mot ci-dessous
            switch (choixBanqueMot7){
                case 0:
                    motReponse = "rudolph"
                    break;
                case 1:
                    motReponse = "janvier"
                    break;
                case 2:
                    motReponse = "souhait"
                    break;
                case 3:
                    motReponse = "famille"
                    break;
                case 4:
                    motReponse = "bonheur"
                    break;
                case 5:
                    motReponse = "dessert"
                    break;
                case 6:
                    motReponse = "echarpe"
                    break;
                case 7:
                    motReponse = "lumiere"
                    break;
                case 8:
                    motReponse = "chanson"
                    break;
                case 9:
                    motReponse = "chorale"
                    break;
    }
    localStorage.setItem("mot7", motReponse);
}

//Fonction principale pour vérifier si l'utilisateur a deviner le mot
function verifieMotEntre(ligne,longueur){
    
    //Dépendant de la longueur, le mot secret ce fait choisir.
    let motReponse = "";
    if (longueur == 5){
        motReponse = localStorage.getItem(mot5);
    } else if (longueur == 6){
        motReponse = localStorage.getItem(mot6);
    } else {
        motReponse = localStorage.getItem(mot7);
    }
    motReponse = motReponse.toUpperCase();
    
    let debut = (ligne - 1) * longueur + 1;
    let motEntre = "";

    //Lire le mot entré
    for (let i = 0; i < longueur; i++) {
        let boite = document.getElementById("boite" + (debut + i));
        let lettre = motEntre[i];

        if (lettre === motReponse[i]) {
            //Lettre est dans la bonne place
            boite.style.backgroundColor("green");
        } else if (lettre.includes(motReponse[i])) {
            //Lettre dans le mot, mais mauvais place
            boite.style.backgroundColor("gold");
        } else {
            //Lettre qui n'est pas dans le mot
            boite.style.backgroundColor("grey");
        }
        /* Source pour .disabled (aussi utilisé pour les bouttons de submission) https://youtu.be/xPRlztb5Nno?si=YRq5GkrHhDyE3gpe */ 
        boite.disabled = true;
    }

}

// Auteurs : Richard Théberge, Emilio Bosi et Christopher Bissonnette