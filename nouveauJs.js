/* ===================== lemot.js ===================== */
/*Le code pour les prochaines 2 fonctions :https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapse_sidebar */
function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Source pour la fonction qui fait que quand tu tappes, tu vas au prochain textbox : https://stackoverflow.com/questions/1959398/moving-a-focus-when-the-input-text-field-reaches-a-max-length
function moveOnMax(field, nextFieldID) {
    if (field.value.length >= field.maxLength) {
        document.getElementById(nextFieldID).focus();
    }
}

//Fonction qui demande une question pour reçevoir un indice
function indice(longueur, numIndice) {
    switch (true) {
        case ((longueur == 5) && (numIndice == 1)): {
            let paragrapheResultat1 = document.getElementById("resultat1");
            let entreeUtilisateur1 = window.prompt("Quel est la valeur de x si 5x + 2 = 12?");
            if (entreeUtilisateur1 == 2) {
                paragrapheResultat1.textContent = "Bonne réponse! La première lettre du mot que vous cherchez est : " + localStorage.getItem("mot5").toUpperCase().charAt(0);
            } else if (entreeUtilisateur1 === "") {
                paragrapheResultat1.textContent = "Vous n'avez rien saisi.";
            } else if (entreeUtilisateur1 !== null) {
                paragrapheResultat1.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse :(";
            } else {
                paragrapheResultat1.textContent = "Vous avez annulé la saisie.";
            }
            break;
        }
        case ((longueur == 5) && (numIndice == 2)): {
            let paragrapheResultat2 = document.getElementById("resultat2");
            let entreeUtilisateur2 = window.prompt("Quel est la valeur de x si 3x + 6 = 18?");
            if (entreeUtilisateur2 == 4) {
                paragrapheResultat2.textContent = "Bonne réponse! La deuxième lettre du mot que vous cherchez est : " + localStorage.getItem("mot5").toUpperCase().charAt(1);
            } else if (entreeUtilisateur2 === "") {
                paragrapheResultat2.textContent = "Vous n'avez rien saisi.";
            } else if (entreeUtilisateur2 !== null) {
                paragrapheResultat2.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse :(";
            } else {
                paragrapheResultat2.textContent = "Vous avez annulé la saisie.";
            }
            break;
        }
        case ((longueur == 5) && (numIndice == 3)): {
            let paragrapheResultat3 = document.getElementById("resultat3");
            let entreeUtilisateur3 = window.prompt("Quel est la valeur de x si 2x + 6 = 3x + 2?");
            if (entreeUtilisateur3 == 4) {
                paragrapheResultat3.textContent = "Bonne réponse! La troisième lettre du mot que vous cherchez est : " + localStorage.getItem("mot5").toUpperCase().charAt(2);
            } else if (entreeUtilisateur3 === "") {
                paragrapheResultat3.textContent = "Vous n'avez rien saisi.";
            } else if (entreeUtilisateur3 !== null) {
                paragrapheResultat3.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse :(";
            } else {
                paragrapheResultat3.textContent = "Vous avez annulé la saisie.";
            }
            break;
        }
        case ((longueur == 6) && (numIndice == 1)): {
            let paragrapheResultat4 = document.getElementById("resultat4");
            let entreeUtilisateur4 = window.prompt("Si x = 9 détermine la valeur de 5x - 32. ");
            if (entreeUtilisateur4 == 13) {
                paragrapheResultat4.textContent = "Bonne réponse! La première lettre du mot que vous cherchez est : " + localStorage.getItem("mot6").toUpperCase().charAt(0);
            } else if (entreeUtilisateur4 === "") {
                paragrapheResultat4.textContent = "Vous n'avez rien saisi.";
            } else if (entreeUtilisateur4 !== null) {
                paragrapheResultat4.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse :(";
            } else {
                paragrapheResultat4.textContent = "Vous avez annulé la saisie.";
            }
            break;
        }
        case ((longueur == 6) && (numIndice == 2)): {
            let paragrapheResultat5 = document.getElementById("resultat5");
            let entreeUtilisateur5 = window.prompt("Quel est la valeur de x si 6x + 3 = 5x + 4?");
            if (entreeUtilisateur5 == 1) {
                paragrapheResultat5.textContent = "Bonne réponse! La deuxième lettre du mot que vous cherchez est : " + localStorage.getItem("mot6").toUpperCase().charAt(1);
            } else if (entreeUtilisateur5 === "") {
                paragrapheResultat5.textContent = "Vous n'avez rien saisi.";
            } else if (entreeUtilisateur5 !== null) {
                paragrapheResultat5.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse :(";
            } else {
                paragrapheResultat5.textContent = "Vous avez annulé la saisie.";
            }
            break;
        }
        case ((longueur == 7) && (numIndice == 1)): {
            let paragrapheResultat6 = document.getElementById("resultat6");
            let entreeUtilisateur6 = window.prompt("Quel est la valeur de x si 8x + 3 = 3x + 23");
            if (entreeUtilisateur6 == 4) {
                paragrapheResultat6.textContent = "Bonne réponse! La première lettre du mot que vous cherchez est : " + localStorage.getItem("mot7").toUpperCase().charAt(0);
            } else if (entreeUtilisateur6 === "") {
                paragrapheResultat6.textContent = "Vous n'avez rien saisi.";
            } else if (entreeUtilisateur6 !== null) {
                paragrapheResultat6.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse :(";
            } else {
                paragrapheResultat6.textContent = "Vous avez annulé la saisie.";
            }
            break;
        }
    }
}
//Auteurs : Emilio Bosi, Richard Théberge et Christopher Bissonnette


/* ===================== script.js ===================== */
//Sources pour toutes utilisation de Local storage : https://www.w3schools.com/jsref/prop_win_localstorage.asp

// Indique si la partie est déjà gagnée (corrige le glitch du bouton Soumettre)
let gameWon = false;

let choix = 0; //extraire le vrai choix de l'html mais suppose que c'est 5

function choix5() {
    let choixBanqueMot5 = Math.floor(Math.random() * 22);
    let motReponse;
    switch (choixBanqueMot5) {
        case 0: motReponse = "buche"; break;
        case 1: motReponse = "hiver"; break;
        case 2: motReponse = "dinde"; break;
        case 3: motReponse = "jouet"; break;
        case 4: motReponse = "sapin"; break;
        case 5: motReponse = "avent"; break;
        case 6: motReponse = "lutin"; break;
        case 7: motReponse = "botte"; break;
        case 8: motReponse = "froid"; break;
        case 9: motReponse = "givre"; break;
        case 10: motReponse = "glace"; break;
        case 11: motReponse = "neige"; break;
        case 12: motReponse = "renne"; break;
        case 13: motReponse = "tuque"; break;
        case 14: motReponse = "igloo"; break;
        case 15: motReponse = "foyer"; break;
        case 16: motReponse = "brume"; break;
        case 17: motReponse = "decor"; break;
        case 18: motReponse = "polar"; break;
        case 19: motReponse = "patin"; break;
        case 20: motReponse = "blanc"; break;
        case 21: motReponse = "chaud"; break;
    }
    localStorage.setItem("mot5", motReponse);
}

function choix6() {
    let choixBanqueMot6 = Math.floor(Math.random() * 18);
    let motReponse;
    switch (choixBanqueMot6) {
        case 0: motReponse = "cadeau"; break;
        case 1: motReponse = "creche"; break;
        case 2: motReponse = "flocon"; break;
        case 3: motReponse = "etoile"; break;
        case 4: motReponse = "bougie"; break;
        case 5: motReponse = "enfant"; break;
        case 6: motReponse = "eglise"; break;
        case 7: motReponse = "festin"; break;
        case 8: motReponse = "glacon"; break;
        case 9: motReponse = "joyeux"; break;
        case 10: motReponse = "bougie"; break;
        case 11: motReponse = "bonnet"; break;
        case 12: motReponse = "grelot"; break;
        case 13: motReponse = "gelure"; break;
        case 14: motReponse = "hockey"; break;
        case 15: motReponse = "skieur"; break;
        case 16: motReponse = "chalet"; break;
        case 17: motReponse = "aurore"; break;
    }
    localStorage.setItem("mot6", motReponse);
}

function choix7() {
    let choixBanqueMot7 = Math.floor(Math.random() * 19);
    let motReponse;
    switch (choixBanqueMot7) {
        case 0: motReponse = "rudolph"; break;
        case 1: motReponse = "janvier"; break;
        case 2: motReponse = "souhait"; break;
        case 3: motReponse = "famille"; break;
        case 4: motReponse = "bonheur"; break;
        case 5: motReponse = "dessert"; break;
        case 6: motReponse = "echarpe"; break;
        case 7: motReponse = "lumiere"; break;
        case 8: motReponse = "chanson"; break;
        case 9: motReponse = "chorale"; break;
        case 10: motReponse = "manteau"; break;
        case 11: motReponse = "polaire"; break;
        case 12: motReponse = "tempete"; break;
        case 13: motReponse = "givrage"; break;
        case 14: motReponse = "verglas"; break;
        case 15: motReponse = "mitaine"; break;
        case 16: motReponse = "cagoule"; break;
        case 17: motReponse = "glacial"; break;
        case 18: motReponse = "blouson"; break;
    }
    localStorage.setItem("mot7", motReponse);
}

//Fonction principale pour vérifier si l'utilisateur a deviner le mot
function verifieMotEntre(ligne, longueur) {
    //Dépendant de la longueur, le mot secret ce fait choisir.
    let motReponse = "";
    if (longueur == 5) {
        motReponse = localStorage.getItem("mot5").toUpperCase();
    } else if (longueur == 6) {
        motReponse = localStorage.getItem("mot6").toUpperCase();
    } else {
        motReponse = localStorage.getItem("mot7").toUpperCase();
    }

    let debut = (ligne - 1) * longueur + 1;
    let motEntre = "";

    //Lire le mot entré
    for (let i = 0; i < longueur; i++) {
        motEntre += document.getElementById("boite" + (debut + i)).value;
    }

    //Vérifie chaque lettre
    for (let i = 0; i < longueur; i++) {
        let boite = document.getElementById("boite" + (debut + i));
        let lettre = motEntre[i];

        if (lettre === motReponse[i]) {
            boite.style.backgroundColor = "green";
        } else if (motReponse.includes(lettre)) {
            boite.style.backgroundColor = "gold";
        } else {
            boite.style.backgroundColor = "grey";
        }
        boite.disabled = true;
    }

    //CORRECTION DU GLITCH : dès que le mot est trouvé, on marque la partie comme gagnée
    //ET on désactive immédiatement le bouton Soumettre de la ligne actuelle,
    //pour empêcher les écouteurs de clic (plus bas) d'activer le bouton suivant.
    if (motEntre === motReponse) {
        gameWon = true;
        document.getElementById("sub" + ligne).disabled = true;
        alert("BRAVO VOUS AVEZ GAGNÉ");
        return;
    }

    activerLigneSuivante(ligne);
}

//Fonction pour activer les prochaines lignes
function activerLigneSuivante(ligneActuelle) {
    let prochaineLigne = ligneActuelle + 1;

    if (prochaineLigne > 6) {
        return;
    }
    let boites = document.getElementsByName("range" + prochaineLigne);

    for (let i = 0; i < boites.length; i++) {
        boites[i].disabled = false;
    }
}

// Auteurs : Richard Théberge, Emilio Bosi et Christopher Bissonnette


/* ===================== Logique des boutons Soumettre ===================== */
/* Désactive chaque bouton de soumission une fois cliqué, et active le suivant
   -- SAUF si la partie est déjà gagnée (corrige le glitch).
   https://youtu.be/xPRlztb5Nno?si=YRq5GkrHhDyE3gpe */
document.addEventListener("DOMContentLoaded", () => {
    let submitbtn1 = document.getElementById("sub1");
    submitbtn1.addEventListener('click', () => {
        setTimeout(() => {
            submitbtn1.disabled = true;
            if (!gameWon) submitbtn2.disabled = false;
        }, 1);
    });
    let submitbtn2 = document.getElementById("sub2");
    submitbtn2.addEventListener('click', () => {
        setTimeout(() => {
            submitbtn2.disabled = true;
            if (!gameWon) submitbtn3.disabled = false;
        }, 1);
    });
    let submitbtn3 = document.getElementById("sub3");
    submitbtn3.addEventListener('click', () => {
        setTimeout(() => {
            submitbtn3.disabled = true;
            if (!gameWon) submitbtn4.disabled = false;
        }, 1);
    });
    let submitbtn4 = document.getElementById("sub4");
    submitbtn4.addEventListener('click', () => {
        setTimeout(() => {
            submitbtn4.disabled = true;
            if (!gameWon) submitbtn5.disabled = false;
        }, 1);
    });
    let submitbtn5 = document.getElementById("sub5");
    submitbtn5.addEventListener('click', () => {
        setTimeout(() => {
            submitbtn5.disabled = true;
            if (!gameWon) submitbtn6.disabled = false;
        }, 1);
    });
    let submitbtn6 = document.getElementById("sub6");
    submitbtn6.addEventListener('click', () => {
        setTimeout(() => {
            submitbtn6.disabled = true;
        }, 1);
    });

    // Choisit un nouveau mot secret de 5 lettres à chaque chargement de la page
    choix5();
    document.getElementById("demo").innerHTML = localStorage.getItem("mot5");
});