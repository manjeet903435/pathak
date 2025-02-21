
function agya(){
    let location = document.getElementById("location-box");
    let over = document.getElementById("overlay");
    location.style.display = "block";
    over.style.display = "block";
}

function gayab(){
    let location = document.getElementById("location-box");
    let over = document.getElementById("overlay");
    location.style.display = "none";
    over.style.display = "none";
}

function appearLogin(){
   var n1 = document.getElementById("login-box");
   let over = document.getElementById("overlay");
    n1.style.opacity= "1";
    over.style.display = "block";
}

function disAppearLogin(){
    var login = document.getElementById("login-box");
    let over = document.getElementById("overlay");
    login.style.opacity = "0"
    over.style.display = "none";
}


var ContinueBtn = document.getElementById("Continue");
 var number = document.getElementById("number")
 number.addEventListener("input",()=>{
    var val =number.value ;
    if(val.length < 10){
        ContinueBtn.style.backgroundColor = "grey";
    }else if(val.length = 10){
        ContinueBtn.style.backgroundColor = "green";
    }else if(val.length > 10){
        ContinueBtn.style.backgroundColor = "grey"; 
    }
 })


function openPharma(){
    let open = document.getElementById("pharmacy");
    open.style.display = "block"
}

function openCart(){
    document.getElementById("cart-collection").style.display = "block";
}

function closeCart(){
    document.getElementById("cart-collection").style.display = "none";
}

