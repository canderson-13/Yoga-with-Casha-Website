let menuIcon = document.getElementById('hidden');
let hiddenMenu = document.getElementById('hiddenMenu');

function showNav(){
    hiddenMenu.style.display = 'block';
};

function unShowNav(){
    hiddenMenu.style.display = 'none';
}

menuIcon.addEventListener('mouseover', showNav);
menuIcon.addEventListener('mouseout', unShowNav);
hiddenMenu.addEventListener('mouseover', showNav);
hiddenMenu.addEventListener('mouseout', unShowNav);