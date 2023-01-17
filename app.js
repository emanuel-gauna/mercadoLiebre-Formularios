const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030;

app.use(express.static("public"));
app.use(express.static("views"));

/* home */
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.listen( PORT, () => console.log(`server listen in port ${PORT}\n http://localhost:${PORT}`));