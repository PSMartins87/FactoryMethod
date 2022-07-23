import Item from "./item";

export default class Movie implements Item {
    start(): void {
        console.log("iniciando filme");
    }
    getDescription(): void {
        console.log("descrição do filme");
    }
}
