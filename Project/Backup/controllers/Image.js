const db = require('../models');

const getAllImage = async (req, res) => {
  const allImage = await db.Image.findAll();
  res.status(200).send(allImage);
}

const addImage = async (req, res) => {
  const { name } = req.body;
  const newImage = await db.Image.create({
    name: req.body.name,
    url: req.body.url,
  });
  res.status(201).send(newImage);
}

const updateImage = async (req, res) => {
  const targetId =  Number(req.params.id);
  const { name, url } = req.body;
  const targetImage = await db.Image.findOne({ where: { id: targetId }});
  if (targetImage) {
    await targetImage.update({
      name: name,
      url: url
    });
    res.status(200).send({message: 'Update success.'});
  } else {
    res.status(404).send({message: 'Update failed.'})
  }
}

const removeImage = async (req, res) => {
  const targetId =  Number(req.params.id);
  const targetImage = await db.Image.findOne({ where: { id: targetId }});
  if (targetImage) {
    await targetImage.destroy();
    res.status(204).send({message: 'Deleted success.'});
  } else {
    res.status(404).send({message: 'Deleted failed.'})
  }
}

module.exports = {
  getAllImage,
  addImage,
  updateImage,
  removeImage
}