// const express = require(`express`);
import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.post(`/api/tasks`, (req, res) => {
  res.status(200).send(`CREATE TASK`);
});

app.get(`/api/tasks`, (req, res) => {
  res.status(200).send(`GET TASK`);
});

app.put(`/api/tasks`, (req, res) => {
  res.status(200).send(`UPDATE TASK`);
});

app.delete(`/api/tasks/:id`, (req, res) => {
  res.status(200).send(`DELETE TASK ` + req.params.id);
});

app.listen(PORT, () => {
  console.log(`Server is running on port $(PORT)`);
});
