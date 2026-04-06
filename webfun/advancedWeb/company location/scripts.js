var axsosLocation=["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d326.39795328958496!2d35.20558913530532!3d31.925985978917307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d5563aa08807%3A0x20bfec9b0478fe4c!2sAXSOS%20AG!5e0!3m2!1sar!2s!4v1775474934301!5m2!1sar!2s",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169097.608585849!2d9.44791041101418!3d48.53035445649986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799edaa2659a295%3A0xec985221571c991!2sAXSOS%20AG!5e0!3m2!1sar!2s!4v1775476015984!5m2!1sar!2s",
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70915.91515234175!2d9.289165962951975!3d48.65904795350301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c2d08a8b08e3%3A0x8adceafef7db61d0!2sAXSOS%20AG!5e0!3m2!1sar!2s!4v1775476199920!5m2!1sar!2s"
];
var iframe = document.getElementById("map");

function change(el) {
    var index = 0;
    if(el.innerText == "Palestine") {
        el.innerText = "Metzingen";
        index = 1;
    } else if(el.innerText == "Metzingen") {
        el.innerText = "Stuttgart";
        index = 2;
    } else {
        el.innerText = "Palestine";
        index = 0;
    }
    iframe.src = axsosLocation[index];
}

