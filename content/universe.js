let construct = "";

for (const prop in characterInfo) {

    let char = characterInfo[prop];

    // open divs and create header
    construct += "<div class='section'>";
    construct += "<h1>" + char['name'] + "</h1>";
    construct += "<div>";

    // add tagline
    construct += "<p>" + char['tagline'] + "</p>";
    
    // add image
    construct += "<img src='/img/universe/" + char['imgs'][0] + "' style='width: 320px;'>";

    // add paragraphs
    for (let i=0; i<char['paragraphs'].length; i++) {
        construct += "<p>" + char['paragraphs'][i] + "</p>";
    }

    // close divs
    construct += "</div></div>";
    
}

const universe = construct;
