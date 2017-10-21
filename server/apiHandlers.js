import mongodb from 'mongodb';
import tagsParser from './helpers/tagsParser';

const limit = 20; // in future must be parameter from UI User


// remember about pagination and autoloading

export const getTerminos = (req, res) => {
  const { page } = req.params;

  console.log('----------------------')
  console.log('getTerminos')

  global.db.collection('terminos')
    .find({})
    .skip(limit * page)
    .limit(limit)
    .toArray((err, terminos) => {
      errorHandler(err);
      res.json({ terminos });
  })
};

export const searchTerminos = (req, res) => {
  const { substr } = req.params;

  console.log('----------------------')
  console.log('searchTerminos')

  global.db.collection('terminos').find(
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
};

export const postTermino = (req, res) => {
  const { name, description, tags } = req.body;

  const createdAt = new Date();
  const tagsArr = tagsParser(tags);

  global.db.collection('terminos').insert({ name, description, tags: tagsArr, createdAt }, (err, result) => {
    errorHandler(err);
    res.json({ termino: result.ops[0]})
  })
};

export const putTermino = (req, res) => {
  const { _id, name, description } = req.body;

  global.db.collection('terminos').update(
    { _id: new mongodb.ObjectId(_id) },
    { $set: { name, description } },
    (err, result) => {
      errorHandler(err);
      res.json({ _id, name, description });
    })
};

export const deleteTermino = (req, res) => {
  const { _id } = req.body;

  global.db.collection('terminos').remove(
    { _id: new mongodb.ObjectId(_id) },
    (err, result) => {
      errorHandler(err);
      res.json({ _id });
    })
};


function errorHandler(err) {
  if (err) {
    res.status(500).json({errors: {global: 'Something went wrong'}});
  }
}

