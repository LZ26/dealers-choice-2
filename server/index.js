const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const db = require('./db');

app.use(morgan('dev'));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use('/api', require('./routes/index.js'));

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});

const init = async () => {
  try {
    await db.syncAndSeed();

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`server is listening on port: ${port}`);
    });
  } catch (err) {
    console.log('Server error!');
  }
};

init();
