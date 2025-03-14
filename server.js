const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');


//server on listen
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`); 
});

//middleware
app.use('/api/v1/posts', postsRouter);