const httpStatus = require('http-status');
const mysqlHelper = require('./../../../common/mysqlHelper');
((viewNormalUser) => {
    viewNormalUser.getUserTypeId = async (data) => {
        let dbResponse = { status: httpStatus.BAD_GATEWAY, message: "error" };
        const name = "Normal User";
        let query = `SELECT id FROM usertypes WHERE name=?`;
        let params = [name];
        try {
            let result = await mysqlHelper.query(query, params);
            dbResponse.status = httpStatus.OK;
            return result;
        } catch (error) {
            console.error(error);
            return dbResponse;
        }

    }
    viewNormalUser.getNormalUser = async (data) => {
        let dbResponse = { status: httpStatus.BAD_GATEWAY, message: "error" };
        const result = await viewNormalUser.getUserTypeId();
        let query = `SELECT * FROM userinfos WHERE userTypeId=?`;
        let params = [result.id];
        try {
            let result = await mysqlHelper.query(query, params);
            dbResponse.status = httpStatus.OK;
            return result;
        } catch (error) {
            console.error(error);
            return dbResponse;
        }
    }
})(module.exports);