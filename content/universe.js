let construct = `
    <div class='section'>
        <h1>jump</h1>
        <div>
`;

for (const charId in characterInfo) {
    construct += "<a href='#" + charId + "'>" + characterInfo[charId]['name'] + "</a> ";
}

construct += "</div></div>";

for (const charId in characterInfo) {

    let char = characterInfo[charId];

    // open divs and create header
    construct += "<div class='section' id='" + charId + "'>";
    construct += "<h1>" + char['name'] + "</h1>";
    construct += "<div>";

    // add table data
    for (const tag in char['table_data']) {
        char += "<p>" + tag + "</p>";
    }
    
    // add image
    for (const image in char['imgs']) {
        construct += "<img src='/img/universe/" + image + "' style='width: 320px;'>";
    }

    // add paragraphs
    // for (let i=0; i<char['paragraphs'].length; i++) {
    //     construct += "<p>" + char['paragraphs'][i] + "</p>";
    // }

    // close divs
    construct += "</div></div>";
    
}

const universe = construct;
