//https://jsfiddle.net/gdbyh8fz/
function openPopUp() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var closeLink = document.getElementById('popup-close');

    overlay.style.display = 'block';
    popup.style.display = 'block';

    closeLink.onclick = function() {
        document.body.style.overflow = 'auto';
        overlay.style.display = 'none';
        popup.style.display = 'none';
    };
}

window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};