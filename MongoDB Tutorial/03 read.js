db.inventory.find() // Fetch/Query all the documents of collection "inventory" of database
db.inventory.find({}) // Fetch/Query all the documents of collection "inventory" of database

db.inventory.find({qty:90}) // Fetch/Query all the documents of collection "inventory" that have the key "qty"=90