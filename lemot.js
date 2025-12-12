let choix = 0//extraire le vrai choix de l'html mais suppose que c'est 5
function choix5(){
    choix = 5
    let motReponse = ""


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
                
                localStorage.setItem("mot5", motReponse);
            }
}
function choix6(){
    choix = 6

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
}
function choix7(){
    choix = 7

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