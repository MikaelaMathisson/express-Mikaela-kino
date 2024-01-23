//--- FilterByType ---//

// Function to filter movies based on buttons
function filterMovies() {
  const moviesNowButton = document.getElementById("moviesNowButton");
  const moviesUpcButton = document.getElementById("moviesUpcButton");

  const containerIds = getContainerIds();

  containerIds.forEach((containerId) => {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
      // Clear the container
      containerElement.innerHTML = "";

      // Filter movies based on buttons
      if (moviesNowButton.classList.contains("active")) {
        // Show movies from moviesnow if the button is active
        moviesnow.forEach((movie) => {
          var movieCard = new MovieCard(movie);
          movieCard.createCard(containerId);
        });
      }

      if (moviesUpcButton.classList.contains("active")) {
        // Show upcoming movies from moviesupc if the button is active
        moviesupc.forEach((movie) => {
          var movieCard = new MovieCard(movie);
          movieCard.createCard(containerId);
        });
      }

      if (!moviesNowButton.classList.contains("active") && !moviesUpcButton.classList.contains("active")) {
        // Show all movies when both buttons are inactive
        allMovies.forEach((movie) => {
          var movieCard = new MovieCard(movie);
          movieCard.createCard(containerId);
        });
      }
    }
  });
}

// Add event listeners to buttons
document.getElementById("moviesNowButton").addEventListener("click", function () {
  toggleButtonState("moviesNowButton");
  filterMovies();
});

document.getElementById("moviesUpcButton").addEventListener("click", function () {
  toggleButtonState("moviesUpcButton");
  filterMovies();
});

// Function to toggle button state (active or inactive)
function toggleButtonState(buttonId) {
  const button = document.getElementById(buttonId);
  button.classList.toggle("active");
}

window.onload = function () {
  // Initial movie card creation
  filterMovies();
};
