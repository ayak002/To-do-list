require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(express.static(path.join("screen")));

app.post("/task", async (req, res) => {
    const { content } = req.body;
    const tasks = await prisma.task.create({
      data: {
        content,
      },
    });
    res.json(tasks);
});

app.get("/task", async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});

app.delete("/task", async (req, res) => {
  const taskId  = req.body.id;
  const deleteTask = await prisma.task.delete({
    where: {
      id: Number(taskId)
    }
  });
  res.json(deleteTask);
})

app.listen(port, () => {
    console.log(`Server Express listening on port ${port}`);
});