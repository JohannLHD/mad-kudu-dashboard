const express = require('express');
const router = require('./routes/speciesRoute');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/', (req, res) => {
  console.log('Working');
  res.send('working');
});
app.use('/api/v1/species', router);

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});
