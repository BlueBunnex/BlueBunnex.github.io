let construct = "";

for (const prop in characterInfo) {

    let char = characterInfo[prop];
    
    construct += `<div class="section">
        <h1>` + char['name'] + `</h1>
        <div>
            <img src=` + char['imgs'][0] + ` width="100%">
            <p>` + char['tagline'] + `</p>
        </div>
    </div>`;
    
}

const universe = construct;
