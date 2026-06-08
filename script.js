const songs = [
  {
    title: "Phupir Chori",
    category: "love",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    likes: 0,
    views: 0
  },
  {
    title: "DJ Banjara Mix",
    category: "dj",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    likes: 0,
    views: 0
  },
  {
    title: "Sad Love Song",
    category: "sad",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    likes: 0,
    views: 0
  }
];

let currentSongs = songs;

const songList = document.getElementById("songList");
const player = document.getElementById("videoPlayer");

// LOAD SONGS
function loadSongs(list) {
  songList.innerHTML = "";

  list.forEach((song, index) => {
    songList.innerHTML += `
      <div class="card">
        <h3>${song.title}</h3>

        <button onclick="playVideo('${song.video}')">▶ Play</button>

        <button onclick="likeSong(${index})">❤️ Like (${song.likes})</button>

        <button onclick="shareSong('${song.title}')">📤 Share</button>
      </div>
    `;
  });
}

// PLAY VIDEO
function playVideo(url) {
  player.src = url;
}

// LIKE SYSTEM
function likeSong(index) {
  songs[index].likes++;
  loadSongs(currentSongs);
}

// SHARE
function shareSong(title) {
  const url = `https://wa.me/?text=Check this song: ${title}`;
  window.open(url, "_blank");
}

// CATEGORY FILTER
function filterCategory(cat) {
  if (cat === "all") currentSongs = songs;
  else currentSongs = songs.filter(s => s.category === cat);

  loadSongs(currentSongs);
}

// SEARCH
document.getElementById("search").addEventListener("input", function () {
  let val = this.value.toLowerCase();

  let filtered = songs.filter(s =>
    s.title.toLowerCase().includes(val)
  );

  loadSongs(filtered);
});

// INIT
loadSongs(songs);
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();

    if (text.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
