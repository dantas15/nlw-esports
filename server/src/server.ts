import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send({ message: "Hello world" });
});

app.listen(3333, () => {
  console.log("Server is running @ http://localhost:3333");
});
