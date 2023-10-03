const express = require('express');
const app = express();
const port = 3000;
const apiRouter = require('./api/routes');

app.use('/api', apiRouter);

app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
})