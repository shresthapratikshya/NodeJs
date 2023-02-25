//const { mysqlHelper } = require("./../../../common/index");
const { hasher } = require('./../../../common/index');
(() => {
    //const helper = require("./../../../common/index")
    const user = require('./../sql/create_user');
    const validationHelper = require('./../../../common/validationHelper');
    module.exports = async (req, res, next) => {
        const isValid = await validationHelper.signUpValidation(req.body);
        req.body.salt = await hasher.createSalt();
        req.body.password = await hasher.computeHash(req.body.password, req.body.salt);

        if (!isValid) {
            res.status(400).send("Invalid creds");
        }
        else {
            user.validate(req.body);
            res.status(200).send("Authorized entered");
        }
        console.log(req.body);
    }
})()