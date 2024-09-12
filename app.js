const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const errorHandler = require('./middleware/errorHandler');
const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.use(errorHandler);

sequelize.sync().then(() => {
    console.log('Database synced');
  });

module.exports = app;
