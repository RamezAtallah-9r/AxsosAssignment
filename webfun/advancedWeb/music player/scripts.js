// Track data — swap src_mp3 / src_ogg with your own files
    const tracks = [
        {
    title:   "Atmospheric Guitar",
    artist:  "Pufino",
    cover:   "cover.jpg", // update this to point to your local image file
    dur:     "3:12",
    src_mp3: "Pufino - Atmospheric Guitar.mp3", // update this to point to your local audio file
  },
  {
    title:   "Sunflower",
    artist:  "Post Malone",
    cover:   "cover.jpg", // update this to point to your local image file
    dur:     "2:14",
    src_mp3: "Post Malone, Swae Lee - Sunflower.mp3", // update this to point to your local audio file
  },
  {
    title:   "The Less i know the better",
    artist:  "Tame Impala",
    cover:   "cover.jpg", // update this to point to your local image file
    dur:     "3:35",
    src_mp3: "The Less I Know The Better - Tame Impala.mp3", // update this to point to your local audio file
  }
    ];

    const player      = document.getElementById('player');
    const srcMp3      = document.getElementById('src-mp3');
    const trackTitle  = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const cover       = document.getElementById('cover');
    const tbody       = document.getElementById('playlist-body');

    // Build playlist rows
    tracks.forEach((track, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${track.title}</td>
        <td>${track.dur}</td>
      `;
      tr.addEventListener('click', () => loadTrack(i));
      tbody.appendChild(tr);
    });

    // Load and play a selected track
    function loadTrack(idx) {
  const track = tracks[idx];
  srcMp3.src = track.src_mp3;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  cover.src = track.cover;
  player.load();
  player.play();
    // highlight active track
  const rows = document.querySelectorAll('#playlist-body tr');
  const active = document.querySelector('#playlist-body tr.active');
  if (active) {
    active.classList.remove('active');
  }
  rows[idx].classList.add('active');
}

    // Auto-advance when a track ends
    player.addEventListener('ended', () => {
      const rows   = document.querySelectorAll('#playlist-body tr');
      const active = document.querySelector('#playlist-body tr.active');
      const idx    = Array.from(rows).indexOf(active);
      loadTrack((idx + 1) % tracks.length);
    });