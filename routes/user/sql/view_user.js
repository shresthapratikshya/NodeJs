const httpStatus = require('http-status');
const mysqlHelper = require('./../../../common/mysqlHelper');
((userList) => {
    userList.getAllUserList = async (data) => {
        let dbResponse = { status: httpStatus.BAD_GATEWAY, message: "error" };
        let query = "SELECT * FROM usertypes";
        try {
            let result = await mysqlHelper.query(query);
            console.log("Miliracha");
            dbResponse.status = httpStatus.OK;
            //dbResponse.message("Retrieved");
            return result;
        } catch (error) {
            console.error(error);
            return dbResponse;
        }
    }
})(module.exports)

