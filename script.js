// cookies helper functions

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// page translation code

var isEnglish = !(getCookie("language") === "Chinese");
                
function translatePage() {
  isEnglish = !isEnglish;
  
  // update page
  updatePageTranslation();
}

function updatePageTranslation() {
  var enDisplay;
  var cnDisplay;
  
  if (isEnglish) {
    setCookie("language", "English", 7);
    
    enDisplay = "block";
    cnDisplay = "none";
  } else {
    setCookie("language", "Chinese", 7);
    
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

document.addEventListener('DOMContentLoaded', function() {
  // once the page loads, ensure the correct language content is displayed
  updatePageTranslation();
}, false);
