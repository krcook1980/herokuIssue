const router = require("express").Router();
const userController = require("../../controllers/controller");


router.route('/')
    .put(userController.update)

// router.route('/block')    
//     .put(userController.block)

router.route("/findMatches")
    .post(userController.findMatches)

router.route('/getUser/:id')
    .get(userController.getUser)

router.route('/updateUser')    
    .put(userController.updateUser)

router.route('/createUser') 
    .post(userController.createUser)

module.exports = router;