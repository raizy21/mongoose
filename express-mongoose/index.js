import './db/index.js';   // import the database connection
import express from 'express';  // import express
import postRouter from './routers/postRouter.js'; // import the post router
import userRouter from './routers/userRouter.js'; // import the user router
import errorHandler from './middleware/errorHandler.js';  // import the error handler

const app = express();    //  create an express app
const port = process.env.PORT || 8080;    // set the port

app.use(express.json());    //    enable parsing JSON bodies

app.use('/posts', postRouter); // use the post router
app.use('/users', userRouter); // use the user router
app.use('*', (req, res) => res.status(404).json({ error: 'Not Found' }));
app.use(errorHandler);  //  use the error handler

app.listen(port, () => console.log(`Server is running on port ${port}`)); // start the server
