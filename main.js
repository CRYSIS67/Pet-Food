// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () =>{
//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen=true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false
//     }
// });


const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}








