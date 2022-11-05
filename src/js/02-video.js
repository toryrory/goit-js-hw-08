import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on("timeupdate", throttle(getCurrentPlayTime, 1000));

function getCurrentPlayTime({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds);
}

if (localStorage.getItem("videoplayer-current-time")) {
    const currentPlayTime = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(currentPlayTime);
}





//     player.setCurrentTime(currentTime).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });
// }
// player.on('timeupdate', onPlay);


// function getCurrentTime(seconds){
//     localStorage.setItem("videoplayer-current-time", seconds);
//     console.log('hello')
// }
// if (localStorage.getItem("videoplayer-current-time")){
//     const currentPlayTime = localStorage.getItem("videoplayer-current-time");
//     player.setCurrentTime(currentPlayTime);
// }
