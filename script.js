let darkPage = false;
function myFunction(){
    console.log("TEST");
    let response = document.getElementById("userResponse").value;
    console.log(response);

    if (response == "vin du Marquis"){
        console.log("correct");
        darkPage = true;
        
    }
}
