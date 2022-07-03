const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
  {
    name: 'A Different Way',
    displayName: '1. A Different Way',
    artist: 'DJ Snake, Lauv',
  },
  {
    name: 'Alan Walker - Alone',
    displayName: '2. Alone',
    artist: 'Alan Walker',
  },
  {
    name: 'Alan Walker - Faded',
    displayName: '3. Faded',
    artist: 'Alan Walker',
  },
  {
    name: 'Alan Walker & Ava Max - Alone, Pt. II',
    displayName: '4. Alone, Pt. II',
    artist: 'Alan Walker & Ava Max',
  },
  {
    name: 'Arash - Broken Angel',
    displayName: '5. Broken Angel',
    artist: 'Arash ft. Helena',
  },
  {
    name: 'Bazanji - Fed Up',
    displayName: '6. Fed Up',
    artist: 'Bazanji',
  },
  {
    name: 'Culture Code - Make Me Move',
    displayName: '7. Make Me Move',
    artist: 'Culture Code, KARRA',
  },
  {
    name: 'Defqwop - Awakening',
    displayName: '8. Awakening',
    artist: 'Defqwop',
  },
  {
    name: 'Dimitri Vegas & Like Mike vs David Guetta feat. Kiiara - Complicated',
    displayName: '9. Complicated',
    artist: ' Dimitri Vegas, Like Mike & David Guetta',
  },
  {
    name: 'Electro-Light - Symbolism',
    displayName: '10. Symbolism',
    artist: 'Electro-Light',
  },
  {
    name: 'Imagine Dragons - Believer',
    displayName: '11. Believer',
    artist: 'Imagine Dragons',
  },
  {
    name: 'Kina - Can We Kiss Forever',
    displayName: '12. Can We Kiss Forever?',
    artist: 'Kinà ft. Adriana Proenza',
  },
  {
    name: 'Lost Sky - Dreams pt. II',
    displayName: '13. Dreams pt. II',
    artist: 'Lost Sky, Sara Skinner',
  },
  {
    name: 'Maroon 5 - Girls Like You',
    displayName: '14. Girls Like You',
    artist: 'Maroon 5',
  },
  {
    name: 'Marshmello & Anne-Marie - FRIENDS',
    displayName: '15. FRIENDS',
    artist: 'Marshmello, Anne-Marie',
  },
  {
    name: 'Masked Wolf - Astronaut In The Ocean',
    displayName: '16. Astronaut In The Ocean',
    artist: 'Masked Wolf',
  },
  {
    name: 'Otilia - Bilionera',
    displayName: '17. Bilionera',
    artist: 'Otilia',
  },
  {
    name: 'Sia - Cheap Thrills',
    displayName: '18. Cheap Thrills',
    artist: 'Sia',
  },
  {
    name: 'Sub Urban - Cradles',
    displayName: '19. Cradles',
    artist: 'Sub Urban',
  },
  {
    name: 'The Chainsmokers - Closer',
    displayName: '20. Closer',
    artist: 'The Chainsmokers ft. Halsey',
  },
  {
    name: 'The Chainsmokers - Dont Let Me Down',
    displayName: "21. Don't Let Me Down",
    artist: 'The Chainsmokers ft. Daya',
  },
  {
    name: 'TULE - Fearless pt.II',
    displayName: '22. Fearless pt. II',
    artist: 'TULE, Chris Linton',
  }
  
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);
