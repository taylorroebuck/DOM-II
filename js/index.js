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
const scaryBus = document.querySelector(".img-content img");
console.log(scaryBus);

window.addEventListener("resize", () => {
    scaryBus.src="https://images.unsplash.com/photo-1548857925-ffaee7590b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
})

//mousemove(7)
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("mousemove", () => {
        el.style.textTransform = "uppercase";
        el.textContent = "This bus only goes to Cleveland! Scary!";
        el.style.color = "red";
        el.style.backgroundColor = "black";
    })
})

//drag/drop(8)
const adventureAwaits = document.querySelector(".inverse-content img");

adventureAwaits.addEventListener('dragstart', moveImage);
function moveImage() {
    this.style.display = 'none';
    const imgMoved = document.createElement('img');
    imgMoved.src= "https://live.staticflickr.com/8039/29090266354_dcffd09f38_b.jpg";
    imgMoved.style.width = "35%";
    imgMoved.style.borderRadius = "10px";
    imgMoved.style.padding = "1%";
    const newAdventure = document.querySelector('.inverse-content');
    newAdventure.prepend(imgMoved);
};

//keydown(9)
document.querySelectorAll("p").forEach(el => {
    window.addEventListener("keydown", () => {
        el.textContent = "No wifi! Noooo!";
    });
});

//scroll(10)
const images = document.querySelector(".intro img");

window.addEventListener("scroll", () => {
    images.style.display = "none";
});

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