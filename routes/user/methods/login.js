// const schedule = require('node-schedule');
(() => {
    const loginUser = require('./../sql/loginUser');
    module.exports = async (req, res, next) => {
        try {
            let response = await loginUser.loginValidation(req.body);
            console.log("Login successful");
            res.status(200).send(response);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
})()