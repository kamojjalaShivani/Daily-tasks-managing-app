const { Task } = require('../models');

const createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, UserId: req.user.id });
  res.status(201).json(task);
};

const getTasks = async (req, res) => {
  const tasks = await Task.findAll({ where: { UserId: req.user.id } });
  res.json(tasks);
};

const updateTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task.UserId !== req.user.id) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  await task.update(req.body);
  res.json(task);
};

const deleteTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task.UserId !== req.user.id) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  await task.destroy();
  res.json({ message: 'Task deleted' });
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
