
function opensidenav() {
    document.querySelector('.side_modal').classList.add("active");
    document.querySelector('.overlay').classList.add("active");
}

function closeNav() {
    document.querySelector('.side_modal').classList.remove("active");
    document.querySelector('.overlay').classList.remove('active')

}

function overlay(){
    document.querySelector(".side_modal").classList.remove("active");
    document.querySelector('.overlay').classList.remove("active");
}
//Header Sticky
window.onscroll = () => stickyHeader();
const header = document.querySelector(".header");
const sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky_header")
    } else {
        header.classList.remove("sticky_header");
    }
}
