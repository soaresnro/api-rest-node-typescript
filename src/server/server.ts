import express from "express";

const server = express();

server.get('/', (req, res) => {
    res.send('Olá, DEV!');
});

export { server };