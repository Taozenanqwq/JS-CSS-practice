window.onload = function() {
    let counter = document.querySelectorAll('.count');
    let finish = document.querySelector('.go');
    let start = document.querySelector('.ready')
    for (let i of counter) {
        i.style.animationDelay = i.dataset.delay;
        if ([].indexOf.call(counter, i) == 3) {
            i.addEventListener('animationend', () => {
                start.style.display = 'none';
                finish.style.display = 'block';
            })
        };
    }
    let button = document.querySelector('button');
    button.onclick = function() {
        start.style.display = 'block';
        finish.style.display = 'none';
    }
}