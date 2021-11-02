window.onload = function() {
    let h1 = document.querySelector('h1');
    let initSpeed = 200;
    let content = h1.textContent;
    let i = 0;
    let timer;
    timer = setInterval(type, initSpeed)


    let sp = document.querySelector('input');
    sp.onchange = function() {
        resetInterval(sp.value);
    }



    function type() {
        i = i % content.length;
        i++;
        h1.textContent = content.slice(0, i);

    }

    function resetInterval(val) {
        clearInterval(timer)
        timer = setInterval(type, initSpeed - 10 * val)
    }
}