(() => {
    const viewNormalUser = require('./../sql/view_normal_user');
    module.exports = async (req, res, next) => {
        try {
            let result = await viewNormalUser.getNormalUser();
            console.log(result[0]);
            res.send(result[0]);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
})()