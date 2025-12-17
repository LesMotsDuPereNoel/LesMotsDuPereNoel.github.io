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

//Fonction qui demande une question pour reçevoir un indice
function indice(longueur, numIndice){
  switch(true){
    case ((longueur == 5) && (numIndice == 1)):
      // Récupérer le bouton et l'élément pour afficher le résultat
      let paragrapheResultat1 = document.getElementById("resultat1")
      // Afficher une boîte de dialogue pour demander une entrée
      let entreeUtilisateur1 = window.prompt("Quel est la valeur de x si 5x + 2 = 12?")
      // Vérifier si l'utilisateur a entré quelque chose (pas annulé ni vide) et c'est
      if ((entreeUtilisateur1 !== null) && (entreeUtilisateur1 !== "") && (entreeUtilisateur1 == 2)) {
          // Afficher le résultat sur la page
          paragrapheResultat1.textContent = "Bonne réponse! La première lettre du mot que vous cherchez est : " + localStorage.getElement(mot5[0]).toUpperCase();
      } else if (entreeUtilisateur1 === "") {
          paragrapheResultat1.textContent = "Vous n'avez rien saisi.";
      } else if (entreeUtilisateur1 !== 2){
          paragrapheResultat1.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse.";
      }
        else {
          paragrapheResultat1.textContent = "Vous avez annulé la saisie.";
      }
      break;
  }
}
  
//Auteurs : Emilio Bosi, Richard Théberge et Christopher Bissonnette