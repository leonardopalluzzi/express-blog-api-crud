const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');

//import error handlers
const serverError = require('./middlewares/serverError');
const error_404 = require('./middlewares/404_Error');

//parse middleware
app.use(express.json());
//middleware
app.use('/api/v1/posts', postsRouter);
//img middleware
app.use(express.static('public'));

//server error middleware
app.use(serverError);

//404 middleware
app.use(error_404);

//server on listen
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`); 
});

