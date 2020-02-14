class Start {
    constructor() {

        let logo = document.createElement("img");
        let btnStart = document.createElement("button");
        document.getElementById("app").appendChild(logo);
        logo.src = "images/logo.png";
        logo.style.zIndex = "500";
        logo.style.position = "absolute";
        logo.style.top = "290px";
        logo.style.left = "250px";
        logo.style.borderRadius = "25px";

        document.getElementById("app").appendChild(btnStart);
        btnStart.innerText = "START";

        btnStart.style.zIndex = "500";
        btnStart.style.color = "white";
        btnStart.style.border = "none";
        btnStart.style.padding = "5px 10px";
        btnStart.style.backgroundColor = "black";
        btnStart.style.borderRadius = "5px";
        btnStart.style.fontSize = "2.2em";
        btnStart.style.fontFamily = "Passion One";
        btnStart.style.fontWeight = "100";
        btnStart.style.position = "absolute";
        btnStart.style.top = "450px";
        btnStart.style.left = "310px";
        btnStart.style.cursor = "pointer";


        btnStart.addEventListener("click", function () {
            document.getElementById("app").removeChild(btnStart);
            document.getElementById("app").removeChild(logo);
            gameEngine.gameLoop();
            // window.location.reload();






        });

    }
}