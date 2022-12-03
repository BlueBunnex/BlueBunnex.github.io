var isEnglish = true;
                
function translatePage() {
  isEnglish = !isEnglish;

  //alert("you found a secret! " + isEnglish);
  
  var en = document.getElementsByClassName("English");
  for (var i = 0; i < en.length; i++) {
     en.item(i).style.display = "none";
  }
  
}

// also make sure to set all Chinese to "display: none;" on page load
