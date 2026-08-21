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
function moveOnMax(evenement, field, nextFieldID) {
    //Ignore Backspace : sinon, en revenant sur la case précédente (déjà pleine),
    //ce onkeyup pensait qu'il fallait avancer, ce qui ramenait à la case d'origine.
    if (evenement.key === "Backspace") {
        return;
    }
    if (field.value.length >= field.maxLength) {
        document.getElementById(nextFieldID).focus();
    }
}

//Quand on appuie sur Backspace : efface la case actuelle et retourne à la case précédente
function moveOnBackspace(evenement, field, prevFieldID) {
    if (evenement.key === "Backspace") {
        //Empêche le navigateur d'effacer aussi un caractère lui-même,
        //ce qui causait une double suppression une fois le focus déplacé.
        evenement.preventDefault();
        field.value = "";
        if (prevFieldID) {
            document.getElementById(prevFieldID).focus();
        }
    }
}

//Nouveau système d'indices : un seul bouton. Chaque clic révèle une lettre
//du mot secret qui n'a pas encore été trouvée (verte) dans les essais précédents.
//Le nombre d'indices disponibles dépend de la difficulté (3 pour 5 lettres).
const LONGUEUR_MOT = 5;
const MAX_INDICES = 3;

//Un true à la position i veut dire que cette lettre est déjà connue
//(trouvée en vert dans un essai, ou déjà révélée par un indice).
let lettresTrouvees = new Array(LONGUEUR_MOT).fill(false);
let indicesUtilises = 0;

function donnerIndice() {
    let bouton = document.getElementById("boutonIndice");
    let paragrapheResultat = document.getElementById("resultatIndice");

    if (indicesUtilises >= MAX_INDICES) {
        bouton.disabled = true;
        return;
    }

    let motReponse = localStorage.getItem("mot5").toUpperCase();

    //Cherche les positions dont la lettre n'est pas encore connue
    let positionsRestantes = [];
    for (let i = 0; i < LONGUEUR_MOT; i++) {
        if (!lettresTrouvees[i]) {
            positionsRestantes.push(i);
        }
    }

    if (positionsRestantes.length === 0) {
        paragrapheResultat.textContent = "Vous avez déjà toutes les lettres!";
        bouton.disabled = true;
        return;
    }

    //Choisit une position au hasard parmi celles qui restent à trouver
    let position = positionsRestantes[Math.floor(Math.random() * positionsRestantes.length)];
    lettresTrouvees[position] = true;

    paragrapheResultat.textContent = "La lettre en position " + (position + 1) + " est : " + motReponse.charAt(position);

    indicesUtilises++;
    if (indicesUtilises >= MAX_INDICES) {
        bouton.disabled = true;
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
            if (longueur === LONGUEUR_MOT) {
                lettresTrouvees[i] = true;
            }
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
        afficherPopup(true);
        return;
    }

    //Si c'était le dernier essai et que le mot n'a pas été trouvé, la partie est perdue
    if (ligne === 6) {
        afficherPopup(false);
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


/* ===================== Statistiques et fenêtre de victoire ===================== */
//Ces statistiques sont gardées dans le localStorage, donc elles restent
//d'une partie à l'autre (même après avoir rechargé la page).

//Met à jour les statistiques après une partie (gagnée ou perdue) et les retourne
function miseAJourStats(partieGagnee) {
    let jeuxJoues = parseInt(localStorage.getItem("jeuxJoues")) || 0;
    let jeuxGagnes = parseInt(localStorage.getItem("jeuxGagnes")) || 0;
    let winStreak = parseInt(localStorage.getItem("winStreak")) || 0;

    jeuxJoues++;
    if (partieGagnee) {
        jeuxGagnes++;
        winStreak++;
    } else {
        winStreak = 0;
    }

    localStorage.setItem("jeuxJoues", jeuxJoues);
    localStorage.setItem("jeuxGagnes", jeuxGagnes);
    localStorage.setItem("winStreak", winStreak);

    return { jeuxJoues, jeuxGagnes, winStreak };
}

//Affiche la fenêtre pop-up de fin de partie (victoire ou défaite) avec les statistiques à jour
function afficherPopup(partieGagnee) {
    let stats = miseAJourStats(partieGagnee);
    let pourcentage = Math.round((stats.jeuxGagnes / stats.jeuxJoues) * 100);

    let titre = document.getElementById("popupTitre");
    let motSecret = document.getElementById("popupMotSecret");

    if (partieGagnee) {
        titre.textContent = "🎉 Bravo, vous avez gagné!";
        motSecret.textContent = "";
    } else {
        titre.textContent = "😢 Dommage, vous avez perdu!";
        motSecret.textContent = "Le mot était : " + localStorage.getItem("mot5").toUpperCase();
    }

    document.getElementById("statStreak").textContent = stats.winStreak;
    document.getElementById("statJoues").textContent = stats.jeuxJoues;
    document.getElementById("statPourcentage").textContent = pourcentage + "%";

    document.getElementById("popupVictoire").style.display = "flex";
}

//Ferme la fenêtre pop-up sans recharger la page
function fermerPopup() {
    document.getElementById("popupVictoire").style.display = "none";
}

//Recharge la page pour commencer une nouvelle partie
function rejouer() {
    location.reload();
}


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

    // Appuyer sur Entrée soumet la ligne active (celle dont le bouton Soumettre n'est pas désactivé)
    document.addEventListener("keyup", (evenement) => {
        if (evenement.key === "Enter") {
            for (let i = 1; i <= 6; i++) {
                let bouton = document.getElementById("sub" + i);
                if (bouton && !bouton.disabled) {
                    bouton.click();
                    break;
                }
            }
        }
    });
});