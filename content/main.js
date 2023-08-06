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
    <h1>freewrites</h1>
    <h2>#003</h2>
    <div>
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
    storyLinks += "<a class='ref' href='javascript:loadContent(stories[\"" + title + "\"]);'>" + title + "</a> ";
}

mainConstruct = mainConstruct.replace("REPLACE_CHAPTERS", storyLinks);

const main = mainConstruct;
