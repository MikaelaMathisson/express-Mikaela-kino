import express from "express";
import { engine } from "express-handlebars";
import { loadMovie, loadMovies } from "./src/movies.js";

const app = express();

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");



app.get("/", async (request, response) => {
const movies = await loadMovies();
res.render("home", { movies });
});

app.get("/movies/:movieId", async (request, response) =>{
    const movie = await loadMovie(req,params,movieId);
    res.render("movie", { movie });
});



app.use("/static", express.static("./static"));

app.listen(5080);