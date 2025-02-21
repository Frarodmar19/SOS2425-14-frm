const express = require("express");
const app = express();
const PORT = process.env.PORT ||20202;

app.use("/", express.static("./public"));

app.get("/happy-face", (request, response) => {
    response.send(`
    <div class="container" style="display:flex; align-items:center; justify-content:center; width:100%; height:100%; background-color:#222;">
        <p style="font-size:10em; color:#fff;">&#x263a;</p>
    </div>
    `);
});

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}...`);
});
