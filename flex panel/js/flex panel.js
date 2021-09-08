window.onload = function() {
    let panel = document.querySelectorAll('.panel');
    for (let i = 0; i < panel.length; i++) {
        panel[i].onmouseover = function() {
            for (let j = 0; j < panel.length; j++) {
                panel[j].classList.add('blur');
            }
            this.classList.remove('blur')
        }
        panel[i].onmouseleave = function() {
            for (let j = 0; j < panel.length; j++) {
                panel[j].classList.remove('blur');
            }
        }
    }
}