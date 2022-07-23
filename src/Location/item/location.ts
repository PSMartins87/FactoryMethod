import Item from "./interfaces/item";

export default abstract class Location {
    startItem(): void {
        const item = this.createItem();
        item.getDescription;
    }
    protected abstract createItem(): Item;
}
