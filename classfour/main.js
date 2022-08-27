const changeColor = document.querySelector('.clickMe');
function colors() {
    const randomBG = Math.floor(Math.random()*16777215).toString(16);
    const randomTX = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomBG;
    changeColor.style.color = "#" + randomTX;
}
changeColor.addEventListener('click', colors);