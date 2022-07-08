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
        "description": "I am a lazy person, so most of these pictures are of places I didn't really wanna be and also food. Yum!",
        "date": "07/08/2022",
        "image": "img/croatia2.jpg",
        "image-count": 23,
        "slides": [
            `
            <p>para</p>
            <img src="img/kitsu_.png" width="600">
            `
        ]
    },
    {
        "description": "I hate the beach; Guess what Croatia has~ (if you said icecream at every corner then that's not the answer but it's so so true)",
        "date": "07/06/2022",
        "image": "img/croatia1.jpg",
        "image-count": 25,
        "slides": [
            `
            <p>This car ride across Hungary to Croatia made me discover Buddhism and my inner self worth.</p>
            <p>Just kidding I'm still mentally rolling around in a crater on mars B)</p>
            <img src="https://lh3.googleusercontent.com/WnM_RLMfZxnmeNsRMVZdRS3LFzRHCZocl9nE3N75VmNkN9PoYXtows8LrXJ4-k3mesE=w2400" width="200">
            `,
            `
            vroom vroom<br>
            <img src="https://lh4.googleusercontent.com/L2_I7yD4ZFlTKcM-UJCfpLdQbzXUojG0lXkwAlVxaz7A1crvlMYoLjsfGrINNgYKNTY=w2400" width="600">
            `,
            `
            <p>Stepping out of the car after that drive was like stepping into a new world--Croatia, specifically. It kinda like South Carolina except you can understand the locals a little more. Also a perfect time to show off my sunhat with a pretty pink bow I put on it! Not that I have a photo of that. Maybe next time</p>
            <img src="https://lh3.googleusercontent.com/7Nn0M8pwySFr8fVjjb8iD18BPoa3dXQomFHkW4waBIxb3NNFcgs6_wZ1ijDs2lPF5ig=w2400" width="600">
            `,
            `
            <h1>sus</h1>
            amongus<br>
            <img src="https://lh6.googleusercontent.com/pf_RtUQAy8mR12_83DaMFby4pAwvi4MbOYEF6jdNU5LvJ3RB2B-DfohqLlLHn2BsSwA=w2400" width="600">
            `,
            `
            <p>My first Croatian meal, the Quattro Stagioni, which translates to "four seasons." I have yet to find out which quarter represents which season. The only cheese one is winter, right? Are the sardines spring, autumn? Is it even in order?? Anyway, I think this might have been an Italian restaurant (it was called Trattoria Lili...)</p>
            <img src="https://lh6.googleusercontent.com/-_QbZxJ2N1Tp8AfA5vNcUAz2AY2fDkmMeatoMwXfCOgh2aBNnyn64jiUASV7ldXRjAY=w2400" width="600">
            `,
            `
            <p>The markets have so many oils, goodness. I got raspberries, and I held them under water for a bit to get them nice and clean. After draining them though, a little bug crawled out from behind one, and so I picked up that berry and began rotating it to keep it on top, which was really tricky as I was at the same time getting my phone to take a photo. I made the photo, which proved really tricky (not showing it because it's super poor quality and you can barely see the buggy). The buggy proceeded to fall, but I still felt pretty accomplished.</p>
            <img src="https://lh6.googleusercontent.com/FUAcy7Nu62xN3ilItvhRAHxh1Bw67TLfFGRZZaL1giM95Sxu1ojvWfYs3rU_DoWUWOw=w2400" width="400">
            <img src="https://lh4.googleusercontent.com/4VEjmEitnAIymkoRMOTt2OG6qbUq1SxzyPriSMUGio3pcbJaY6jECaDYv6xG_0KfEw0=w2400" width="400">
            `,
            `
            <p>I was originally excited when I saw this, as I have a bidet feature installed on my toilet at home. However, looking at this... contraption... I realized that this looked really funky and decided against operating it. Oh well...</p>
            <img src="https://lh4.googleusercontent.com/zqswWbfp1xpqsKXvaxaDs8OZKOsQqaP2dGwD1cgMM7bAJI9srFzoCVljdIhYTm9hys0=w2400" width="600">
            `,
            `
            <h1>the hell?</h1>
            troll comic? hello kitty?? big bang theory??? fortnite???????<br>
            <img src="https://lh5.googleusercontent.com/VqLTBBqpf2OAOe2W4GtI-U_Lkg6r01uTdBFpYzQFNx2QBmFM03Iv9EN0MrNNsa8-2Gs=w2400" width="400">
            <img src="https://lh6.googleusercontent.com/C2EiH3Y-mrj-ip8sH-Ke7qJQIUnUWNeUUnrYIDN5XV-iC73MIwzTFKoerw-9JK0sjrw=w2400" width="400">
            `,
            `
            worn city vibe<br>
            <img src="https://lh5.googleusercontent.com/Vf7mxkTHtoFrlfRmpTOnJvMl1WK2Il7KHlmT_PUPGmJYNtKkX_cptd0GZCZ-p7UWpKo=w2400" width="600">
            `,
            `
            <p>There was this little outpost fort thing, and it looks very quaint for what it was probably used for.</p>
            <img src="https://lh4.googleusercontent.com/BGIHeu4jDummcmwyVuUZ1kDl4V0GmX20fiQPUKxG4Uu73-RszTkm0hfBGhOo8tO2DPM=w2400" width="300">
            <img src="https://lh4.googleusercontent.com/lW5QXMuixinRPDdmC4polE_kKPqH-NPTAbDZL4S12Fl3Ba_tiuksV6VwOGgCYs5SLes=w2400" width="300">
            <img src="https://lh3.googleusercontent.com/OmolEz7qneCkz_H9quPVKyVek124tlvOuZ15aMLem3GbjiEtlyoWt5FR5edWeOJLgpo=w2400" width="300">
            `,
            `
            <p>Listen, I don't like the beach. Salt water sucks. So does sand. Irritating, ok? I'm <i>gonna</i> go in the water before leaving Croatia, but... just photos for now <3</p>
            <img src="https://lh5.googleusercontent.com/8sPdsceOr99R_bhxqeIu6TbyvMwC302x9dfwRlOhWqOL-7GZ7UwXujMkGCo8tOtyV7s=w2400" width="400">
            <img src="https://lh5.googleusercontent.com/kC6VSSyfJyq1vhbDi4bUyPVtkHH3VDUZq26YpIn20-YzCbWQAbnK3py8gQqRrfSAAPU=w2400" width="400">
            `,
            `
            <p>Let's play a game of... which of these was the side dish?!? On the left... a small serving of truffle pasta, and on the right... a tuna salad (like, a salad with tuna). They were both tasty and I finished neither, sorry</p>
            <img src="https://lh5.googleusercontent.com/CZSE6-zNbdBeu55B8bKSHYnPad6jKpmP3DuR89UxNX4Fglbj1Qg7ZQajvEVMdCyoZZw=w2400" width="400">
            <img src="https://lh5.googleusercontent.com/mVm2rXh8l--UWGbwesGJ6SYf5JR_MruLzj2MlZyIrb2ytDivFzTbHutOhvr6rULCxrg=w2400" width="400">
            `,
            `
            <p>While I was dreading having not finished my food at the table, look who showed up! They apparently slipped and fell on their tush before scrambling back up, though I didn't see it. And for those of you asking, I'm not referring to the guy in the top left. Weirdos.</p>
            <img src="https://lh3.googleusercontent.com/9qoAx_aMmXoiJUmBffjQt1ViepOTG0VsobqtJKq3dS6ZdlDR_CqRUfksCkJvC55tMqY=w2400" width="600">
            `,
            `
            water, so calming, anyway get me out of here it burns just standing here<br>
            <img src="https://lh3.googleusercontent.com/TeybMLXeGARr6RMrEYGxG1G0qGb0VJF_PnZoREQYoCymY6XfWw0qBI0DXn-9RdAhSGQ=w2400" width="600">
            `,
            `
            <p>Tiny boats, but not the smallest I've seen. I've crewed both smaller and larger sailboats before, though I guess not ones of this size...</p>
            <img src="https://lh4.googleusercontent.com/_hReZ92Tr0PuBvMuiDcACm8HIDq8Nhhdf5B9QMngeV6jXxoufwUqFCe7hWzWN3mMddU=w2400" width="400">
            <img src="https://lh4.googleusercontent.com/cPMH9oN6Y1k7TJ5ruKECLVEt2deFqeqldI9W_6uJx_hpbMcqEb5BRfHDNV_BhA6q9ks=w2400" width="400">
            <br>and just look at those barnacles on that line, sheesh
            `,
            `
            <p>Not the first gelato I had today; This one is mango and lemon. <i>Super</i> yummy.</p>
            <img src="https://lh4.googleusercontent.com/SeiviEWUfDnNyHshbnTC3EmCqpm1Vj2UT9ICoxpmblrD-xrz1ktLbfcafoaBS6KxoeU=w2400" width="600">
            `,
            `
            <p>I ate a šiš at a fast food place (pictured). Listen, the bread was the best part of this. It was so chewy, like a good flatbread, but thick... Also ate two palačinke (crêpe) with chocolate syrup, nutella, and icecream. It was so hot at first! They make 'em to order, which is neat! When we have them at home, they're cooled, so it's different. Also with jam. Mm. This is good too though <3</p>
            <img src="https://lh3.googleusercontent.com/EIk_zdKjPyLO9_HzsVP1khq4RiiFYC6I9Qio2oa5lIANStgECx3Zhjq3tkgHuiuQtQM=w2400" width="600">
            `,
            `
            <p>Meet me next time as I try and scrape the rest of Croatia out from the barrel and lather it into another post. Expect poppy playtime and beaches. Thanks for reading by the way! <3 <3</p>
            <img src="https://lh5.googleusercontent.com/qPjC-XX1V-2oGePfc2ay6lomhQYr9cwivhJGN4DiZ607uddDmgQv8trXl8cQMafZ37I=w2400" width="600">
            `
        ]
    },
    {
        "description": "Happy Fourth of July, from not-America (sorry Canadians that I didn't point out your celebration, but you don't care do you). I took pictures of more animals btw",
        "date": "07/04/2022",
        "image": "img/hungary2.jpg",
        "image-count": 23,
        "slides": [
            `
            <p>There were a bunch of sticky notes on a wall giving compliments to the homeowner of the apartment we were staying in (and now leaving). Many were in English, some were in Hungarian. As for me... (that last bit is my Chinese name btw, I put the bit in parenthesis because my name doesn't use the primary pronounciation of that character...)</p>
            <img src="https://lh3.googleusercontent.com/rcwZUJrdQYDrm3cg82BQGEXEQ5-7bikReLf2cvxp_DQjGRXTYa5Je6do87LwR-MGZIg=w2400" width="600">
            `,
            `
            <p>Visited the first of a few relatives. As such, the upcoming few images are the chickens and ducks that I was definitely frightening by being remotely near them. The two ducks (racing ducks?) I was chasing around and they did not like that. I must have done that like five times...</p>
            <img src="https://lh6.googleusercontent.com/mrS4eh36P6rQYCuOqJWNItkSTHD02qTxUfMKz4i7rBgHBUbWc5Z4mnyGyC6_1NIcOCQ=w2400" width="600">
            `,
            `
            small chickens and not small chickens<br>
            <img src="https://lh5.googleusercontent.com/onMoTxIFK70TzcLHG97IKK7tG28KQmXFt0MOSG7x3q0mBadYbfGD5W8-N8pNOo6-qx0=w2400" width="400">
            <img src="https://lh6.googleusercontent.com/NwXMv7Zj9q-fIpunbsrTN1KNnXpjaYAfAM-NE8tuNjgprnjbMuBCFj7lTxmD1kCy0uw=w2400" width="400">
            `,
            `
            <p>those are the duck's eggs. I also found one lying in some corner out in the sun. both the ducks are female, and apparently the eggs aren't eaten, so they kinda just sit around. poor duckies</p>
            <img src="https://lh5.googleusercontent.com/YdUgoF56P11ZVQtTdtPrLs3Lr1ZyT7Ubh4sdIs8YH7kuD-tGGdKdqgZ1WvY1kNDqKHg=w2400" width="600">
            `,
            `
            tomato eggs<br>
            <img src="https://lh3.googleusercontent.com/RIQ1VcQbbaRa4J5zElqoTmwfOeAOTlS38ib88jnm3MgAfSePq7I4QXVJXcjRxF0vPIE=w2400" width="600">
            `,
            `
            <p>ducks were shillin' underneath the tractor and I scared them off, kind of surprised me because I was just photographing the tractor and they were suddenly under it</p>
            <img src="https://lh4.googleusercontent.com/2yR7o4T92cSvwXoRVRNqLQkJ0QOiTgxZxV78yDKDmjguX98SRnUZKBHK2YQFJwKErdo=w2400" width="400">
            <img src="https://lh6.googleusercontent.com/X4f3_ojrr5KwIQL1uL2ucc3TJgULkROWyW6HcZdaH3yhBTrbvagNnvdK8DaUkRao3Eg=w2400" width="400">
            `,
            `
            <p>there was also a dog (partially deaf, or fully deaf it's kinda hard to tell with animals). You gotta admit that I'm kinda crazy at photography (why, yes! I <i>am</i> open to compliments in my dms)</p>
            <img src="https://lh5.googleusercontent.com/lsvAuJh-gL0-1KUYTwtR7-0J6CEG_aOvT5_fNFyyXmhw-MoDN8CyMQcqM2pDYfsED1A=w2400" width="400">
            <img src="https://lh3.googleusercontent.com/sux-g7d2x8KPc2Y9mN3_4Xjb_Bn2Yu3G8qyleLpnRsDNX9IvJpHIymORZIA2tuOxBIE=w2400" width="400">
            `,
            `
            <p>Decommissoned jet and heli that they just threw in the middle of a roundabout in the middle of Nowhere, Hungary. At least they're eye-catching. I think the jet is an SR-something</p>
            <img src="https://lh5.googleusercontent.com/U5lPtEifh5i5hV8D4u44yBHY6qAJBn1DZ6xiGGWbe8-DnXxAO4UVGtHedN3ODfZju2I=w2400" width="400">
            <img src="https://lh5.googleusercontent.com/JuubiPuNkkeu_CON2pX7HwivYBraN5sKlUD0CMUaj5jGpr7O6a7-rmSlpgXywLrIze4=w2400" width="400">
            `,
            `
            <p>Okay, real talk here. I got these macarons in lieu of icecream (which was fine, they were good) BUT the fact that they were brittle really shocked me at first. Usually the ones from trader joes are nice and chewy, the outside shell and cream inside both. This completely crumbled in my mouth, and also it wasn't cold (like the trader joes ones, which is refridgerated), so I was mildly disappointed since it was actually scalding outside.</p>
            <p>Now, I thought that my favourite dessert were macarons. Maybe I only like the "fake" macarons? It's not that the brittle ones were bad, but I just like chewing on my macaron like it's a piece of raw meat--I'm kinda a predator like that, rawr~</p>
            <p>Also, that yellow one was quite nice. It was coconuty... piña colada?</p>
            <img src="https://lh4.googleusercontent.com/0TlHwTm5u-8l06-w0z_Bryos1RCqpUVIFOfQT8DINjuiFgW82lDoKEmzgrLwcVsNMvw=w2400" width="600">
            `,
            `
            <p>Other relatives had these five week old pups, and I know how much people like those. They play-fought a lot, approached me and then just sat down a lot, and slept the most (if you're curious, you'll be disappointed to learn that I did not pet them, because there was a chance they had worms)</p>
            <img src="https://lh4.googleusercontent.com/Gukp4WScTds6W3TU1QKUF-Wk7PCfTdP2cOoQYFqdIbRS6zb6V2vVb1T711WNl_GuA9w=w2400" width="400">
            <img src="https://lh4.googleusercontent.com/teElEBaLe9YOGm9exwnjfsfK1yIPlEMOm27vV9uQiZcXsaiEagSjBEmksjMpbrVl_8U=w2400" width="400">
            `,
            `
            <img src="https://lh5.googleusercontent.com/wdJKvsmbjaN4mFn62sqxFlBcxd4OmYwtW5QFv7p_6V64wEhheDedjuEQVW2YPT7vOQ8=w2400" width="400">
            <img src="https://lh6.googleusercontent.com/88H5K09VKMcsQH38z8DGnBPx7j2J3WJifmwz-p2n9sEnGDHVvV-Zpk3V1KIh3M5HkOU=w2400" width="400">
            `,
            `
            <img src="https://lh5.googleusercontent.com/CPM-xsxlg8Tn-AguQ9UlRP3Aqs_mCutLdrjOOqE8SnwdvFDGKe7YALeoFJyA0JsD7n4=w2400" width="400">
            <img src="https://lh4.googleusercontent.com/2-h_6wvuwHou-SuCPjOKHtkD2L01gbDsLin5f5Q8Ct7vrLQkNJi7_pVEsnIj2avvKJw=w2400" width="400">
            `,
            `
            all tuckered out<br>
            <img src="https://lh5.googleusercontent.com/BsqCivEvwRxbfWBXmMcAxHQZAudtxbfVwA8l68vlAIcuAo1Yr2sz4mcYbFV7ofR2pIU=w2400" width="600">
            `,
            `
            <p>The chickens liked to hop on you while you knelt down. At one point I had two chickens on me, but you're not getting any photos of that :3</p>
            <img src="https://lh5.googleusercontent.com/KaGX6_x58j5hG2taf_wFX-gYPtm15c70T7_dSs6UO_pFUSstLH68pKT4cQ_ZzgNjHCI=w2400" width="600">
            `,
            `
            <p>After that, I stayed in the hotel room for the rest of the day. I was extremely tired... Youtube shorts is more relaxing than sleep though so</p>
            <p>Everyone else got McDonalds, and I got a Hungarian exclusive: the McFarm. It's like a McDouble but with pork? It was noticably salty. It was good though! The vanilla milkshake also tasted like whipped cream.</p>
            <p>That's it for Hungary, though! Tomorrow we'll be packing up and going off to the next destination, Croatia! I literally know nothing about that country other than it has beaches. PS, I don't like the beach.</p>
            <img src="https://lh5.googleusercontent.com/8jo2dKjmyuy6j9ovgF2Tsp3wVnBa0dJZbl3wBoI5OYdMnOq7UT_4C2xMq-KeQpS2En8=w2400" width="600">
            `
        ]
    },
    {
        "description": "Travelling to Hungary and staying in Budapest for a bit. Having been here before, everything feels familiar, though the amount of sunflowers is alarming.",
        "date": "07/01/2022",
        "image": "img/hungary1.jpg",
        "image-count": 25,
        "slides": [
            `
            <p>A little breakfast before leaving the hotel. This yogurt is only one tick more nutritious than those packing peanut snacks... and it didn't taste good either!!</p>
            <img src="https://lh5.googleusercontent.com/Mc1UEY5THEGPNq6Y4JrFBkRBH-D8QFdlLBooocjJDYGumB7glrKcRJx7vjIHRJB01ls=w2400" width="600">
            `,
            `
            <p>This is the elevator that was in the hotel. You can see inside it when it's not called. Also there's a limit of four people, though trying to cram that many in there may not be the best idea. Our room was on the fifth floor, the highest, too...</p>
            <img src="https://lh3.googleusercontent.com/E1PuecUMCFJgZtm7aKZmpxEaL5CFOWi8LJmTEwDesyN9HBB4eZb9bjO1Y4WWn0bW0-4=w2400" width="400">
            <img src="https://lh6.googleusercontent.com/gqRwMmTdwJv_T7E_DGH-Agd-5qUlEjhiad2g_5StHNMmVGv4V99ESeRNCfr_Es6p0Bo=w2400" width="400">
            `,
            `
            <p>Here's the cow I promised <3 there's more animals where this came from, but that will have to wait till next time since I've already got two days of pictures backlogged for this episode</p>
            <img src="https://lh3.googleusercontent.com/fwcrvdqVgTUUrQNu8EV213yR4msPJFSM-QZyv_KI8ZafMiyEX5m3_iQntbjtbu2PrQ0=w2400" width="600">
            `,
            `
            <p>Eco friendly--might as well use all that incredibly rural land for something. I mean I know environmental conservation exists, yeah ok</p>
            <p>You know what while we're on the topic of rural, the amount of animals here really encourages like, a <i>ton</i> of flies to just get up in my face, my goodness. While I'm writing this there's a fly that's bugging me and it's actually stressing me the hell out my gosh ;~;</p>
            <img src="https://lh4.googleusercontent.com/jVvOKpqC6LjwrN6VUjHdHHm_4OsjRHePKWwOKSlFAv0TYTzGJmFoWiIgBoE24jyg3cM=w2400" width="400">
            <img src="https://lh5.googleusercontent.com/HbO1MBw-p7belYpornzYZbhmH12BuN2FJJYP4IobdYGDDyZBbtDQnw9HVYv4-_yUUoM=w2400" width="400">
            `,
            `
            <p>I got the málna icecream (the first a is pronounced kinda like "ah," and the second kinda like "uh," I'd put <a src="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet">IPA transcription</a> but no one cares)</p>
            <img src="https://lh3.googleusercontent.com/vAr0ughBgklWZv5h8d-UVU-fesZfKRd9E3WSCWwefq5H4h1WHzNYk1IVCmbtuDh6ICs=w2400" width="600">
            `,
            `
            <p>there was a door that just opened to stairs in the icecream shop. this was how you're supposed to get to the <del>backrooms</del> restroom</p>
            <img src="https://lh3.googleusercontent.com/jbEUBYVrIoZ7kOclOYsx4Wjtxs2ik2esWuynWSHWeCRP40Cf0YrXpdh6kMH7Egl2DFE=w2400" width="300">
            <img src="https://lh3.googleusercontent.com/qgFZslLeo7kEiDcc7B2LOwkPRJveOBxCSxDD9fZR1qymZPALAoEMfJvO7NIb0PGRF2Q=w2400" width="300">
            <img src="https://lh3.googleusercontent.com/BeRHC2Ar9BA9e18z97L0QdZ8TCMhFiM38XZlWSJYN0n93bbgB8LxcaQyenNL64IHRKQ=w2400" width="300">
            `,
            `
            <p>So slight background, at home I'm usually spoken to in Hungarian, though I never really learned writing (it's dead easy, near-completely phonemic), and so I was shocked when I was told that the word for bathroom (pronounced "veh-tseh") is spelt WC. It's not an acronym of a word that actually exists in Hungarian, it's just loaned in. That's like if English had "TV" but the word "television" was German or something. That's actually killing me dude</p>
            <p>Oh by the way we visited this gigantic church and I only photographed the bathroom sign, coool</p>
            <img src="https://lh5.googleusercontent.com/3EJX_NdHWbGfB1oBotkw-2ArpHVjT5ZabV8UW_kygTekDxo5JNqutcgSekaibT-OZmY=w2400" width="600">
            `,
            `
            <p>a view from (ableit outside) the church grounds into the city/whatever that kind of water is called. Ignore the peach flying in from the left about to conk me in the noggin</p>
            <img src="https://lh3.googleusercontent.com/PErFyT8CvnHcHKnEOjWaHD8Ee1pVPFD-JQas0hic0L9wwhXBbrOpPhP5zOcaFtfdObM=w2400" width="600">
            `,
            `
            <p>We went to a restaurant but I was more tired than hungry, so I just ordered a plate of tomatoes. The waiter gave such a face, and asked (in Hungarian) if I knew that that was a side dish. I like tomatoes, ok?</p>
            <p>Another person who was with me got a beef stew, and it was like what, 2000 forint? Like 10ish dollars? Maybe a bit more than that. That thing could've fed four people--they didn't finish it. At least I finished my tomatoes >:3</p>
            <img src="https://lh5.googleusercontent.com/ReXHEG6Ne4NY_8a0ox98ZOOui91WHtEEh5i1oNQMheN4BzadzorFhB4Ivodtl9_2FPQ=w2400" width="600">
            `,
            `
            <p>The apartment we went to was such a surprise, considering the exterior complex looked like windows were busted out (they weren't, just some were foggy glass and some were so clear you'd think they weren't there). It was really quaint. Side note: why do these apartments keep putting the toilet separate from the sink? Like, in different, adjacent rooms?</p>
            <img src="https://lh3.googleusercontent.com/KCtSYP01aqqRFg2wMP0XkS_70PX_btcdkfXjy9FylHyZpUQb2z7J7p6wWbpdmek70tE=w2400" width="400">
            <img src="https://lh4.googleusercontent.com/MZ64CuccC_IECkLMBWejmPQSRewhgFpDhwzPld6fi0qRpTALIWywhznEfPTrs1slPB0=w2400" width="400">
            `,
            `
            <p>This was on the wall of the apartment too. Can you find the three countries that previous residents added? (answers on next slide)</p>
            <img src="https://lh4.googleusercontent.com/nPZsu53lshDTCsFRnsaZZ7GAVHWFKkj65D4laesN7vwOBxLVLupSBD40P2Yt28CXyuE=w2400" width="800">
            `,
            `
            <p>here they are (I lied there were only two haha)</p>
            <img src="https://lh4.googleusercontent.com/gPCwml0g8lCTuhPfKIqJ0kSjus1RzFPqjmv_i0t8WcpfV6KH6aNs0gl51dzVfI8BVHc=w2400" width="400">
            <img src="https://lh3.googleusercontent.com/yTlUqTFmrT3wTF2XTQ9GdBCRSzXMZ-_Y4MLXxoLnGoO3uMXVmX7_KIV5qiQ7NWOYpMY=w2400" width="400">
            `,
            `
            <p>guess what this building is for, you'll never get it <button onClick="alert('it's a horse stable (no I didn't see inside, I was just told that)');">click for answer</button></p>
            <img src="https://lh6.googleusercontent.com/EKDCMZcndV9dPBCvOJvOoRlPGuKFaYeU_ZmS08G6rM_dY--bJk2sntZcsmPwCh8Vemw=w2400" width="600">
            `,
            `
            <p>I had to walk to get this in weather that felt like I was being cheese gratered by flaming car tires my goodness</p>
            <img src="https://lh5.googleusercontent.com/1U-k6APGDVszlWrbfhykcOotTENqA-o1udoy1tquOaR_DiY8zcFKsV7c2ZoIae7cddY=w2400" width="600">
            `,
            `
            <p>Went to a big indoor marketplace, was nice. So many stalls with fruits, vegetables, baked goods, and meat oh my gosh. Side note I accidently ate horse for dinner (I neither noticed at the time nor thought it tasted funny, it was just a single sausage slide, it was really good and a bit oily?)</p>
            <img src="https://lh5.googleusercontent.com/8fBA3cNvMdL_-1WrkgsZc-fKIVguqmMr6EhZzHJxk0pimiitYaUc03mPigGpvNaBE20=w2400" width="300">
            <img src="https://lh6.googleusercontent.com/Mcesv8bkS0Kcu1lo0rCmRxWPqtfVwJQ_toMfQADG_vrx9MvOuOJFR4uDtTgV6SxcYjU=w2400" width="300">
            <img src="https://lh5.googleusercontent.com/x17uSO6VOJFZZT7oPgvubPL-sMZikYha-kFVd7f-jySp9MiomP2YPH5UnEm-FAUjkMA=w2400" width="300">
            `,
            `
            <p>no one else in the car noticed this</p>
            <img src="https://lh5.googleusercontent.com/kqqrST8jii5Ji90tViSl-_a9mzS4ZouHp_3vWBsaxywNtM-D4JEyzEWSC-hArCIpXb0=w2400" width="600">
            `,
            `
            <p>that's it for this time. next time expect a lot of animals as I visit some relatives who have a lot of animals 'cause this is a rural country I guess</p>
            <img src="https://lh6.googleusercontent.com/WN7nVXCnyVT2AnWZ-U5MYB4oGNCaBZBdijndC9KRVilDVfsgxquIEqXYYs-bj7I5GYg=w2400" width="600">
            `
        ],
        //"page": "404.html"
    },
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
