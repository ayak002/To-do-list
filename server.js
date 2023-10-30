const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join("screen")));

app.listen(port, () => {
    console.log(`Server Express listening on port ${port}`);
});
