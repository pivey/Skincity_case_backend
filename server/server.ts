import express, {
  Application, Request, Response
} from 'express';
import {
  combination,
  dry,
  mature,
  normal,
  oily,
  sensitive
} from '../images';

const skinTypes = [
  {
    id: '9238482349',
    name: 'Normal',
    image: normal
  },
  {
    id: '9238482347',
    name: 'Dry',
    image: dry
  },
  {
    id: '9238482348',
    name: 'Oily',
    image: oily
  },
  {
    id: '9238482350',
    name: 'Combination (Oily and Dry)',
    image: combination
  },
  {
    id: '9238482351',
    name: 'Mature',
    image: mature
  },
  {
    id: '9238482352',
    name: 'Sensitive',
    image: sensitive
  }
];

const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const PORT: string = process.env.PORT || '3001';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/skinTypes', (req: Request, res: Response) => {
  res.send(skinTypes);
});

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`server started listening at http://localhost:${PORT}`);
    });
  }
  catch (error) {
    console.error(error.message);
  }
};

startServer();
