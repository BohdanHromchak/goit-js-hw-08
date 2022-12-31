// Підключення бібліотеки vimeo: https://github.com/vimeo/player.js/#vimeo-player-api
import Player from '@vimeo/player';
// console.log(Player);

const iframe = document.querySelector('iframe');

// initialization player

const player = new Player(iframe);

const KEY_LOCAL = 'videoplayer-current-time';

// add event listener and save current time in local storage

const onTimeUpdate = function (data) {
  const currentTime = data.seconds;
  //   console.log(currentTime);
  localStorage.setItem(KEY_LOCAL, JSON.stringify(currentTime));
};

player.on('timeupdate', onTimeUpdate);

// play video from current time

const startTime = JSON.parse(localStorage.getItem(KEY_LOCAL));

player
  .setCurrentTime(startTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
