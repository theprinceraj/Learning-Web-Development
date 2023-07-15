db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 ) // inserts one document in "inventory" collection of database

db.inventory.insertMany(
    [{ item: "canvas1", qty: 10, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas2", qty: 90, tags: ["wool"], size: { h: 28, w: 35, uom: "cm" } },
    { item: "canvas3", qty: 50, tags: ["linen"], size: { h: 28, w: 5.5, uom: "cm" } },
    { item: "canvas4", qty: 62, tags: ["nilon"], size: { h: 8, w: 35.5, uom: "cm" } },]
 ) // inserts many documents in "inventory" collection of database