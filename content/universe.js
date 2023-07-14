let construct = "";

for (const prop in characterInfo) {

    //alert(characterInfo[prop]['name'] + " likes burgers");

    construct += `<div class="section">
        <h1>` + characterInfo[prop]['name'] + `</h1>
        <div>
    
        </div>
    </div>`;
    
}

const universe = construct;
