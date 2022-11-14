var isEnglish = true;
                
function translatePage() {
  isEnglish = !isEnglish;

  alert("you found a secret! " + isEnglish);
}

// also make sure to set all Chinese to "display: none;" on page load
