let universeConstruct = `
    <div class='section'>
        <h1>jump</h1>
        <div>
`;

for (let charId in characterInfo) {
    universeConstruct += "<a href='#" + charId + "'>" + characterInfo[charId]['name'] + "</a> ";
}

universeConstruct += "</div></div>";

for (let charId in characterInfo) {

    let char = characterInfo[charId];
    
    // open divs and create header
    universeConstruct += "<div class='section' id='" + charId + "'>";
    universeConstruct += "<h1>" + char['name'] + "</h1>";
    universeConstruct += "<div>";

    // add table data
    universeConstruct += "<table>";
    for (let tag in char['table_data']) {
        universeConstruct += "<tr><th style='float: right;'>" + tag + ":</th><td>" + char['table_data'][tag] + "</td></tr>";
    }
    universeConstruct += "</table>";
    
    // add image
    for (let index in char['imgs']) {
        universeConstruct += "<img src='/img/universe/" + char['imgs'][index] + "' style='width: 50%; cursor: zoom-in;' onclick='window.open(\"/img/universe/" + char['imgs'][index] + "\");'>";
    }

    // add paragraphs
    for (let index in char['paragraphs']) {
        universeConstruct += "<p>" + char['paragraphs'][index] + "</p>";
    }

    // close divs
    universeConstruct += "</div></div>";
    
}

const universe = universeConstruct;
