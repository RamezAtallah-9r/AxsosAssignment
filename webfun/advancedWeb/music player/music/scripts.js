var songs = [
    {
        name:   "Atmospheric Guitar",
        artist: "Pufino",
        path:   "../Pufino - Atmospheric Guitar.mp3"
    },
    {
        name:   "Sunflower",
        artist: "Post Malone",
        path:   "../Post Malone, Swae Lee - Sunflower.mp3"
    },
    {
        name:   "The Less I Know The Better",
        artist: "Tame Impala",
        path:   "../The Less I Know The Better - Tame Impala.mp3"
    }
];

// Create rows of song list and add them to the table
function createSongList() {
    var tbody = document.querySelector(".playlist-table tbody");

    for (var i = 0; i < songs.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML =
            "<td>" + (i + 1) + "</td>" +
            "<td>" + songs[i].name + "</td>" +
            "<td>" + songs[i].artist + "</td>";

        // store the index on the row so playSong knows which song to load
        row.dataset.index = i;
        row.addEventListener("click", playSong);

        tbody.appendChild(row);
    }
}

// Play the selected song when a row is clicked
function playSong(event) {
    var index = event.currentTarget.dataset.index;
    var song  = songs[index];

    // Update the audio element
    var audio  = document.getElementById("audio");
    var source = document.getElementById("audio-source");
    source.src  = song.path;
    source.type = "audio/mpeg";
    audio.load();
    audio.muted = false;
    audio.play();

    // Update song info in the player panel
    document.querySelector(".audio-info h2").textContent = "Song: "   + song.name;
    document.querySelector(".audio-info h3").textContent = "Artist: " + song.artist;

    // Highlight the active row
    var allRows = document.querySelectorAll(".playlist-table tbody tr");
    for (var i = 0; i < allRows.length; i++) {
        allRows[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

// Add a song from local file input
function addSong(event) {
    var file = event.target.files[0];
    if (!file) return;

    // Parse filename: "Song Name - Artist Name.mp3" → split on " - "
    var filename = file.name.replace(/\.[^/.]+$/, ""); // remove extension
    var parts    = filename.split(" - ");
    var name     = parts[0] ? parts[0].trim() : filename;
    var artist   = parts[1] ? parts[1].trim() : "Unknown";

    // Create a local URL so the audio element can play it
    var localURL = URL.createObjectURL(file);

    // Add to songs array
    songs.push({ name: name, artist: artist, path: localURL });

    // Add a new row to the table
    var tbody = document.querySelector(".playlist-table tbody");
    var index = songs.length - 1;
    var row   = document.createElement("tr");
    row.innerHTML =
        "<td>" + (index + 1) + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + artist + "</td>";
    row.dataset.index = index;
    row.addEventListener("click", playSong);
    tbody.appendChild(row);

    // Reset the input so the same file can be re-added if needed
    event.target.value = "";
}

// Wire up the file input
var fileInput = document.querySelector('input[type="file"]');
if (fileInput) {
    fileInput.addEventListener("change", addSong);
}

// Run on page load
createSongList();