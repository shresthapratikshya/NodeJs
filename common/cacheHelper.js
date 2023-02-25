const NodeCache = require('node-cache');
const myCache = new NodeCache();

((cacheHelper) => {
    cacheHelper.saveCache = async (key, value, ttl) => {
        try {
            const success = await myCache.set(key, value, ttl);
            return success;

        } catch (error) {
            console.error(error);
        }

    }
    cacheHelper.getCache = async (key) => {
        try {
            const value = await myCache.get(key);
            return value;
        } catch (error) {
            console.log(error);
        }
    }
})(module.exports)

