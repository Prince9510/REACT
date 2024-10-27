let pages = document.getElementById("pages")
let pagesInner = document.querySelector(".pages-inner")
let bar = document.querySelector(".bari")
let sideBar = document.querySelector(".side-bar")
let closeIcon = document.querySelector(".close-icon")
let sideMenuBtn = document.querySelector(".inner-side-menu")
let sideMenu = document.querySelector(".side-menu")
let monthly = document.querySelector(".monthly")
let yearly = document.querySelector(".yearly")

let m1 = document.querySelector(".m-1")
let m2 = document.querySelector(".m-2")
let m3 = document.querySelector(".m-3")
let m4 = document.querySelector(".m-4")

window.onload = () => {
    monthly.classList.add("monthly-yearly-add") // Add background color on load
    monthly.style.color = "white"
}


monthly.addEventListener("click", () => {
    monthly.classList.add("monthly-yearly-add")
    yearly.classList.remove("monthly-yearly-add") // Corrected here
    monthly.style.color = "white"

    m1.innerHTML = "$15.90"
    m2.innerHTML = "$25.90"
    m3.innerHTML = "$35.90"
    m4.innerHTML = "$45.90"
})

yearly.addEventListener("click", () => {
    yearly.classList.add("monthly-yearly-add")
    monthly.classList.remove("monthly-yearly-add") // Corrected here
    monthly.style.color = "#111111"

    m1.innerHTML = "$150"
    m2.innerHTML = "$250"
    m3.innerHTML = "$350"
    m4.innerHTML = "$450"
})


pages.addEventListener("mouseenter",()=>{
    pagesInner.style.display = "block"
})

pages.addEventListener("mouseleave",()=>{
    pagesInner.style.display = "none"
})

bar.addEventListener("click",()=>{
    if(sideBar.classList.contains("hideSideBar")){
        sideBar.classList.remove("hideSideBar")
        sideBar.classList.add("showSideBar")

    }else{
        sideBar.classList.remove('showSideBar');
        sideBar.classList.add('hideSideBar');
    }
})

closeIcon.addEventListener("click",()=>{
    sideBar.classList.add('hideSideBar');

})

sideMenuBtn.addEventListener("click",()=>{
    if(sideMenu.classList.contains("half")){
        sideMenu.classList.remove("half")
        sideMenu.classList.add("full")

    }else{
        sideMenu.classList.remove('full');
        sideMenu.classList.add('half');
    }
})