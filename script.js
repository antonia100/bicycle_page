let isClicked = false;
let items = ['about', 'sources', 'contact'];

function bikeDownTheStreet() {
    isClicked = !isClicked;
    let bike = document.getElementById("bike");
    let button = document.getElementById("start-bike");
    button.disabled = true;
    let x = 0;
    let id = setInterval(frame, 1);
    function frame() {

        if(x===100){
            document.getElementById("info-bubble-1").style.visibility = "visible";
        }

        if(x===450){
            document.getElementById("info-bubble-2").style.visibility = "visible";
        }

        if(x===800){
            document.getElementById("info-bubble-3").style.visibility = "visible";
        }

        if (x === 1200) {
            button.disabled = false;
            clearInterval(id);
        } else {
            x++;
            bike.style.left = x + 'px';
        }
    }
}

function showMenuItem(itemName){
    document.getElementById(itemName).style.visibility = "visible";
    document.getElementById("start-bike").disabled = true;
    dim();

    for(let i = 0; i<3; i++){
        if(items[i]!==itemName){
            document.getElementById(items[i]).style.visibility = "hidden";
        }
    }
}

function dim(){
    document.getElementsByTagName("section")[0].style.opacity = 0.5;
}

function releaseDim() {
    document.getElementsByTagName("section")[0].style.opacity = 1;
    document.getElementById("about").style.visibility = "hidden";
    document.getElementById("sources").style.visibility = "hidden";
    document.getElementById("contact").style.visibility = "hidden";
    document.getElementById("start-bike").disabled = false;

}