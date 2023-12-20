var express = require('express');
var router = express.Router();

const TaskController = require('../controller/task');

/* Task Routes */
router.post('/', TaskController.createTask);
router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTaskDataByPk);
router.patch('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

module.exports = router;
