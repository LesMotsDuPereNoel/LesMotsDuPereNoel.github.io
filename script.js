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
