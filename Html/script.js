// List of items (Movies)
const movies = [
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Avengers: Endgame",
  "Titanic",
  "Avatar",
  "Joker",
  "The Shawshank Redemption",
  "The Matrix",
  "Gladiator",
];

// Select elements
const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");

// Function to display filtered movies
function displayMovies(filteredMovies) {
  movieList.innerHTML = ""; // Clear list
  filteredMovies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie;
    movieList.appendChild(li);
  });
}

// Initial display (all movies)
displayMovies(movies);

// Event listener for real-time filtering
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = movies.filter((movie) =>
    movie.toLowerCase().includes(query)
  );
  displayMovies(filtered);
});
