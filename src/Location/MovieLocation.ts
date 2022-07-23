import item from "./item/interfaces/item";
import Movie from "./item/interfaces/movie";
import Location from "./item/location";

export default class MovieLocation extends Location {
    protected createItem(): item {
        return new Movie();
    }
}
