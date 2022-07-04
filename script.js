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
    name: 'Alan Walker - Fade',
    displayName: '1. Fade',
    artist: 'Alan Walker',
  },
  {
    name: 'Alan Walker - Force',
    displayName: '2. Force',
    artist: 'Alan Walker',
  },
  {
    name: 'Alan Walker - Spectre',
    displayName: '3. Spectre',
    artist: 'Alan Walker',
  },
  {
    name: 'Anikdote - Turn It Up',
    displayName: '4. Turn It Up',
    artist: 'Anikdote',
  },
  {
    name: 'Axol x Alex Skrindo - You',
    displayName: '5. You',
    artist: 'Axol x Alex Skrindo',
  },
  {
    name: 'Cartoon - C U Again feat. Mikk Mäe',
    displayName: '6. C U Again',
    artist: 'Cartoon - feat. Mikk Mäe',
  },
  {
    name: 'Cartoon - On _ On',
    displayName: '7. On On',
    artist: 'Cartoon',
  },
  {
    name: 'Cartoon - Why We Lose',
    displayName: '8. Why We Lose',
    artist: 'Cartoon',
  },
  {
    name: 'Clarx - H.A.Y',
    displayName: '9. H.A.Y',
    artist: 'Clarx',
  },
  {
    name: 'Culture Code - Make Me Move',
    displayName: '10. Make Me Move',
    artist: 'Culture Code',
  },
  {
    name: 'DEAF KEV - Invincible',
    displayName: '11. Invincible',
    artist: 'DEAF KEV',
  },
  {
    name: 'Desmeon - Hellcat',
    displayName: '12. Hellcat',
    artist: 'Desmeon',
  },
  {
    name: 'Diamond Eyes - Everything',
    displayName: '13. Everything',
    artist: 'Diamond Eyes',
  },
  {
    name: 'Diviners feat. Contacreast - Tropic Love',
    displayName: '14. Tropic Love',
    artist: 'Diviners feat. Contacreast',
  },
  {
    name: 'Electro-Light - Symbolism',
    displayName: '15. Symbolism',
    artist: 'Electro-Light',
  },
  {
    name: 'Elektronomia - Energy',
    displayName: '16. Energy',
    artist: 'Elektronomia',
  },
  {
    name: 'Elektronomia - Limitless',
    displayName: '17. Limitless',
    artist: 'Elektronomia',
  },
  {
    name: 'Elektronomia - Sky High',
    displayName: '18. Sky High',
    artist: 'Elektronomia',
  },
  {
    name: 'Heuse _ Zeus x Crona - Pill',
    displayName: '19. Pill',
    artist: 'Heuse Zeus x Crona',
  },
  {
    name: 'Jim Yosef - Firefly',
    displayName: '20. Firefly',
    artist: 'Jim Yosef',
  },
  {
    name: 'Jim Yosef - Link',
    displayName: '21. Link',
    artist: 'Jim Yosef',
  },
  {
    name: 'JJD - Adventure',
    displayName: '22. Adventure',
    artist: 'JJD',
  },
  {
    name: 'Jo Cohen _ Sex Whales - We Are',
    displayName: '23. We Are',
    artist: 'Jo Cohen & Sex Whales',
  },
  {
    name: 'JPB - Defeat The Night',
    displayName: '24. Defeat The Night',
    artist: 'JPB',
  },
  {
    name: 'JPB - High',
    displayName: '25. High',
    artist: 'JPB',
  },
  {
    name: 'Julius Dreisig _ Zeus X Crona - Invisible',
    displayName: '26. Invisible',
    artist: 'Julius Dreisig & Zeus X Crona',
  },
  {
    name: 'K-391 - Earth',
    displayName: '27. Earth',
    artist: 'K-391',
  },
  {
    name: 'Laszlo - Fall To Light',
    displayName: '28. Fall To Light',
    artist: 'Laszlo',
  },
  {
    name: 'Lensko - Let_s Go',
    displayName: '29. Let_s Go',
    artist: 'Lensko',
  },
  {
    name: 'Lost Sky - Dreams pt. II',
    displayName: '30. Dreams pt. II',
    artist: 'Lost Sky',
  },
  {
    name: 'Lost Sky - Fearless',
    displayName: '31. Fearless',
    artist: 'Lost Sky',
  },
  {
    name: 'Lost Sky - Fearless pt.II',
    displayName: '32. Fearless pt.II',
    artist: 'Lost Sky',
  },
  {
    name: 'Lost Sky - Where We Started',
    displayName: '33. Where We Started',
    artist: 'Lost Sky',
  },
  {
    name: 'Prismo - Stronger',
    displayName: '34. Stronger',
    artist: 'Prismo',
  },
  {
    name: 'Razihel - Love U',
    displayName: '35. Love U',
    artist: 'Razihel',
  },
  {
    name: 'RetroVision - Puzzle',
    displayName: '36. Puzzle',
    artist: 'RetroVision',
  },
  {
    name: 'Robin Hustin x TobiMorrow - Light It Up',
    displayName: '37. Light It Up',
    artist: 'Robin Hustin x TobiMorrow',
  },
  {
    name:'Ship Wrek _ Zookeepers - Ark',
    displayName:'38. Ark',
    artist:'Ship Wrek Zookeepers',
  },
  {
    name:'Spektrem - Shine',
    displayName:'39. Shine',
    artist:'Spektrem',
  },
  {
    name:'Sub Urban - Cradles',
    displayName:'40. Cradles',
    artist:'Sub Urban',
  },
  {
    name:'Syn Cole - Feel Good',
    displayName:'41. Feel Good',
    artist:'Syn Cole',
  },
  {
    name:'Tobu - Candyland',
    displayName:'42. Candyland',
    artist:'Tobu',
  },
  {
    name:'Tobu - Hope',
    displayName:'43. Hope',
    artist:'Tobu',
  },
  {
    name:'Tobu - Life',
    displayName:'44. Life',
    artist:'Tobu',
  },
  {
    name:'Tobu _ Itro - Sunburst',
    displayName:'45. Sunburst',
    artist:'Tobu & Itro',
  },
  {
    name:'Unknown Brain - MATAFAKA',
    displayName:'46. Unknown Brain - MATAFAKA',
    artist:'Unknown Brain',
  },
  {
    name:'Unknown Brain - Superhero',
    displayName:'47. Superhero',
    artist:'Unknown Brain',
  },
  {
    name:'Unknown Brain - Why Do I',
    displayName:'48. Why Do I',
    artist:'Unknown Brain',
  },
  {
    name:'Vanze - Forever',
    displayName:'49. Forever',
    artist:'Vanze',
  },
  {
    name:'Warriyo - Mortals',
    displayName:'50. Mortals',
    artist:'Warriyo',
  },
  
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
