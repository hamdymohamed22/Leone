let drop_down = document.querySelector(".links .drop_down");
let links_ul = document.querySelector(".links ul");
let close_btn = document.querySelector("header .links .close");
let welcom_message = document.querySelector(".welcom");

drop_down.onclick = function () {
    links_ul.style.display = "block";
    close_btn.style.display = "block";
    drop_down.style.display = "none";
};

close_btn.onclick = function () {
    links_ul.style.display = "none";
    close_btn.style.display = "none";
    drop_down.style.display = "block";
};

function message() {
    welcom_message.innerHTML = " Enjoy";
    welcom_message.style.cssText = `top: -1000px; background-color: white; color:transparent `;
};


document.body.onload = setTimeout(message, 2000);