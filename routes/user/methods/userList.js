(() => {
    const viewUser = require('./../sql/view_user');
    module.exports = async (req, res, next) => {
        try {
            let result = await viewUser.getAllUserList();
            //console.log("MILiracha");

            console.log(result[0]);
            res.send(result[0]);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
})()