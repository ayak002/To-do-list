const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json()); //parser le corps des requêtes garder ça ou utiliser bodyparser?

app.use(express.static(path.join("screen")));

app.post("/createtask", async (req, res) => {
    const { content} = req.body;
    const tasks = await prisma.task.create({
      data: {
        content,
      },
    });
    res.json(tasks);
});

app.get("/showtask", async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});


app.listen(port, () => {
    console.log(`Server Express listening on port ${port}`);
});
