window.onload = function() {
    let h = document.querySelector('.hour');
    let m = document.querySelector('.minute');
    let s = document.querySelector('.sec');

    function changeClock(x, y, z) {
        h.style.transform = `rotate(${x}deg)`;
        m.style.transform = `rotate(${y}deg)`;
        s.style.transform = `rotate(${z}deg)`;
    }

    function getTime() {
        let n = new Date();
        let [hour, min, sec] = [n.getHours(), n.getMinutes(), n.getSeconds()];
        let total = hour * 60 * 60 + min * 60 + sec;
        let x = total / 120 + 180;
        let y = total / 10 + 180;
        let z = total * 6 + 180;
        changeClock(x, y, z)
    }

    getTime();
    let timer = setInterval(function rotate() {
        getTime();
    }, 1000)
}