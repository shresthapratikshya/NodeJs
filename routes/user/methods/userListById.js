(() => {
    const viewUserById = require('./../sql/view_user_by_id');
    module.exports = async (req, res, next) => {
        try {
            let result = await viewUserById.getUserById(req.params.id);
            console.log(result[0]);
            res.send(result[0]);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
})()