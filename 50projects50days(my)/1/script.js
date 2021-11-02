window.onload = function() {
    let img = document.querySelectorAll('.panel');
    let h3 = document.querySelectorAll('h3');
    let wid = img[1].clientWidth;
    for (let i of img) {
        i.style.borderRadius = wid / 2 + 'px';
        i.onclick = function(e) {
            for (let j of img) {
                j.classList.remove('active')
            }
            this.classList.add('active')
        }
    }
    for (let h of h3) {
        h.style.left = wid / 2 + 'px';
        h.style.bottom = wid / 2 + 'px';
    }
}