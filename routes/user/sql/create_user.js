const httpStatus = require('http-status');
const mysqlHelper = require('./../../../common/mysqlHelper');
((userInfo) => {
    userInfo.validate = async (data) => {
        let dbResponse = { status: httpStatus.BAD_REQUEST, message: "error" };
        let date = new Date().getTime();
        let query = "INSERT INTO userinfos( username, password, email, phone, address, userTypeId, status,createdAt, createdBy,updatedAt, updatedBy) VALUES ('"
            + data.username + "','" + data.password + "','" + data.email + "','" + data.phone + "','" + data.address +
            "','" + data.userTypeId + "','" + data.status + "','" + date + "','" + data.createdBy + "','" + data.updatedAt + "','" + data.updatedBy + "')";
        const res = await mysqlHelper.query(query);
        if (res && res.inserted > 0) {
            dbResponse.status = httpStatus.OK;
            dbResponse.message("Inserted successfully");
        }
        //return in signup
    }
})(module.exports)