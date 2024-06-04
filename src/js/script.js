// if
function toggle() {
    let curtain = document.getElementById('curtain');
    let btnToggle = document.getElementById('btntoggle');

    curtain.classList.toggle('active');

    if (curtain.classList.contains('active')) {

        curtain.style.zIndex = 10;
        btnToggle.style.zIndex = 11;
        
    } else {

        setTimeout(function() {
            curtain.style.zIndex = '';
        }, 500);
    }
}

const btn = document.getElementById('btn');
const curtain = document.getElementById('curtain');

btn.addEventListener('click', function() {
    curtain.classList.remove('active');
    
    setTimeout(function() {
        curtain.style.zIndex = '';
    }, 500);
});
