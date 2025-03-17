const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');

//parse middleware
app.use(express.json());
//middleware
app.use('/api/v1/posts', postsRouter);
//img middleware
app.use(express.static('public'));

//server on listen
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`); 
});

