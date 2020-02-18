class NewText {

    constructor() {

        let h1 = document.createElement("h1");
        let btn = document.createElement("button");
        document.getElementById("app").appendChild(h1);
        h1.innerHTML = "You Lost!";
        h1.style.zIndex = "500";
        h1.style.color = "Black";
        h1.style.fontSize = "6em";
        h1.style.fontFamily = "Passion One";
        h1.style.fontWeight = "400";
        h1.style.position = "absolute";
        h1.style.top = "290px";
        h1.style.left = "210px";
        h1.style.textTransform = "Uppercase";

        document.getElementById("app").appendChild(btn);
        btn.innerText = "Try Again";

        btn.style.zIndex = "500";
        btn.style.color = "black";
        btn.style.backgroundColor = "white";
        btn.style.borderRadius = "5px";
        btn.style.fontSize = "2.5em";
        btn.style.fontFamily = "Passion One";
        btn.style.fontWeight = "200";
        btn.style.position = "absolute";
        btn.style.top = "470px";
        btn.style.left = "300px";
        btn.style.cursor = "pointer";


        btn.addEventListener("click", function () {
            document.getElementById("app").removeChild(btn);
            document.getElementById("app").removeChild(h1);
            // gameEngine.gameLoop();
            window.location.reload();






        });

    }






}

