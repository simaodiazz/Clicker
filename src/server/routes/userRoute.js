const UserController = require("../controller/userController")
const { Router } = require("express")

const router = Router()

router.post('/', UserController.createUser);

module.exports = router