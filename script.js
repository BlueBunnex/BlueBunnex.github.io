var isEnglish = false;
                
function translatePage() {
  isEnglish = !isEnglish;

  //alert("you found a secret! " + isEnglish);
  
  var enDisplay;
  var cnDisplay;
  
  if (isEnglish) {
    enDisplay = "block";
    cnDisplay = "none";
  } else {
    enDisplay = "none";
    cnDisplay = "block";
  }
  
  var en = document.getElementsByClassName("English");
  for (var i = 0; i < en.length; i++) {
     en.item(i).style.display = enDisplay;
  }
  
  var cn = document.getElementsByClassName("Chinese");
  for (var i = 0; i < cn.length; i++) {
     cn.item(i).style.display = cnDisplay;
  }
  
}

// also make sure to set all Chinese to "display: none;" on page load
translatePage();
