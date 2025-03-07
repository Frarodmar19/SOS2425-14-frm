const express = require("express");
const app = express();
const PORT = process.env.PORT ||20202;

const BASE_API = "/api/v1";

app.use("/", express.static("./public"));

let contacts = [
    {
        name: "John Doe",
        phone: "555-555-5555",
    },
    {
        name: "Jane Doe",
        phone: "444-444-4444",
    },
    {
        name: "Jim Doe",
        phone: "333-333-3333",
    }
]

app.get(BASE_API + "/contacts", (request, response) => {
    console.log("GET /api/v1/contacts");
    response.json(contacts);
});

app.get(BASE_API + "/contacts", (request, response) => {
    console.log("POST /api/v1/contacts");
    let newContact = request.body;
    contacts.push(newContact);
    response.sendStatus(201);
});

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
