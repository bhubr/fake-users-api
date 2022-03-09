const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const generateUsers = require('./fake');

const users = generateUsers(200);
const NPP = 4;

const app = express();
app.use(cors());
app.use(morgan('dev'));


app.get('/users', (req, res) => {
  const { page = 1 } = req.query;
  const from = (Number(page) - 1) * NPP;
  const to = from + NPP;
  console.log(from, to)
  const usersSlice = users.slice(from, to);
  return res.send(usersSlice);
});

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`app listening on port ${port}`));
