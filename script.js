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
      // Afficher une boîte pour demander une entrée
      let entreeUtilisateur1 = window.prompt("Quel est la valeur de x si 5x + 2 = 12?")
      // Vérifier si l'utilisateur a entré la bonne réponse (2)
      if (entreeUtilisateur1 == "2") {
          // Donne la première lettre du mot si la réponse est bonne
          paragrapheResultat1.textContent = "Bonne réponse! La première lettre du mot que vous cherchez est : " + localStorage.getElement("mot5").toUpperCase().charAt[0];
      } else if (entreeUtilisateur1 === "") {
          paragrapheResultat1.textContent = "Vous n'avez rien saisi.";
      } else if (entreeUtilisateur1 !== "2"){
          paragrapheResultat1.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse";
      } else {
          paragrapheResultat1.textContent = "Vous avez annulé la saisie.";
      }
      break;

    case ((longueur == 5) && (numIndice == 2)):
      // Récupérer le bouton et l'élément pour afficher le résultat
      let paragrapheResultat2 = document.getElementById("resultat2")
      // Afficher une boîte pour demander une entrée
      let entreeUtilisateur2 = window.prompt("Quel est la valeur de x si 3x + 6 = 18?")
      // Vérifier si l'utilisateur a entré la bonne réponse (2)
      if (entreeUtilisateur2 == "4") {
          // Donne la première lettre du mot si la réponse est bonne
          paragrapheResultat2.textContent = "Bonne réponse! La deuxième lettre du mot que vous cherchez est : " + localStorage.getElement("mot5").toUpperCase().charAt[1];
      } else if (entreeUtilisateur1 === "") {
          paragrapheResultat2.textContent = "Vous n'avez rien saisi.";
      } else if (entreeUtilisateur1 !== "4"){
          paragrapheResultat2.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse";
      } else {
          paragrapheResultat2.textContent = "Vous avez annulé la saisie.";
      }
      break;

    case ((longueur == 5) && (numIndice == 3)):
      // Récupérer le bouton et l'élément pour afficher le résultat
      let paragrapheResultat3 = document.getElementById("resultat3")
      // Afficher une boîte pour demander une entrée
      let entreeUtilisateur3 = window.prompt("Quel est la valeur de x si 2x + 6 = 3x + 2?")
      // Vérifier si l'utilisateur a entré la bonne réponse (2)
      if (entreeUtilisateur3 == "4") {
          // Donne la première lettre du mot si la réponse est bonne
          paragrapheResultat3.textContent = "Bonne réponse! La troisième lettre du mot que vous cherchez est : " + localStorage.getElement("mot5").toUpperCase().charAt[2];
      } else if (entreeUtilisateur3 === "") {
          paragrapheResultat3.textContent = "Vous n'avez rien saisi.";
      } else if (entreeUtilisateur3 !== "4"){
          paragrapheResultat3.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse";
      } else {
          paragrapheResultat3.textContent = "Vous avez annulé la saisie.";
      }
      break;

    case ((longueur == 6) && (numIndice == 1)):
      // Récupérer le bouton et l'élément pour afficher le résultat
      let paragrapheResultat4 = document.getElementById("resultat3")
      // Afficher une boîte pour demander une entrée
      let entreeUtilisateur4 = window.prompt("Si x = 9 détermine la valeur de 5x - 32. ")
      // Vérifier si l'utilisateur a entré la bonne réponse (2)
      if (entreeUtilisateur4 == "13") {
          // Donne la première lettre du mot si la réponse est bonne
          paragrapheResultat4.textContent = "Bonne réponse! La première lettre du mot que vous cherchez est : " + localStorage.getElement("mot6").toUpperCase().charAt[0];
      } else if (entreeUtilisateur4 === "") {
          paragrapheResultat4.textContent = "Vous n'avez rien saisi.";
      } else if (entreeUtilisateur4 !== "13"){
          paragrapheResultat4.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse";
      } else {
          paragrapheResultat4.textContent = "Vous avez annulé la saisie.";
      }
      break;

    case ((longueur == 6) && (numIndice == 2)):
      // Récupérer le bouton et l'élément pour afficher le résultat
      let paragrapheResultat5 = document.getElementById("resultat3")
      // Afficher une boîte pour demander une entrée
      let entreeUtilisateur5 = window.prompt("Quel est la valeur de x si 6x + 3 = 5x + 4?")
      // Vérifier si l'utilisateur a entré la bonne réponse (2)
      if (entreeUtilisateur5 == "1") {
          // Donne la première lettre du mot si la réponse est bonne
          paragrapheResultat5.textContent = "Bonne réponse! La deuxième lettre du mot que vous cherchez est : " + localStorage.getElement("mot6").toUpperCase().charAt[1];
      } else if (entreeUtilisateur5 === "") {
          paragrapheResultat5.textContent = "Vous n'avez rien saisi.";
      } else if (entreeUtilisateur5 !== "1"){
          paragrapheResultat5.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse";
      } else {
          paragrapheResultat5.textContent = "Vous avez annulé la saisie.";
      }
      break;

    case ((longueur == 7) && (numIndice == 1)):
      // Récupérer le bouton et l'élément pour afficher le résultat
      let paragrapheResultat6 = document.getElementById("resultat3")
      // Afficher une boîte pour demander une entrée
      let entreeUtilisateur6 = window.prompt("Quel est la valeur de x si 8x + 3 = 3x + 23")
      // Vérifier si l'utilisateur a entré la bonne réponse (2)
      if (entreeUtilisateur6 == "4") {
          // Donne la première lettre du mot si la réponse est bonne
          paragrapheResultat6.textContent = "Bonne réponse! La première lettre du mot que vous cherchez est : " + localStorage.getElement("mot7").toUpperCase().charAt[0];
      } else if (entreeUtilisateur6 === "") {
          paragrapheResultat6.textContent = "Vous n'avez rien saisi.";
      } else if (entreeUtilisateur6 !== "4"){
          paragrapheResultat6.textContent = "Womp Womp Womp. Vous avez eu la mauvaise réponse";
      } else {
          paragrapheResultat6.textContent = "Vous avez annulé la saisie.";
      }
      break;
  }
}
  
//Auteurs : Emilio Bosi, Richard Théberge et Christopher Bissonnette