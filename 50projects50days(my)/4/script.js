    window.onload = function() {
        let button = document.querySelector('.button');
        let nav = document.querySelector('.nav');
        button.onclick = function() {
            nav.classList.toggle('closed')
        }
    }