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

//Nombre d'essaies
let essaies = 0;
//Nombre d'essaies maximum
let maxEssaies = 6;

//Fonction principale pour vérifier si le mot entré est dans une rangée donné
/*function verifieMotEntre(range, longueur) {
    

    let tblMotEntre = document.GetElementsByName("range1");
    let motEntre = ""
    for (let i = 0; i < longueur; i++){
        motEntre = motEntre + tblMotEntre[i]
    }
    //Construire le mot à partir des cases de la rangée donné
    let motEntre = "";
    for (let i = 1; i < longueur; i++) {
        let caseId = "boite" + i + "-" + range;
        motEntre += document.getElementById(caseId).value.toLowerCase()
    }

    //Vérifie que l'utilisateur a rempli les 5 lettres dans le mot
    if (motEntre.length !== longueur) {
        let message = document.getElementById("divMessage");
        message.innerHTML = ("Veuillez entrer un mot de 5 lettres")
        return;
    }

    //Vérifie chaque lettre
    for (let i = 1; i < longueur; i++) {
        let caseId = "boite" + i + "-" + range;
        if (motEntre[i - 1] === motReponse[i - 1]) {
            changeCouleurVert(caseId) //Lettre correcte placée dans la bonne place
        } else if (motReponse.includes(motEntre[i - 1])) {
            changeCouleurJaune(caseId) //Letre correcte mais mal placée
        }
    }

    //Incrémenter le nombres d'essaies
    essaies++

    //Vérifie si l'utilisateur a deviner le mot
    if (motEntre === motReponse) {
        document.getElementById(divAfficheReussi) = "Bravo! Tu as réussi les mots du père noël!"
    }

    //Vérifie si l'utilisateur n'a pas devier le mot
    if (essaies >= maxEssaies) {
        document.getElementById(divAffichePasReussi) = ("Malheureusement, tu n'as pas réussi, le mot était " + motReponse)
    }
}
    */ 
// Auteurs : Richard Théberge, Emilio Bosi et Christopher Bissonnette
