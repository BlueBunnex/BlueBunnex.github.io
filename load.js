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
        "description": "Moving through Austria, and there's some weird stuff along the way... Also if you speak German, Japanese, or Chinese read more (if you don't then still read more <3)",
        "date": "06/30/2022",
        "image": "img/austria.jpg",
        "image-count": 18,
        "slides": [
            `
            <p>Just look at those mountains. Bigger in-person, mind you.</p>
            <p>I forgot to mention in the previous post, but the trees in Europe are different than in the US. Sometimes they remind me of photos of Africa for some reason.</p>
            <img src="https://lh3.googleusercontent.com/OBy7SRr7BN2VUU5OUWtsaAibNyZXWmP6eI3fnfs00Q5OPnN2Xkvc7U8cyptnfu4dnnY=w2400" width="600">
            `,
            `
            <h1>POPPY PLAYTIME??</h1>
            in Austria?? omgo mg<br>why didn't I buy this bro omg >w<<br>
            <img src="https://lh5.googleusercontent.com/nsjC7oskUZYAGyL6zZxcI14GFsD-t4Kku08RzszEA36JDG1q6tT74reHBYLhsd5UbOk=w2400" width="600">
            `,
            `
            <p>this is the second vending machine we've seen with something weird in it. shirts this time, reading "I <3 Hallstatt" or something. no reflection this time because I geniously stood two steps to the right, <i>crazy</i></p>
            <img src="https://lh6.googleusercontent.com/3vSRuS4PuO9Jn7V1R9UrGN2Xaa55XpCUV54t-3vPxqwIzo2YMTsEUPse9zvEg21duxE=w2400" width="600">
            `,
            `
            <p>I mainly just photographed this because it had Japanese. Guess what it says!!!! Now that I'm looking at it I'm positive it only says "Hallstatts first salt," without the word shop... if you're Japanese correct me if I'm wrong <3</p>
            <img src="https://lh3.googleusercontent.com/DEJPw0s34VXe-cUe1ze4boAR2Fol0HGCF75u89PHzBPx4xmtfihKvO463wPdcaaWhF8=w2400" width="600">
            `,
            `
            <p>This is the "fitness salad," which was funny because I was able to fitness salad up my--</p>
            <p>throat</p>
            <p>Pretty sure that's veal on there, as in baby cow?? That kinda sucks man, hard L</p>
            <img src="https://lh4.googleusercontent.com/_DHJMK8ubsjxyU7xMy9qqFbjS_CNZTL46T_uI8dis9SaXaHrLNMRyY_UnoOvAIfVdrI=w2400" width="600">
            `,
            `
            <p>Some random garbage someone made into an art cabinet. Lots of computer parts from way back, like that broken mouse at the bottom. It has a ball on the bottom... and a wheel? Is that the scroll wheel sticking out the bottom??</p>
            <p>As for the multiple languages, since I'm learning Chinese, I'm curious: I can read the second Chinese character, huà, it means something around "speech," but what's that first one? DM me <a href="https://twitter.com/kitsumitsu46">@kitsumitsu46</a> <3</p>
            <img src="https://lh6.googleusercontent.com/1dxmA5IBRwPuJK914uc3GyE9FflkZPMg8bkz3NO0vEaYlZMWaO92WO2FNPqIj1qR0mQ=w2400" width="400">
            <img src="https://lh3.googleusercontent.com/8i_vDIY6383xsJphz5OT2Ep67K10_kbItt2JpJCMXLlLJ6fOUIJqdlqzAVUWKwtPy7Q=w2400" width="400">
            `,
            `
            <p>there was a cat, wonder if it frequents this... flower shop</p>
            <img src="https://lh6.googleusercontent.com/_AF_x8bvblEQ9iKdSfUYZNeujHBQbZ384JnmwqD7pug9XzLxpGzsZ-I0ezBbZIZMJvw=w2400" width="600">
            `,
            `
            <p>only photographed this because I could read the Chinese!!</p>
            <p>...not that first part, the second one (Chinese speakers if you're still reading help me out here)</p>
            <img src="https://lh6.googleusercontent.com/rjipZSEWLsvk8UIZxHkZfD85qwD0Ps9K1JxUoc1Tc8cJziWtLC9qW3hjhFAztiVc4xY=w2400" width="600">
            `,
            `
            <p>Stairs with a lot of languages reading "time travel"--even Hungarian, which I can read. "Utazás az időben" translates to "travel in the time." I found that neat, at least. As for Japanese, they are a bit more direct... Also Korean still gives me shivers (I think we passed some people speaking it and I remembered back to it's phonology and wasn't actually scared I'm just playing it up)</p>
            <img src="https://lh4.googleusercontent.com/PBefR__41PSK02nJRbu0Td8hnVbCVBun75VFr-QuIdq8dlZmdl_ztiUckz6IAe6tg1k=w2400" width="600">
            `,
            `
            I lost...<br>
            <img src="https://lh4.googleusercontent.com/krTTULg73pl7C1NSHWdTl4dFCpeNUvOjB8wpIoG0sC2vukLEHhuEG_BYtyCiqwoPcPI=w2400" width="600">
            <br>chess people will comment which color I was (and how trash I am)
            `,
            `
            <p>Just a nice view. Before this, we got icecream, I got lemon. Afterwards, we also got icecream, and I got green apple (apfel!). That was a really good flavour...</p>
            <p>By the way, I'm actually standing by a church. There was a cramped room you had to pay to enter (I think), and inside there was just hundreds of human skulls all facing you, with the names of the person inked on them, many with designs like snakes. Each skull was in various stages of calcification... Underneath the tables they were on were straight up bones lined up like books, and in the back the skulls that were unnamed were tossed willy-nilly into a pile. Evidently there was a sign saying to not take photos. It was really eerie, some of the skulls were ancient...</p>
            <img src="https://lh5.googleusercontent.com/ReT20Dy8-9gfpFl26MMjoWPVav4qinkkOIQBamhC1eC_pmtZhGINfPYF1N8YwnQq1O8=w2400" width="600">
            `,
            `
            <p>wouldn't it be cool if you made this your OC and got laughed at by me specifically</p>
            <img src="https://lh5.googleusercontent.com/-ZOUhY8OxQtiox7utb4Ee8neP4Vtvf56cQ3c2HmuqRB6jhYHTNBoBGGMpem5J9j8HdI=w2400" width="600">
            `,
            `
            <p>Ok, Germans, your turn. What does <3-lich mean? It seems really interesting because thinking about it, it could be a few things. "With heart"? "Hearting"? This isn't the only time I saw it, either--it was in the hotel too on the whiteboard.</p>
            <p>Another thing that doesn't have a picture but is related, is that when I went in the hotel poolroom there was big text on the wall with German and English: "Pool and spa rules." In German though, I realized that since "pool rules" and "spa rules" were one word due to German compounding, they wrote something along the lines of "pool- and sparules" with a hyphen to indicate that it's split from the rest of the word. I thought that was super cool.</p>
            <img src="https://lh3.googleusercontent.com/Rn9xrktkC1-4GftXIikHVEiSe4Jdr2W-fOn4NrbcCnflJraP9TDv2d83mssy5Fufnkw=w2400" width="600">
            `,
            `
            <p>Erdnüssen snack, which just means "earth nut"--peanut. Look at that nutri-score... at least they're honest. It tasted like a D, too...</p>
            <img src="https://lh5.googleusercontent.com/PuPlzh4uVMPLqk8Thhl77siLMBwC6kg5b7QtItCcYzTDTui0ZJVzMdMPtGfRXLodahs=w2400" width="600">
            `,
            `
            <p>Went to the glacier, though it was so foggy that driving up was quite scary (the drops are crazy). It passed after a while, leaving a view of... glaciers? Where are they???</p>
            <p>There was also another icecream cone statue up here, no I did not get a third icecream. Also skilifts that weren't running; This place is a ski zone in the winter. Those mountains look crazy to ski!</p>
            <p>There were cows too, and fences that were mildly electrified. Sometimes made a zapping sound--youch! No pictures of the cows, though. Only really saw one while going back down, and by then I was sick of taking photos. You'll get to see some cows in the next post about going to Hungary, though!</p>
            <img src="https://lh4.googleusercontent.com/wiOcsB1k9lFtfSA_B2fwdA_GbJLgBzQfAM6xI4QVk8bR7M1NuthL-eOMFv3YHCAR-_M=w2400" width="300">
            <img src="https://lh3.googleusercontent.com/nD2qtVXAMv2yhwnzFGnWbuZhZwyQAUHqliAXeXTCSkkHXgW6qq-Hq_uWDkCYJqCWYPY=w2400" width="300">
            <img src="https://lh5.googleusercontent.com/pkq5sxCR98ZJ4S8jpb8uBA1zAW2ChFKk74O3kmTLkWcXC7V1iKZQwBeSnVHxRmKoUsQ=w2400" width="300">
            `
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
