const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const { title } = request.query;
  const results = title ? repositories.filter(project => project.title.includes(title)) : project;
  return response.json(results)
});

app.post("/repositories", (request, response) => {
  const {url, title, techs} = request.body;
  const repository = {id: uuid(), url, title, techs, likes: 0}
  repositories.push(repository)
  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (req, res) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  
  const repository = repositories.find((r) => r.id === id)

  return response.json(repository)
});

module.exports = app;
