const universe = `

<div id="universe-insert"></div>

<script src="characters.js"></script>
<script>
    let in = document.getElementById("universe-insert");

    for (const prop in characterInfo) {

        in.innerHTML += \`<div class="section">
            <h1>\` + characterInfo[prop]['name'] + \`</h1>
            <div>
        
            </div>
        </div>\`;
        
    }
</script>

`;
