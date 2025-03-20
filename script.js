const king = document.getElementById("evermond");
const barsad = document.getElementById("barsad");
const darney = document.getElementById("darney");
let darkPg = false;
king.addEventListener('mouseenter', function() {
    console.log("Mouse is over the image");
    document.getElementById("evermon").innerHTML = "A rich wine that is served cold in a pale mask of a cup. A fine cup of wine for those ignorant enough to try it "
});
king.addEventListener('mouseleave', function() {
    console.log("Mouse left the image");
    document.getElementById("evermon").innerHTML = "⠀"
    
});

barsad.addEventListener('mouseenter', function() {
    console.log("Mouse is over the image");
    document.getElementById("spyT").innerHTML = "An adventurous wine only for the selfish. Served in its spectacular facade, best for those  ignorant enough to try it."
});
barsad.addEventListener('mouseleave', function() {
    console.log("Mouse left the image");
    document.getElementById("spyT").innerHTML = "⠀"
    
});

darney.addEventListener('mouseenter', function() {
    console.log("Mouse is over the image");
    document.getElementById("niceGuy").innerHTML = "A cold herbal liquor best served with some Chateau Haut-Brion. Served in the same pale cup. "
});
darney.addEventListener('mouseleave', function() {
    console.log("Mouse left the image");
    document.getElementById("niceGuy").innerHTML = "⠀"
    
});


function myFunction(){
    console.log("TEST");
    let response = document.getElementById("userResponse").value;
    darkPg = true;
    console.log(response);
    let cC = 0;
    if(response == "!#*@"){
        alert("But when it is ready, it takes place, and grinds to pieces everything before it. In the meantime, it is always preparing, though it is not seen or heard. That is your consolation. Keep it.")
    }

    if (response == "Jacques"){
        console.log("correct");
        

        document.body.style.backgroundColor = `rgb(${cC}, ${cC}, ${cC})`;
        document.getElementById("barsad").src = "photos/John Barsad.jpg"
        document.getElementById("evermond").src = "photos/ded evermond.png"
        document.getElementById("darney").src = "photos/darney.webp"
        document.getElementById("defarge").innerHTML = "But it is your weakness that you sometimes need to see your victim and your opportunity, to sustain you. Sustain yourself without that. When the time comes, let loose a tiger and a devil; but wait for the time with the tiger and the devil chained—not shown—yet always ready"
        document.getElementById("V").innerHTML = "I willingly obey the orders of my Chief"
        document.getElementById("MOR").innerHTML = "On the top of the gallows is fixed the knife, blade upwards, with its point in the air. He hung there forty feet high– and was left hanging, poisoning the water"
        document.getElementById("Wood").innerHTML = "-Wood Sawyer"
        document.getElementById("Vengence").innerHTML = "-Jaques"
        document.getElementById("king").innerHTML = "-Monseigneur"
        document.getElementById("fakeKing").innerHTML = "- Charles Darney"
        document.getElementById("spy").innerHTML = "-John Barsad"

        const show = document.querySelectorAll(".show");
        for (let i = 0; i < show.length; i++) {
               console.log("Repeat");
               show[i].style.color = "white";
             }

        
        


    
        
    }
}

