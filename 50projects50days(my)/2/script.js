window.onload = function() {
    let boxes = document.querySelector('.container');
    let btn = document.querySelector('button');
    btn.onclick = () => boxes.classList.toggle('big');

    function createBoxes() {
        for (let i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                let box = document.createElement('div');
                box.classList.add('box');
                box.style.backgroundPosition = `${-j*150}px ${-i*100}px`
                boxes.append(box);
            }
        }
    }
    createBoxes();
}