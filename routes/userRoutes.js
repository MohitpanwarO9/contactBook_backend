const express = require("express");
const router = express.Router();

const {registerUser, loginUser, getCurrentUser, updateUser} = require("../controllers/userController");


router.route('/register').post(registerUser);
router.route('/login').get(loginUser);
router.route('/:id').get(getCurrentUser).put(updateUser);


module.exports = router;