const { mysqlHelper } = require("../../common");

(() => {
    const express = require("express");
    const router = express.Router();
    const userController = require("./methods/index");
    const userInfoController = require('./sql/index');
    const { middlewareHelper } = require('./../../common/index');

    router.post('./getUsers', middlewareHelper.isAuthenticate, userInfoController.view_user_list);
    router.post('/viewNormalUser', userController.userNormalList);
    router.post('/viewUserById/:id', userController.userListById);
    router.post('/viewUserList', userController.userList);
    router.post('/sign-up', userController.userSignup);
    router.post('/login', userController.userLogin);
    module.exports = router;
})();