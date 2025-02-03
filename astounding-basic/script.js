let hamburger = document.querySelector(".hamburger")
let nav = document.querySelector(".top-nav")

nav.style.display = "grid"

function MenuToggle() {
    console.log("Menu Toggle")
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "grid"
    } else {
        nav.style.display = "none"
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.style.display = "grid"
    } else if (nav.style.display !== "grid") {
        nav.style.display = "none;"
    }
})

hamburger.addEventListener("click", MenuToggle)