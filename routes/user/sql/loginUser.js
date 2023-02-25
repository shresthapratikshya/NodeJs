const mysqlHelper = require('../../../common/mysqlHelper');
const httpStatus = require('http-status');
const { hasher } = require('./../../../common/index');
const { cacheHelper } = require('./../../../common/index');
const { middlewareHelper } = require('./../../../common/middlewareHelper');
((login) => {
    login.loginValidation = async (data) => {
        let dbResponse = { status: httpStatus.BAD_REQUEST, message: "error" };
        const password = data.password;
        let query = `SELECT password FROM userinfos WHERE email='${data.email}'`;
        //let query = `SELECT * FROM userinfos WHERE email='${data.email}' and password='${data.password}'`;
        try {
            const result = await mysqlHelper.query(query);
            // console.log(result.length);
            if (result && result[0] && result[0][0]) {
                const compareValue = await hasher.comparePassword(password, result[0][0].password);
                if (compareValue) {
                    dbResponse.status = httpStatus.OK;
                    dbResponse.message = "Successfully logged in";
                    const returnValue = await cacheHelper.saveCache("login", true, 100000);
                    console.log(returnValue);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
})(module.exports);