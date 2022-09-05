import Inventory from "../utils/inventoryClass.js"

export default class Model {
    constructor() {
        this.guitarList = new Inventory;
        this.guitarList.addGuitar("34-343", 3123.75, "Gibson", "Les Paul", "Electric", "Maple", "Walnut");
        this.guitarList.addGuitar("74-323", 5407.00, "Fender", "Stratocaster", "Electric", "Cedar", "Mahogany");
        this.guitarList.addGuitar("11-421", 109.50, "Yamaha", "F310", "Acoustic", "Ash", "Birch");
        this.guitarList.addGuitar("67-965", 199.76, "Tanglewood", "Crossroads", "Acoustic",  "Mahogany", "Mahogany");
        this.guitarList.addGuitar("74-343", 2500.80, "Gibson", "Hummingbird", "Electric", "Mahogany", "Walnut");
        this.guitarList.addGuitar("17-421", 99.50, "Yamaha", "F100", "Acoustic", "Ash", "Birch");
    }
}