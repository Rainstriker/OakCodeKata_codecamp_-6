const db = require('../models');

const getAllNews = async (req, res) => {
  const allNews = await db.News.findAll();
  res.status(200).send(allNews);
}

const addNews= async (req, res) => {
  const { name, data } = req.body;
  const newNews = await db.News.create({
    name: req.body.name,
    data: req.body.data
  });
  res.status(201).send(newNews);
}

const updateNews = async (req, res) => {
  const targetId =  Number(req.params.id);
  const { name, data } = req.body;
  const targetNews = await db.News.findOne({ where: { id: targetId }});
  if (targetNews) {
    await targetNews.update({
      name: name,
      data: data,
    });
    res.status(200).send({message: 'Update success.'});
  } else {
    res.status(404).send({message: 'Update failed.'})
  }
}

const removeNews = async (req, res) => {
  const targetId =  Number(req.params.id);
  const targetNews = await db.News.findOne({ where: { id: targetId }});
  if (targetNews) {
    await targetNews.destroy();
    res.status(204).send({message: 'Deleted success.'});
  } else {
    res.status(404).send({message: 'Deleted failed.'})
  }
}

module.exports = {
  getAllNews,
  addNews,
  updateNews,
  removeNews
}