let mainConstruct = `
<div class="section">
    <h1>me lore</h1>
    <h2>#000</h2>
    <div>
        <p>some information regarding me and my fursona.</p>
        <a class="ref" href="javascript:loadContent(me);">check it out</a>
    </div>
</div>

<div class="section">
    <h1>the kitsumitsuverse</h1>
    <h2>#001</h2>
    <div>
        <p>aka my hot hot ocs</p>
        <a class="ref" href="javascript:loadContent(universe);">check it out</a>
    </div>
</div>

<div class="section">
    <h1>conworlds, conlangs, conspecies, oh my!</h1>
    <h2>#002</h2>
    <div>
        <p>I'm trying to build together a little fantasy world that features (at least) one conlang for me to work on, since I'm a linguist (who enjoys writing)! I'm thinking gothic sci-fi mecha fantasy.</p>
        <a class="ref" href="javascript:loadContent(cabuLanguage);">Cabü (conlang)</a>
        <a class="ref" href="javascript:loadContent(limalhSpecies);">Limalh (conspecies)</a>
    </div>
</div>

<div class="section">
    <h1>infinite freewrite</h1>
    <h2>#003</h2>
    <div>
        <p>I want to make something that I can just spend ten minutes working on every once in a while, so here it shall reside. essentially, it's gonna be one long story that evolves to suit whatever I feel like writing at the time. it might get messy, but I don't plan on taking it too seriously anywho.</p>
        <p>CW: swearing</p>
        REPLACE_CHAPTERS
    </div>
</div>

<div class="section">
    <h1>asset downloads</h1>
    <h2>#004</h2>
    <div>
        <p>some assets that you can use if you like, mostly 3D stuff. they're all free and you don't have to give credit, but you know, you can!</p>
        <a class="ref" href="javascript:loadContent(assets);">check it out</a>
    </div>
</div>
`;

let storyLinks = "";
for (var title of Object.keys(stories)) {
    stories[title] = "<div class='section'><h1>" + title + "</h1><div>" + stories[title] + "</div></div>";
    storyLinks += "<a class='ref' href='javascript:loadContent(chapters[\"" + title + "\"]);'>" + title + "</a> ";
}

mainConstruct = mainConstruct.replace("REPLACE_CHAPTERS", storyLinks);

const main = mainConstruct;
