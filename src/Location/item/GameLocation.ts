import Game from "./interfaces/games";
import item from "./interfaces/item";
import Location from "./location";

export default class GameLocation extends Location {
    protected createItem(): item {
        return new Game();
    }
}
