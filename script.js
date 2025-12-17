function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "250px";
    }

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    }
// Source pour la fonction qui fait que quand tu tappes, tu vas au prochain textbox : https://stackoverflow.com/questions/1959398/moving-a-focus-when-the-input-text-field-reaches-a-max-length
function moveOnMax(field, nextFieldID)  {
      if (field.value.length >= field.maxLength) {
        document.getElementById(nextFieldID).focus()
      }
    }

//Fonction qui change la couleur de la boite à vert
function changeCouleurVert(numBoite){
  let boite = document.getElementById(window["boite" + (numboite + 1)]);
  //Source pour window : https://stackoverflow.com/questions/3294262/difference-between-window-and-eval-javascript
  boite.style.backgroundColor = "#33e863"
}

//Fonction qui change la couleur de la boite à jaune
function changeCouleurJaune(numBoite){
  let boite = document.getElementById(window["boite" + (numBoite + 1)]);
  //Source pour window : https://stackoverflow.com/questions/3294262/difference-between-window-and-eval-javascript
  boite.style.backgroundColor = "#ebde2fff"
}

//Fonction pour vérifier si le mot entré correspond au mot secret
/*if (choix == 5) {
  let essai = 0
  function verifieMotEntre5() {
    //Verifie les lettres du mot entré 
    let motEntre = document.getElementById("boite1").value + document.getElementById("boite2").value + document.getElementById("boite3").value + document.getElementById("boite4").value + document.getElementById("boite5").value
    for (let i = 0; i < motReponse.length; i++){
      if (motReponse[i] == motEntre[i]){
        //Change la couleur de la lettre à vert si la lettre (motEntre[i]) est correspondante
        changeCouleurVert(i)

      }else if (motReponse.includes(motEntre[i])){
        //Change la couleur de la lettre (motEntre[i]) à jaune si elle est dans le mot de la réponse
        changeCouleurJaune(i)
      }
    }
  essai++
}

if (i > 6){
  let affichePasReussi = document.getElementById("divAffichePasReussi");
  let pasReussi = "Malheureusement, tu n'as pas réussi, le mot était " + motReponse
  affichePasReussi.innerHTML = pasReussi;
} else {
  let afficheReussi = document.getElementById("divAfficheReussi");
  let reussi = "Bravo! Tu as réussi les mots du père noël!"
  afficheReussi.innerHTML = reussi;
}
}
*/ 

//Fonction qui demande une question pour reçevoir un indice
function indice(longueur, numIndice){
  switch(true){
    case ((longueur == 5) && (numIndice == 1)):
      // Récupérer le bouton et l'élément pour afficher le résultat
      const paragrapheResultat1 = document.getElementById('resultat1')
      // Afficher une boîte de dialogue pour demander une entrée
      const entreeUtilisateur1 = window.prompt("Quel est la valeur de x si 5x + 2 = 12?")
      // Vérifier si l'utilisateur a entré quelque chose (pas annulé ni vide) et c'est
      if ((entreeUtilisateur1 !== null) && (entreeUtilisateur1 !== "") && (entreeUtilisateur1 == 5)) {
          // Afficher le résultat sur la page
          paragrapheResultat1.textContent = "Bonne réponse! La première lettre du mot que vous cherchez est : " + localStorage.getElement(mot5[0]).toUpperCase();
      } else if (entreeUtilisateur1 === "") {
          paragrapheResultat1.textContent = "Vous n'avez rien saisi.";
      } else if (entreeUtilisateur1 !== 5){
          paragrapheResultat1.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse.";
      }
        else {
          paragrapheResultat1.textContent = "Vous avez annulé la saisie.";
      }
      break;
  }
}
  
//Auteurs : Emilio Bosi, Richard Théberge et Christopher Bissonnette