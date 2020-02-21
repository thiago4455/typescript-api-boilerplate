import express from 'express';
import routes from './api/routes';
const app = express();

const port = 8001;

app.use(routes);
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
