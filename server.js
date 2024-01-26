import express from "express";
import { engine } from "express-handlebars";
import { loadMovie, loadMovies } from "./src/movies.js";
export const app = express();

//Serving all the files from kino, making them public to use
// like for example /index.html will show index
app.use(express.static("public"));

//Setting engine to handlebars and views to /templates
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

// Get /home from the user,
// load movies from loadMovies function
// render home page by showing movie on movie.handlebars
app.get("/home", async (req, res) => {
  const movies = await loadMovies();
  res.render("home", { movies });
});

//Get /movies/:movieid from user,
// Load special movie from api
// render movie page for specific movie
app.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  res.render("movie", { movie });
});

app.use("/static", express.static("./static"));

app.listen(5080);
