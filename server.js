const express = require("express");
const app = express();

const port = process.env.POT || 3000


app.use(express.static("public"));


app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})