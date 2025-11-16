// Popup handling
function openPopup(number) {
    document.getElementById(`popup-${number}`).style.display = "flex";
}
function closePopup(number) {
    document.getElementById(`popup-${number}`).style.display = "none";
}

// Menu
function handleHamburgerClick() {
    const element = document.getElementsByClassName('hamburger')[0];
    element.classList.toggle('is-active');
    // handle links
    (element.classList.contains('is-active'))
        ? element.style.display = 'flex'
        : element.style.display = 'none';
    // handle button icon
    const icon = document.getElementById('menu-icon');
    const classList = icon.classList;
    (classList.contains('fa-bars'))
        ? classList.replace('fa-bars', 'fa-xmark')
        : classList.replace('fa-xmark', 'fa-bars');
}

// Popup listen
document.querySelectorAll(".window").forEach(popup => {
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            closePopup(popup.id.split('-')[1]);
        }
    });
});
// Menu listen
document.getElementById('menu').addEventListener('click', handleHamburgerClick);

// Resize listen

const maxWidth = "800px";
const mq = window.matchMedia(`(max-width: ${maxWidth})`);
function handleWidthChange(e) {
    if (e.matches) {
        // less
        document.getElementById('nav-list').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else {
        // more
        document.getElementById('nav-list').style.display = 'flex';
        document.getElementById('menu').style.display = 'none';
    }
}

mq.addEventListener("change", handleWidthChange);

// run once on page load
handleWidthChange(mq);