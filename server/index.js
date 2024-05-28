const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    let config = {
        method: 'GET',
        url: "https://api.jsonbin.io/v3/b/665625a6e41b4d34e4faef34",
        headers: {
            'Content-Type': 'application/json',
            "X-Master-Key": "$2a$10$1kZaCJWEs7fLiFTxRCaYlOnKO3EKEh9Nq.k5h7MOgPBS9sJNl0gWe"
        }
    }
    axios(config)
    .then(result => {
        res.send(result.data.record);
    });
});



const user = require("./controller/userController");
app.use("/registro-usuario", user.register);
// app.use("/login",user.login);


const PORT = 3001

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto' + PORT)
})