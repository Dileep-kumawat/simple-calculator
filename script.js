let dark = true
function introduction() {
    let string = document.querySelector("#one").textContent.split('');
    let clutter = ""
    string.forEach((e) => {
        clutter += `<span>${e}</span>`;
    });
    document.querySelector("#one").innerHTML = clutter;
    string = document.querySelector("#two").textContent.split('');
    clutter = "";
    string.forEach((e) => {
        clutter += `<span>${e}</span>`;
    });
    document.querySelector("#two").innerHTML = clutter;
    const tl = gsap.timeline()
    tl.from("#one span,#two span", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2
    });
    tl.to("#intro", {
        scale: 20,
        display: "none",
        duration: 1
    });
    tl.from("main", {
        scale: 0,
        opacity: 0,
        duration: 0.4
    });
    tl.from("main #toogle", {
        y: "-200%",
        opacity: 0,
        duration: 0.5
    }, "same");
    tl.from("main #calc", {
        y: "200%",
        opacity: 0,
        duration: 0.5
    }, "same");
    tl.from("main #calc button", {
        opacity: 0,
        scale: 0,
        stagger: 0.1
    })
}
introduction()
function calculate() {
    gsap.to("#calculation", {
        y: "-150%",
        fontSize: "1.5rem",
        duration: 0.2,
        color: "#70747A"
    });
    const expression = document.getElementById("calculation").textContent;
    try {
        const result = parseFloat(eval(expression).toFixed(3));
        if (result != undefined) {
            document.getElementById("result").innerHTML = result;
        }
    } catch (err) {
        document.getElementById("result").innerHTML = "syntax error";
    }
}
function deleteLastToken(expression = document.getElementById("calculation").innerHTML) {
    // Trim trailing whitespace
    expression = expression.trim();

    // Remove the last number or operator using regex
    document.getElementById("calculation").innerHTML = expression.trimEnd().slice(0, -1).trimEnd();
    // document.getElementById("calculation").innerHTML = expression.replace(/([\d.]+|\D+)$/, '');
    gsap.to("#calculation", {
        y: "0%",
        fontSize: "3rem",
        duration: 0.2,
        color: "white"
    });
    document.getElementById("result").innerHTML = "";
}
function allClear() {
    document.getElementById("calculation").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}
function toogle() {
    const body = document.querySelector("body");
    const tog = document.querySelector("#toogle");
    const calc = document.querySelector("#calc");
    const button = document.querySelector("button");
    const toogle = document.getElementById("overlay");
    if (dark == true) {
        gsap.to(toogle, {
            left: "50%"
        });
        document.querySelector("#calculation,#result").style.color = "black";
        document.querySelector("main").style.backgroundColor = "#EEF2F5";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        tog.style.backgroundColor = "#ECF0F3";
        calc.style.backgroundColor = "#e3e3e3";
        gsap.to("button", {
            backgroundColor: "white",
            boxShadow: "0 0 10px white"
        });
        gsap.to(".white", {
            color: "black"
        });
        gsap.to("#overlay", {
            backgroundColor: "rgba(156, 156, 156, 0.62)"
        });
        dark = false;
    } else {
        gsap.to(toogle, {
            left: "0%"
        });
        document.querySelector("main").style.backgroundColor = "#1c1d23";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        tog.style.backgroundColor = "#2C2D35";
        calc.style.backgroundColor = "#2C2D35";
        gsap.to("button", {
            backgroundColor: "#1c1d23",
            boxShadow: "0 0 10px black"
        });
        gsap.to(".white", {
            color: "white"
        });
        gsap.to("#overlay", {
            backgroundColor: "rgba(0, 0, 0, 0.623)"
        });
        dark = true;
    }
}
function addNumber(num) {
    if (dark == false) {
        gsap.to("#calculation", {
            y: "0%",
            fontSize: "3rem",
            duration: 0.2,
            color: "rgb(40, 39, 39)"
        });
    } else {
        gsap.to("#calculation", {
            y: "0%",
            fontSize: "3rem",
            duration: 0.2,
            color: "white"
        });
    }
    document.getElementById("result").innerHTML = "";

    const calc = document.querySelector("#calculation");
    calc.innerHTML += num;
}
function plusMinus() {
    let express = document.getElementById("calculation").innerHTML;
    if (express[0] == '-') {
        document.getElementById("calculation").innerHTML = document.getElementById("calculation").innerHTML.slice(2);
    } else {
        document.getElementById("calculation").innerHTML = '- ' + document.getElementById("calculation").innerHTML
    }
}
