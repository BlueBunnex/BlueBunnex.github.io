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

// https://www.labnol.org/embed/google/drive/
var blogCards = [
    {
        "description": "Goodness those mountains are massive. From Austria, off we head to Budapest, Hungary's capital. There's some weird stuff along the way...",
        "date": "06/30/2022",
        "image": "img/austria.jpg",
        "image-count": 18,
        "slides": [
            `
            Just look at those mountains. Bigger in-person, mind you.
            <img src="https://lh3.googleusercontent.com/OBy7SRr7BN2VUU5OUWtsaAibNyZXWmP6eI3fnfs00Q5OPnN2Xkvc7U8cyptnfu4dnnY=w2400" width="600">
            `,
            `test`
        ],
        //"page": "404.html"
    },
    {
        "description": "First day of travel (to Germany on plane!!) and I already felt like death. I was very tired. Lots of cool photos though!",
        "date": "06/27/2022",
        "image": "img/arrival_fumo.jpg",
        "image-count": 18,
        "slides": [
            `
            <p>The trains at the airport were really neat, since they just went between the different parts of the airport. It's like a tiny city! The trains were very half-lifey. From the outside all you see is the entrance, but it goes really far backwards as well as down.</p>
            <p>I remember not knowing what the security parts were for (hint: they're for security). Knowing now of all the dangers that humanity poses to itself is really quite sobering. Also I liked putting my stuff on the conveyer, it disappeared into a funny box :3</p>
            <img src="https://lh4.googleusercontent.com/UZNlDjqlt4qBq_qz1hyeBOekYyA5REpmVi518yZ12-8zgWX8QtowLE6hlOMajwKS6Wo=w2400" width="300">
            <img src="https://lh5.googleusercontent.com/VNddOP67HQC53ippeFOfSb1A8t55iSFcs99Ne4k3gwiNbaj34Kuw4QL9wg52D768jZs=w2400" width="300">
            <img src="https://lh3.googleusercontent.com/rCHsJ0tL7ykG3gBasgFhShdKxvgLSnajhDP3vwuQF3PTjZyRoF9E5-MgmegNGuO2Svw=w2400" width="300">
            `,
            `
            <p>In the airport proper, we had pizza and (yeah) chick file. I'm super sorry #june fans. super my bad moment</p>
            <img src="https://lh3.googleusercontent.com/yrpPKVbdJvTquROIaNJmlFoqtC_g_6-z0U4TPxu-_vpiKzdl5P02dqJfLYBHC58kRSE=w2400" width="300">
            <img src="https://lh3.googleusercontent.com/-NzibBxPmka4a6loHsZ7i0CppwcRZIXTo5I19wFxjAv_c1nqaaB010wS62SkocY0y4M=w2400" width="300">
            <img src="https://lh6.googleusercontent.com/GXS6LW-LcckzRU3qG4ZI-yynwn5bP40Ncx-h2P-mCCnDy8Lo5SQn3yj8bSEyuzB6ke0=w2400" width="300">
            `,
            `
            <h1>fumo in ta waiting place!!!!1!</h1>
            <img src="https://lh6.googleusercontent.com/6c_iEK6WX5WIec4dSs3RNTO7JHIs8RdqNCpCIE_g352iQchfhz-qd6QpWCi8d8QwdCw=w2400" width="600">
            `,
            `
            <h1>fumo in TA PLANE!!!!!!!!11!!!!!11!11!!!!11!1</h1>
            <img src="https://lh6.googleusercontent.com/61F1d56c3fsb5nXolKe9IJ1objjWLj95ZF3F_S0SULQOompzwuOJHgUQ1jZ7nnXeL2o=w2400" width="600">
            `,
            `
            <p>German is a coool language, they have agreement in plurality and velar fricative and it sounds nice</p>
            <p>also ignore my tiger socks</p>
            <p>that is all <3</p>
            <img src="https://lh6.googleusercontent.com/gGdtxrRq18HKhWDzLhm9GB8v4WIe_YdvkVgBAA51ZBJd4KNqVc9LuE2rb6WW1i0IUfg=w2400" width="600">
            `,
            `
            <p>the live action Kaguya movie (the second one? this had the ending and everything) was SO GOOD. I almost cried more than twice also Ishigami is my favourite <3</p>
            <img src="https://lh5.googleusercontent.com/1ruoPJcVNBm6i7Rv26n9N-Rl81d03LpRFekYTjRqAn_uDG_BVFjAobJu1n_uA_yiEhk=w2400" width="300">
            <img src="https://lh3.googleusercontent.com/JHia4xNcRoGU16DUYRcExDWgQaTnqIlpLFpKivMkjwVn02YebcALMLuy89cVjEQUs3A=w2400" width="300">
            <img src="https://lh3.googleusercontent.com/gYMu4l3kQSsmDQV8D2S9AX6_vllU9MWggdTsSDTBYHo4rerYbnbULZV9DvtXketyx7E=w2400" width="300">
            `,
            `
            <p>saw the black forest (in Germany) and ate pretzel (in Germany) no one cares about the black forest though</p>
            <img src="https://lh3.googleusercontent.com/VcyP97L3LSd9sWjbw_uhmZpxwvuEWqFqQVKDJFgqjLca_g8OfQgTeIg1jFSo0Wf9zvw=w2400" width="600">
            `,
            `
            <p>found this egg vendor in Germany, cropped it so you can't see me though B)</p>
            <img src="https://lh4.googleusercontent.com/xvJfN6zApL6jaPJemr5YOoWCXoNQD1QB8s6VwgkdWXpxdUq9YrRQSCbFPjNBJPpPFH0=w2400" width="600">
            `,
            `
            <p>tunnel as we go from Germany to Austria where we'll be staying for two days</p>
            <img src="https://lh3.googleusercontent.com/pz9cJDD-O6wXbpaV6xZcEHyGrMZMrmood6QWKrpEQbzRKztwmwfI7wnEGOlGRXRkxOU=w2400" width="600">
            `,
            `
            <p>there were these castles!! they're a bit blurry since we were very far, and also driving. did you know that Europeans are allowed to drive 100 instead of only 60??? crazy</p>
            <p>This is the end slide <3 if you have any comments go to my twitter <a href="https://twitter.com/kitsumitsu46">@kitsumitsu46</a> I would love to hear from you <3<3<3</p>
            <img src="https://lh6.googleusercontent.com/A7bpOpotLTZmK0v0xdGTY3lTcP7b2odUYKP88ttQckLb3mOnoPFwr1YBGaTJrvR9S8A=w2400" width="400">
            <img src="https://lh3.googleusercontent.com/weM44Teg8t5joDE_ME9KJWKmWJk7UQ7aBunzESOsvX64sB9qOjk1I0VYKhcD8CDmUok=w2400" width="400">
            <p>verboten</p>
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
