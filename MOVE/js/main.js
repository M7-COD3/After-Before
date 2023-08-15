const myStyleLinks = document.querySelector(".myStyleLinks");
const menu = document.querySelector(".menu");
myStyleLinks.addEventListener("click", verMenu);
function verMenu(classse) {
    $("." + "myStyleLinks").hide();
    $("." + "menu").slideDown();
    tirar.style.color = "red";
}

const tirar = document.querySelector(".tirar");
tirar.addEventListener("click", tirarfunction);
function tirarfunction(classe) {
    $("." + "menu").hide();
    $("." + "myStyleLinks").show();
}


