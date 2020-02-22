import express from 'express';
import bodyParser from 'body-parser';
import routes from './api/routes';

const app = express();

const port = 8001;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(routes);
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
