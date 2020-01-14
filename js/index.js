// Your code goes here

//click(1)
document.querySelectorAll(".logo-heading").forEach( el => {
    el.addEventListener("click", () => {
        el.style.textTransform = "uppercase";
        el.style.color = "red";
        el.style.backgroundColor = "black";
        el.textContent = "Scary Bus";
    })
})

//mouseover(2)
const introImg = document.querySelector(".intro img")
console.log(introImg);

introImg.addEventListener("mouseover", () => {
    introImg.style.transform = "scale(1.1)";
    introImg.src="img/mean-bus.jpg"
})

//mouseleave(3)
introImg.addEventListener("mouseleave", () => {
    introImg.style.transform = "scale(1)";
    introImg.src="img/fun-bus.jpg"
})

//dblclick(4)
document.querySelectorAll(".intro h2").forEach(el => {
    el.addEventListener("dblclick", () => {
        el.style.textTransform = "uppercase";
        el.style.color = "red";
        el.textContent = "You'll regret this!"
    })
})

//load(5)
// window.addEventListener("load", () => {
//     alert("Turn back while you can!");
// })

//resize(6)
const 

//stop propagation
const body = document.querySelector('body');

body.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    body.style.color = "red";
})

const contentSection = document.querySelector('.content-section')

contentSection.addEventListener("click", () => {
    contentSection.style.backgroundColor = "red";
    contentSection.style.color = "black";
    event.stopPropagation();
})

//preventDefault
// const stopNavLink = document.querySelectorAll(".nav-link");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("stopped refresh");
    });
})

// stopNavLink.addEventListener("click", (stop) => {
//     stop.preventDefault();
//     console.log("stopped nav link")
// })