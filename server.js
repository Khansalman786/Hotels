const express = require("express");
const app = express();
const db = require("./db");

const bodyPaser = require("body-parser");
app.use(bodyPaser.json());

const Person = require("./Model/person");

app.get("/", function (req, res) {
  res.send("Welcome to our Hotel, How we can help you.");
});

// Post route to add a person
app.post("/person", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    // Create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log("data Saved", response);
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal Service Error"
    });
  }
});

// Get method to get the person
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fatch sucessfully from the server");
    res.status(200).json(data);

  } catch (error) {
    console.log(err);
    res.status(500).json({
      error: "Internal Service Error"
    });
  }  

});





app.listen(3000, () => {
  console.log("Server is live");
});
