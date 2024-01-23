//--- Movie Card ---//

class MovieCard {
  constructor(movie) {
    this.movie = movie;
  }

  createCard(containerId, currentPage) {
    // Create a container div for each movie card
    var movieContainer = document.createElement("div");
    movieContainer.className = "movie-card";
    movieContainer.id = this.movie.id.toString();

    // Create image element
    var image = document.createElement("img");
    image.src = this.movie.image;
    image.alt = this.movie.title;

    // Create title element
    var title = document.createElement("h2");
    title.textContent = this.movie.title;

    // Create date element
    var date = document.createElement("p");
    date.textContent = "Release Date: " + this.movie.date;

    // Create genre element
    var genre = document.createElement("p");
    genre.textContent = "Genre: " + this.movie.genre;

    // Create description element
    var description = document.createElement("p");
    description.textContent = this.movie.description;

    // Append elements to the container
    movieContainer.appendChild(image);
    movieContainer.appendChild(title);
    movieContainer.appendChild(date);
    movieContainer.appendChild(genre);
    movieContainer.appendChild(description);

    var containerElement = document.getElementById(containerId);
    if (containerElement) {
      containerElement.appendChild(movieContainer);

      if (getIdsToHide().includes(this.movie.id)) {
        movieContainer.classList.add("hidden-movie");
      }

      if (currentPage === "news.html") {
        movieContainer.classList.add("news-page-class");
      }
    } else {
      console.error(`Container with ID '${containerId}' not found.`);
    }
  }
}

function getContainerIds() {
  const currentPage = window.location.pathname.split("/").pop();
  switch (currentPage) {
    case "index.html":
      return ["movieContainer1", "movieContainer2"];
    case "news.html":
      return [];
    case "movies.html":
      return ["combinedMovieContainer"];
    default:
      return [];
  }
}

function getIdsToHide() {
  const currentPage = window.location.pathname.split("/").pop();
  switch (currentPage) {
    case "index.html":
      return [6, 7, 8, 9, 10, 11, 12];
    case "news.html":
      return [];
    case "movies.html":
      return [];
    default:
      return [];
  }
}

class NewsCard {
  constructor(news) {
    this.news = news;
  }

  createCard(containerId, currentPage) {
    var newsContainer = document.createElement("div");
    newsContainer.className = "news-card";

    var image = document.createElement("img");
    image.src = this.news.image;
    image.alt = this.news.title;

    var title = document.createElement("h2");
    title.textContent = this.news.title;

    var date = document.createElement("p");
    date.textContent = this.news.date;

    newsContainer.appendChild(image);
    newsContainer.appendChild(title);
    newsContainer.appendChild(date);

    var containerElement = document.getElementById(containerId);
    if (containerElement) {
      containerElement.appendChild(newsContainer);

      if (currentPage === "news.html") {
        newsContainer.classList.add("news-page-class");
      }
    } else {
      console.error(`Container with ID '${containerId}' not found.`);
    }
  }
}

window.onload = function () {
  const currentPage = window.location.pathname.split("/").pop();

  const containerId1 = "movieContainer1";
  if (document.getElementById(containerId1)) {
    for (var i = 0; i < moviesnow.length; i++) {
      var movieCard = new MovieCard(moviesnow[i]);
      movieCard.createCard(containerId1, currentPage);
    }
  }

  const containerId2 = "movieContainer2";
  if (document.getElementById(containerId2)) {
    for (var j = 0; j < moviesupc.length; j++) {
      var movieCard2 = new MovieCard(moviesupc[j]);
      movieCard2.createCard(containerId2, currentPage);
    }
  }

  const containerId3 = "movieContainer3";
  if (document.getElementById(containerId3)) {
    for (var j = 0; j < news.length; j++) {
      var singleNews = new NewsCard(news[j]);
      singleNews.createCard(containerId3, currentPage);
    }
  }

  const combinedContainerId = "combinedMovieContainer";
  if (document.getElementById(combinedContainerId)) {
    const allMovies = [...moviesnow, ...moviesupc];
    for (var k = 0; k < allMovies.length; k++) {
      var combinedMovieCard = new MovieCard(allMovies[k]);
      combinedMovieCard.createCard(combinedContainerId, currentPage);
    }
  }

  (function () {
    emailjs.init("GPSeC8rGnNOyljaGF");
  })();

  const form = document.getElementById("contact-form");
  if (form) {
    console.log("Adding event listener");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five-digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // emailJS ID's
      emailjs.sendForm("service_7rijg9p", "template_bpwozvu", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
  }
};

//--- Search Box ---//

// Storing the latest user input
let searchValue = "";

//get the seach icon and add an event listener
document.getElementById("navsearch").addEventListener("click", function () {
  //Change the display to flex showing the search box
  document.getElementById("searchbox").style.display = "flex";
});
//get the close icon and add an event listener
document.getElementById("closeInput").addEventListener("click", function () {
  //Change the display to none hiding the search box
  document.getElementById("searchbox").style.display = "none";
});

// Get the input element
var inputElement = document.querySelector(".searchbox__container input");

inputElement.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Get the user-entered text
    let userInput = inputElement.value;
    // Set the searchValue to the user-entered text
    searchValue = userInput;
    // Clear the input field
    inputElement.value = "";
    console.log(searchValue);
  }
});

//--- Search Box ---//

/*Hamburger-show*/
function toggleNave__hamburger() {
  const hamburger = document.querySelector(".nav__links-hamburger");
  const hamburgerImg = document.querySelector(".everything-box");

  hamburger.style.display =
    hamburger.style.display === "flex" ? "none" : "flex";
  hamburgerImg.style.display =
    hamburgerImg.style.display === "none"
      ? "flex"
      : "none"; /*hide the img when hamburger menu is clicked*/
}

/*toggle show/close video*/

let playVideo = document.querySelector(".play-button");
let videoPopup = document.querySelector(".clip");
let hideVideo = document.querySelector(".bi-x-lg");

if (playVideo && videoPopup && hideVideo) {
  playVideo.onclick = function () {
    videoPopup.classList.toggle("clip");
  };

  hideVideo.onclick = function () {
    videoPopup.classList.toggle("clip");
  };
} else {
  console.log("One or more elements not found");
}
