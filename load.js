function loadTheThings() {
    var construct = "";

    blogCards.forEach(function(value) {
        var readMore = "";

        if (value["page"] != null) {
            readMore = `<a href="` + value["page"] + `" style="font-style: italic;"> Read more...</a>`;
        }

        construct += `
        <span class="card">
            <span class="img-holder">
                <span><i class="fa-solid fa-camera"></i> ` + value["images"].length + `</span>
                <img src="` + value["images"][0] + `">
            </span>
            <p>` + value["description"] + readMore + `</p>
            <span class="imagetag"></span>
            <span class="datetag">` + value["date"] + `</span>
        </span>
        `;
    });

    document.getElementById('insert-cards-here').innerHTML = construct;
}

var blogCards = [
    {
        "description": "We are now hosting on Github, which makes updating blog posts very convenient!",
        "date": "06/20/2022",
        "images": [
            "img/kitsu_.png"
        ]
        //"page": "404.html"
    }
]
