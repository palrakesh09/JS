let buttons = document.querySelector(".buttons");
buttons.style.display = "flex";
buttons.style.alignItems = "center";
buttons.style.justifyContent = "center";
buttons.style.marginTop = "60px";

let btn1 = document.querySelector(".btn1");
btn1.innerHTML = "Follow";
btn1.style.padding = "5px 25px";
btn1.style.color = "white";
btn1.style.backgroundColor = "#405de6";
btn1.style.border = "1px solid #405de6";
btn1.style.borderRadius = "5px";
btn1.style.cursor = "pointer";
btn1.style.marginRight = "15px";

btn1.addEventListener("click", () => {
    if (btn1.innerHTML === "Follow") {
        btn1.innerHTML = "Following";
        btn1.style.padding = "5px 25px";
        btn1.style.color = "white";
        btn1.style.backgroundColor = "black";
        btn1.style.border = "1px solid black";
        btn1.style.borderRadius = "5px";
        btn1.style.cursor = "pointer";
    } else {
        btn1.innerHTML = "Follow";
        btn1.style.padding = "5px 25px";
        btn1.style.color = "white";
        btn1.style.backgroundColor = "#405de6";
        btn1.style.border = "1px solid #405de6";
        btn1.style.borderRadius = "5px";
        btn1.style.cursor = "pointer";
    }
});

let btn2 = document.querySelector(".btn2");
btn2.innerHTML = "subscribe";
btn2.style.padding = "5px 25px";
btn2.style.color = "white";
btn2.style.backgroundColor = "#ff0000";
btn2.style.border = "1px solid #ff0000";
btn2.style.borderRadius = "5px";
btn2.style.cursor = "pointer";

btn2.addEventListener("click", () => {
    if (btn2.innerHTML === "subscribe") {
        btn2.innerHTML = "Unsubscribe";
        btn2.style.padding = "5px 25px";
        btn2.style.color = "white";
        btn2.style.backgroundColor = "#c5c6cbff";
        btn2.style.border = "1px solid #c5c6cbff";
        btn2.style.borderRadius = "5px";
        btn2.style.cursor = "pointer";
    } else {
        btn2.innerHTML = "subscribe";
        btn2.style.padding = "5px 25px";
        btn2.style.color = "white";
        btn2.style.backgroundColor = "#ff0000";
        btn2.style.border = "1px solid #ff0000";
        btn2.style.borderRadius = "5px";
        btn2.style.cursor = "pointer";
    }
})