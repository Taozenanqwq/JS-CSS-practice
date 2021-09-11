window.onload = function() {
    let space = document.querySelector('#spacing');
    let blur = document.querySelector('#blur');
    let color = document.querySelector('#color');
    let root = document.querySelector(':root');
    space.onmousemove = function() {
        root.style.setProperty('--pd', this.value + 'px');
    }
    blur.onmousemove = function() {
        root.style.setProperty('--blur', this.value + 'px');
    }
    color.onchange = function() {
        root.style.setProperty('--piccolor', this.value);
    }

}