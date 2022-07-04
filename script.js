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
  },
  {
    name: 'Alan Walker, Sabrina Carpenter & Farruko - On My Way',
    displayName: '23. On My Way',
    artist: 'Alan Walker, Sabrina Carpenter & Farruko',
  },
  {
    name: 'Ariana Grande - positions (official video)',
    displayName: '24. Positions',
    artist: 'Ariana Grande',
  },
  {
    name: 'CKay - Love Nwantiti Remix ft. Joeboy & Kuami Eugene [Ah Ah Ah]',
    displayName: '25. Love Nwantiti [Ah Ah Ah]',
    artist: 'CKay',
  },
  {
    name: 'DJ Snake - Let Me Love You ft. Justin Bieber',
    displayName: '26. Let Me Love You',
    artist: 'DJ Snake',
  },
  {
    name: 'Dua Lipa - Levitating Featuring DaBaby',
    displayName: '27. Levitating',
    artist: 'Dua Lipa',
  },
  {
    name: 'Ed Sheeran - Shape of You',
    displayName: '28. Shape of You',
    artist: 'Ed Sheeran',
  },
  {
    name: 'Ellie Goulding - Love Me Like You Do',
    displayName: '29. Love Me Like You Do',
    artist: 'Ellie Goulding',
  },
  {
    name: 'Gym Class Heroes Stereo Hearts ft. Adam Levine',
    displayName: '30. Stereo Hearts',
    artist: 'Gym Class Heroes ft. Adam Levine',
  },
  {
    name: 'Jennifer Lopez - In The Morning',
    displayName: '31. In The Morning',
    artist: 'Jennifer Lopez',
  },
  {
    name: 'Jennifer Lopez - On The Floor ft. Pitbull',
    displayName: '32. On The Floor',
    artist: 'Jennifer Lopez',
  },
  {
    name: 'Justin Bieber - Peaches ft. Daniel Caesar, Giveon',
    displayName: '33. Peaches',
    artist: 'Justin Bieber',
  },
  {
    name: 'K-391 & Alan Walker - Ignite',
    displayName: '34. Ignite',
    artist: 'Alan Walker',
  },
  {
    name: 'Savage Love - GMA',
    displayName: '35. Savage Love',
    artist: 'Jawsh 685, Jason Derulo',
  },
  {
    name: 'Shawn Mendes, Camila Cabello - Señorita',
    displayName: '36. Señorita',
    artist: 'Shawn Mendes, Camila Cabello',
  },
  {
    name: 'Witt Lowry - Into Your Arms (feat. Ava Max)',
    displayName: '37. Into Your Arms',
    artist: 'Witt Lowry-feat. Ava Max',
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
