
// remember about pagination and autoloading
export const getTerminos = (req, res) => {
  console.log(req)
  db.collection('terminos').find({}).toArray((err, terminos) => {
    //errorHandler(err);
    res.json({ terminos });
  })
};

export const searchTerminos = (req, res) => {
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
};

export const postTermino = (req, res) => {
  const { name, description } = req.body;

  db.collection('terminos').insert({ name, description }, (err, result) => {
    errorHandler(err);
    res.json({ termino: result.ops[0]})
  })
};

export const putTermino = (req, res) => {
  const { _id, name, description } = req.body;

  db.collection('terminos').update(
    { _id: new mongodb.ObjectId(_id) },
    { $set: { name, description } },
    (err, result) => {
      errorHandler(err);
      res.json({ _id, name, description });
    })
};

export const deleteTermino = (req, res) => {
  const { _id } = req.body;

  db.collection('terminos').remove(
    { _id: new mongodb.ObjectId(_id) },
    (err, result) => {
      errorHandler(err);
      res.json({ _id });
    })
};