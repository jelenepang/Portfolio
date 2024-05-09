//enable horizontal scrolling w scroll wheel
//https://www.youtube.com/watch?v=gzXyRa7jwk4&ab_channel=GreatStack
let scrollContainer = document.querySelector(".scroll-container");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

// let cursor = document.querySelector(".cursor"); 
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// });