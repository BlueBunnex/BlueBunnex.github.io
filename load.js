// Open the Modal
function openModal(cardIndex) {
    var allSlides = "";
    var theLength = blogCards[cardIndex]["slides"].length;
    
    // retrieve all those slides
    blogCards[cardIndex]["slides"].forEach(function(value, index) {
        allSlides += `<div class="mySlides">
                    <div class="numbertext">` + (index + 1) + ` / ` + theLength + `</div>
                    ` + value + `
                    </div>`
    });
    
    // modify inner HTML of modal
    document.getElementById('myModal').innerHTML = `
        <span class="close cursor" onclick="closeModal();">&times;</span>
        <div class="modal-content">

            <div style="padding: 20px 120px;">
            ` + allSlides + `
            </div>

            <!-- Next/previous controls -->
            <a class="prev" onclick="plusSlides(-1);">&#10094;</a>
            <a class="next" onclick="plusSlides(1);">&#10095;</a>

        </div>
    `;
    
    // actually show it
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

function loadTheThings() {
    var construct = "";

    blogCards.forEach(function(value, index) {
        var readMore = "";

        if (value["page"] != null) {
            readMore = `<a href="` + value["page"] + `" style="font-style: italic; cursor: pointer;"> Take me there...</a>`;
        } else {
            readMore = `<a onclick="openModal(` + index + `); currentSlide(1);" style="font-style: italic; cursor: pointer;"> Read more...</a>`;
        }

        construct += `
        <span class="card">
            <span class="img-holder" onclick="openModal(` + index + `); currentSlide(1);">
                <span><i class="fa-solid fa-camera"></i> ` + value["image-count"] + `</span>
                <img src="` + value["image"] + `">
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
        "description": "First day of travel (to Germany on plane!!) and I already felt like death. I was very tired. Lots of cool photos though!",
        "date": "06/27/2022",
        "image": "img/arrival_fumo.jpg",
        "image-count": 18,
        "slides": [
            `
            <p>The trains at the airport were really neat, since they just went between the different parts of the airport. It's like a tiny city! From the outside all you see is the entrance, but it goes really far backwards as well as down.</p>
            <p>I remember not knowing what the security parts were for (hint: they're for security). Knowing now of all the dangers that humanity poses to itself is really quite sobering. Also I liked putting my stuff on the conveyer, it disappeared into a funny box :3</p>
            <img src="https://lh4.googleusercontent.com/UZNlDjqlt4qBq_qz1hyeBOekYyA5REpmVi518yZ12-8zgWX8QtowLE6hlOMajwKS6Wo=w2400" width="200">
            <img src="https://lh5.googleusercontent.com/VNddOP67HQC53ippeFOfSb1A8t55iSFcs99Ne4k3gwiNbaj34Kuw4QL9wg52D768jZs=w2400" width="200">
            <img src="https://lh3.googleusercontent.com/rCHsJ0tL7ykG3gBasgFhShdKxvgLSnajhDP3vwuQF3PTjZyRoF9E5-MgmegNGuO2Svw=w2400" width="200">
            `,
            `
            <p></p>
            <img src="" width="500">
            `,
            `
            <p></p>
            <img src="" width="500">
            `,
            `
            <p></p>
            <img src="" width="500">
            `,
            `
            <p></p>
            <img src="" width="500">
            `,
        ]
    },
    {
        "description": "Leaving for Europe tomorrow, which means I really have to get this website ready for blogging.",
        "date": "06/26/2022",
        "image": "img/summer_girl.png",
        "image-count": 1,
        "slides": [
            `
            <h1>Behind the scenes</h1>
            <p>I really rushed through making this blog system so that I could use it for this trip. However, it has a few nice features.</p>
            <img src="img/summer_girl.png" alt="Image that's the same as the one I posted on Twitter" width="600">
            `,
            `
            <h1>Behind the scenes</h1>
            <p>1) In case you didn't notice, you can get to this gallery view by clicking on the image on the blog card. It also shows the amount of images in the blog.</p>
            <p>2) All blog content is dynamically loaded from a Javascript array (this should be an external JSON file, but whatever). If you don't know what that is, it basically means I just have to put all the stuff I want in this blog into a nice array and it automatically loads it into the webpage. Wow!</p>
            <p>3) If you hover over the x in the top right to close this gallery, it does a little spin.</p>
            `
        ]
    },
    {
        "description": "We are now hosting on Github, which makes updating blog posts very convenient!",
        "date": "06/20/2022",
        "image": "img/kitsu_.png",
        "image-count": 1,
        "slides": [
            `
            <img src="img/kitsu_.png" alt="Random image for the Github card" width="600">
            `
        ],
        //"page": "404.html"
    }
]
