const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // for serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set("view engine", "pug"); // Set the template engine as Pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

// Our pug demo endpoint
app.get("/demo", (req, res) => {
  res
    .status(200)
    .render("demo", {
      title: "Hey Bhaalu!",
      message: "Hello there and thanks for telling me how to use Pug!",
    });
});

// ENDPOINTS
app.get("/", (req, res) => {
  const con =
    "This is the best content on the internet so far so use it wisely.";
  const params = { title: "Pug is the best", content: con };
  res.status(200).render("index.pug", params);
});

app.post('/', (req, res) => {
  let details = req.body;
  console.log(details);

  let outputToWrite = `The name of the client is ${details.name}, age = ${details.age}, gender = ${details.gender}, address = ${details.address}, more = ${details.more}\n`;
  fs.appendFileSync('output.txt', outputToWrite);

  const params = {'message':'Your form has been submitted successfully.'};
  res.status(200).render('index.pug', params);
})

// STARTING THE SERVER
app.listen(port, () => {
  console.log(`Application started succesfully on port ${port}`);
});
