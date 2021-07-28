const express = require("express");
const app = express();

app.get("/" ,(req,res) => {
    res.send(`<h1>Welcome to home page</h1>`)
})
const port = process.env.PORT || 3000
app.listen(port,() => {
    console.log(`app is running on port ${port}`);
})


