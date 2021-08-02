const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$forward.addEventListener('click',handleForward)
$backward.addEventListener('click',handleBackward)
$video.addEventListener('loadedmetadata', handleVideo)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleTimeInput)

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}
function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}
function handleForward() {
    $video.currentTime +=10;
    
}
function handleBackward() {
    $video.currentTime -=10;
}

function handleVideo() {
    $progress.max = $video.duration;
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

function handleTimeInput() {
    $video.currentTime = $progress.value;
}

