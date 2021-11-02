let video = document.querySelector('.player__video');
let play = document.querySelector('.toggle');
let played = document.querySelector('.progress__filled');

video.onloadedmetadata = function() {
    play.onclick = function() {
        if (this.dataset.status == 'paused') {
            video_play();
        } else {
            video_pause();
        }
    }
    let timer = setInterval(() => {
        played.style.flexBasis = (video.currentTime / video.duration * 100).toFixed(2) + '%'

    }, 16);

    let skip_a = document.querySelectorAll('[data-skip]')[0];
    let skip_b = document.querySelectorAll('[data-skip]')[1];

    function jump(sec) {
        video.currentTime += +sec;
    }
    skip_a.onclick = function() {
        jump(this.dataset.skip)
    }
    skip_b.onclick = function() {
        jump(this.dataset.skip)
    }


    video.onended = function() {
        video_pause();
    }


    let vol = document.querySelector('[name="volume"]');
    let rate = document.querySelector('[name="playbackRate"]');
    vol.onchange = function() {
        video.volume = this.value;
        console.log(video.volume);
    }
    rate.onchange = function() {
        video.playbackRate = this.value;
        console.log(this.value);
        console.log(video.playbackRate);
    }

    let progress = document.querySelector('.progress');
    progress.onmousedown = function(e) {
        e.preventDefault();
        clearTimeout(timer);
        playing_ratio(e);
        document.onmousemove = function(e) {
            playing_ratio(e);
        }
        document.onmouseup = function(e) {
            this.onmousemove = null;
            let ratio = playing_ratio(e);
            video.currentTime = video.duration * ratio;
            video_play();
            document.onmousemove = null;
            document.onmouseup = null;
            timer = setInterval(() => {
                played.style.flexBasis = (video.currentTime / video.duration * 100).toFixed(2) + '%'
            }, 16);
        }
    }


    function playing_ratio(e) {
        let ratio = (e.clientX - progress.getBoundingClientRect().left) / progress.getBoundingClientRect().width;
        played.style.flexBasis = ratio.toFixed(2) * 100 + '%';
        return ratio
    }

    function video_play() {
        play.dataset.status = 'playing';
        video.play();
        play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    }

    function video_pause() {
        play.dataset.status = 'paused';
        video.pause();
        play.innerHTML = '►';
    }
    video.onplay = function() {
        console.log(1);
    }
    let fullscreen = document.querySelector('#fullscreen');
    let player = document.querySelector('.player');
    fullscreen.onclick = function() {
        player.requestFullscreen();
        console.log(document.fullscreenElement);
    }
};