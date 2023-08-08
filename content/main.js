let mainConstruct = `

<h1 class="click-header" onclick="loadContent(me);">My Fursona</h1>

<h1 class="click-header" onclick="loadContent(universe);">Original Characters</h1>

<h1 class="click-header" onclick="loadContent(assets);">Asset Downloads</h1>

<div class="section">
    <h1>conworlds, conlangs, conspecies, oh my!</h1>
    <h2>WIP display</h2>
    <div>
        <p>I'm trying to build together a little fantasy world that features (at least) one conlang for me to work on, since I'm a linguist (who enjoys writing)! I'm thinking gothic sci-fi mecha fantasy.</p>
        <a class="ref" href="javascript:loadContent(cabuLanguage);">Cabü (conlang)</a>
        <a class="ref" href="javascript:loadContent(limalhSpecies);">Limalh (conspecies)</a>
    </div>
</div>

<div class="section">
    <h1>freewrites</h1>
    <h2>WIP display</h2>
    <div>
        <p>CW: swearing</p>
        REPLACE_CHAPTERS
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
