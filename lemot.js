do{
let choix = 5//extraire le vrai choix de l'html mais suppose que c'est 5
let motReponse = ""

if (choix == 5){
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
    }
} else if (choix == 6){
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
} else {
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
}

//Verifie les lettres du mot entré 
do{
    let motEntre = "train" //On doit extraire la variable du HTML mais supposew que c'est train
    for (let i = 0; i < motReponse.length; i++){
        if (motReponse[i] == motEntre[i]){
            //Change la couleur de la lettre à vert si la lettre (motEntre[i]) est correspondante
        }else if (motReponse.includes(motEntre[i])){
            //Change la couleur de la lettre (motEntre[i]) à jaune si elle est dans le mot de la réponse
        }
    }
}while ((motEntre !== motReponse) && (i <= 6))

if (i > 6){
    let pasReussi = "Malheureusement, tu n'as pas réussi, le mot était " + motReponse
}else{
    let reussi = "Bravo! Tu as réussi les mots du père noël!"
}
let veuxturejouer = "Veux tu rejouer?"
//Demande oui ou non
let rejouer = false //Suppose que la personne ne veut pas rejouer
//Si oui, rejoue le jeu
}while (rejouer == true)