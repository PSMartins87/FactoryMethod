import Game from "./Location/item/interfaces/games";
import Item from "./Location/item/interfaces/item";
import Movie from "./Location/item/interfaces/movie";

declare var process;
let item : Item
if(process.argv.includes("--movie")){
    item = new Movie
}else if(process.argv.includes("--game")){
    item = new Game
}else{
    console.error("tipo invalido");
}