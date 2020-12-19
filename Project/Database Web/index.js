require('dotenv').config();
const db = require('./models/index');
const express = require('express');
const app = express();
const cors = require('cors');
const categoryRoutes = require('./routes/Category');
const newsRoutes = require('./routes/News');
const imageRoutes = require('./routes/Image');

require('./config/passport/passport');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/categories', categoryRoutes);
app.use('/news', newsRoutes);
app.use('/images', imageRoutes);

db.sequelize.sync({force: true}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is Running at port ${process.env.PORT}`);
  })
});




