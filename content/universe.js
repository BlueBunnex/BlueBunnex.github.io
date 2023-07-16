let construct = `
    <div class='section'>
        <h1>jump</h1>
        <div>
`;

for (let charId in characterInfo) {
    construct += "<a href='#" + charId + "'>" + characterInfo[charId]['name'] + "</a> ";
}

construct += "</div></div>";

for (let charId in characterInfo) {

    let char = characterInfo[charId];
    
    // open divs and create header
    construct += "<div class='section' id='" + charId + "'>";
    construct += "<h1>" + char['name'] + "</h1>";
    construct += "<div>";

    // add table data
    for (let tag in char['table_data']) {
        construct += "<p>" + tag + "</p>";
    }
    
    // add image (todo gallery)
    for (let index in char['imgs']) {
        construct += "<img src='/img/universe/" + char['imgs'][index] + "' style='width: 240px;'>";
    }

    // add paragraphs
    for (let index in char['paragraphs']) {
        construct += "<p>" + char['paragraphs'][index] + "</p>";
    }

    // close divs
    construct += "</div></div>";
    
}

const universe = construct;
