const express = require('express');
const registerUser = require('../controller/registerUser');
const login = require('../controller/login');
const userDetails = require('../controller/userDetail');
const logout = require('../controller/logout');
const updateUserDetails = require('../controller/updateUserDetails');
const ForgotPassword = require('../controller/forgot-password');
const taskController = require('../controller/TaskController')
const searchUser = require('../controller/searchUser');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get('/user-details', userDetails);
router.get('/logout', logout);

router.post('/send_otp_email', ForgotPassword.send_otp);
router.post('/verify_otp', ForgotPassword.verify_otp);
router.post('/update_password', ForgotPassword.update_password);

// tasks
router.get('/tasks', taskController.getAllTasks);
router.post('/task', taskController.createTask);
router.patch('/:id', taskController.updateTaskStatus);
router.delete('/:id', taskController.deleteTask);

// router.put('/update-user', updateUserDetails);

// router.post('/search-user', searchUser)

module.exports = router;