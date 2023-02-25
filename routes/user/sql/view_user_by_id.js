const httpStatus = require("http-status");
const mysqlHelper = require('./../../../common/mysqlHelper');
((userListById) => {
    userListById.getUserById = async (data) => {
        let dbResponse = { status: httpStatus.BAD_GATEWAY, message: "error" };
        let query = `SELECT * FROM usertypes WHERE id= ${data}`;
        try {
            let result = await mysqlHelper.query(query);
            dbResponse.status = httpStatus.OK;
            return result;
        } catch (error) {
            console.error(error);
            return dbResponse;
        }
    }
})(module.exports);