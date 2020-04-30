let btn = document.querySelector('[aria-label="Like"]');

let autoLike = setInterval((btn) => {
    btn.click();
}, 1000, btn);



function stop(autoLiker) {
    clearInterval(autoLiker);
    return console.log('Auto liker has been stopped')
}
