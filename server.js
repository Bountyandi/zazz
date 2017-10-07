import express from 'express';
import path from 'path';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

import * as api from './server/apiHandlers'


const PORT = 3000;

const PUBLIC_PATH = __dirname + '/public';

const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://127.0.0.1/zazzdb';

// ---------------------------- Webpack
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.babel').default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
else {
  app.use(express.static(PUBLIC_PATH));
}
// ---------------------------- /Webpack


mongodb.MongoClient.connect(dbUrl, (dbErr, db) => {

  app.get('/api/terminos/', api.getTerminos);

  app.get('/api/terminos/search/:substr', api.searchTerminos);

  app.post('/api/terminos/', api.postTermino);

  app.put('/api/terminos/', api.putTermino);

  app.delete('/api/terminos/', api.deleteTermino);

});

/*

mongodb.MongoClient.connect(dbUrl, (err, db) => {

  app.get('/api/terminos/', (req, res) => {
    db.collection('terminos').find({}).toArray((err, terminos) => {
      errorHandler(err);
      res.json({ terminos });
    })
  });

  app.get('/api/terminos/search/:substr', (req, res) => {
    const { substr } = req.params;

    db.collection('terminos').find(
      {
        $or: [
          { name: {$regex: `.*${substr}.*`} },
          { description: {$regex: `.*${substr}.*`} }
        ]
      }
    ).toArray((err, terminos) => {
      errorHandler(err);
      res.json({ terminos });
    })
  });

  app.post('/api/terminos/', (req, res) => {
    const { name, description } = req.body;

    db.collection('terminos').insert({ name, description }, (err, result) => {
      errorHandler(err);
      res.json({ termino: result.ops[0]})
    })
  });

  app.put('/api/terminos/', (req, res) => {
    const { _id, name, description } = req.body;

    db.collection('terminos').update(
      { _id: new mongodb.ObjectId(_id) },
      { $set: { name, description } },
      (err, result) => {
        errorHandler(err);
        res.json({ _id, name, description });
      })
  });

  app.delete('/api/terminos/', (req, res) => {
    const { _id } = req.body;

    db.collection('terminos').remove(
      { _id: new mongodb.ObjectId(_id) },
      (err, result) => {
        errorHandler(err);
        res.json({ _id });
      })
  });

});

*/

function errorHandler(err) {
  if (err) {
    res.status(500).json({errors: {global: 'Something went wrong'}});
    //return;
  }
}

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});
