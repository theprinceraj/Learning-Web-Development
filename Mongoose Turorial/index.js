const config = require("./config.json");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(config.dbConnectLink);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("Connected succesfully.");

  const kittySchema = new mongoose.Schema({
    name: String,
  });
  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model("Kitten", kittySchema); // compiles the schema and makes a model called Kitten

  var bhaaluKitty = new Kitten({
    name: "bhaaluKiBilly",
  }); // makes a new entry in Kitten model but its NOT saved in server yet

  await bhaaluKitty.save(); // saves the entry to server
  bhaaluKitty.speak();

  const kittens = await Kitten.find(); // returns all the items of kittens collection
  console.log(kittens);

  const filteredKittens = await Kitten.find({ name: /^bhaalu/ }); // searching for something in kittens collection and returns it
  console.log(filteredKittens)
}
