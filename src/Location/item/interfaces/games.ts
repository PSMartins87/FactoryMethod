import Item from "./item";

export default class Game implements Item {
    start(): void {
        console.log("iniciando game");
    }
    getDescription(): void {
        console.log("descrição do jogo");
    }
}
