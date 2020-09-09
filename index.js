var click = document.querySelectorAll("button");

let len = document.querySelectorAll("button").length;

console.log(click);

for (let i = 0; i < len; i++) {
    click[i].addEventListener("click", function () {
        var butValue = this.innerHTML;
        console.log(butValue);
        if (butValue === "Start") {
            document.querySelector(".change").innerHTML =
                "Please choose your option!";
            document.querySelector("#start").disabled = true;
            enableRock();
            enablePaper();
            enableScissor();
        }
        else if (butValue === "Retry") {
            document.querySelector(".change").innerHTML =
                "Please choose your option!";
            document.querySelector("#start").disabled = true;
            enableRock();
            enablePaper();
            enableScissor();
        }
        else {
            let ran = click[Math.floor(Math.random() * 3)].innerHTML;
            document.querySelector("#com"+ran).style.border="2px solid black";
            console.log(ran);
            check(ran, butValue);
            setTimeout(function () {
                document.getElementById(butValue).style.border = "none"
            }, 2000);
            setTimeout(function () {
                document.querySelector("#com"+ran).style.border = "none"
            }, 2000);
        }
    });
}
function check(ran, butValue) {
    document.getElementById(butValue).style.border = "2px solid black";
    if (ran === "Rock" && butValue === "Paper") {
        win();
        document.querySelector(".change").innerHTML = "Yeah You Win!!";
        document.querySelector("#start").innerHTML = "Retry";
        setTimeout(function () {
            document.querySelector("#start").disabled = false;
        }, 2000);

        disableRock();
        disablePaper();
        disableScissor();

    }
    else if (ran === "Rock" && butValue === "Scissor") {
        loose();
        document.querySelector(".change").innerHTML = "OOP's You Loose!";
        setTimeout(function () {
            document.querySelector("#start").disabled = false;
        }, 2000);
        document.querySelector("#start").innerHTML = "Retry";
        disableRock();
        disablePaper();
        disableScissor();
    }
    else if (ran === "Paper" && butValue === "Rock") {
        loose();
        document.querySelector(".change").innerHTML = "OOP's You Loose!";
        setTimeout(function () {
            document.querySelector("#start").disabled = false;
        }, 2000);
        document.querySelector("#start").innerHTML = "Retry";
        disableRock();
        disablePaper();
        disableScissor();
    }
    else if (ran === "Paper" && butValue === "Scissor") {
        win();
        document.querySelector(".change").innerHTML = "Yeah You Win!!";
        setTimeout(function () {
            document.querySelector("#start").disabled = false;
        }, 2000);
        document.querySelector("#start").innerHTML = "Retry";
        disableRock();
        disablePaper();
        disableScissor();
    }
    else if (ran === "Scissor" && butValue === "Rock") {
        win();
        document.querySelector(".change").innerHTML = "Yeah You Win!!";
        setTimeout(function () {
            document.querySelector("#start").disabled = false;
        }, 2000);
        document.querySelector("#start").innerHTML = "Retry";
        disableRock();
        disablePaper();
        disableScissor();
    }
    else if (ran === "Scissor" && butValue === "Paper") {
        loose();
        document.querySelector(".change").innerHTML = "OOP's You Loose!";
        setTimeout(function () {
            document.querySelector("#start").disabled = false;
        }, 2000);
        document.querySelector("#start").innerHTML = "Retry";
        disableRock();
        disablePaper();
        disableScissor();
    }
    else {
        draw();
        document.querySelector(".change").innerHTML = "DRAW!";
        setTimeout(function () {
            document.querySelector("#start").disabled = false;
        }, 2000);
        document.querySelector("#start").innerHTML = "Retry";
        disableRock();
        disablePaper();
        disableScissor();
    }
}
function disablePaper() {
    document.querySelector(".disPap").disabled = true;
}
function enablePaper() {
    document.querySelector(".disPap").disabled = false;
}
function disableRock() {
    document.querySelector(".disRock").disabled = true;
}
function enableRock() {
    document.querySelector(".disRock").disabled = false;
}
function disableScissor() {
    document.querySelector(".disSci").disabled = true;
}
function enableScissor() {
    document.querySelector(".disSci").disabled = false;
}
function win(){
    var audio=new Audio("sound/win.mp3");
    audio.play();
}
function loose(){
    var audio=new Audio("sound/loose.mp3");
    audio.play();
}
function draw(){
    var audio=new Audio("sound/draw.mp3");
    audio.play();
}
