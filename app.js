require('dotenv').config();
const express = require('express');

const routers = require('./app/routers');

const app = express();
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use(routers);

// Lancement du server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});