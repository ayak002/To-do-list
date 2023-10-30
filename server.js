const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT;

app.use(express.static(path.join("screen")));

app.listen(port, () => {
    console.log(`Server Express listening on port ${port}`);
});
