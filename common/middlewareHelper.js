const { cacheHelper } = require("./cacheHelper");

((middlewareHelper) => {
    middlewareHelper.isAuthenticate = async (req, res, next) => {
        const isAuthenticated = await cacheHelper.getCache("login");
        if (!isAuthenticated) {
            res.status(401).send({ message: "Unauthorized request" })
        }
        next();
    }
})(module.exports);