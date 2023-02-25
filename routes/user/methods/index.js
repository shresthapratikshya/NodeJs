(() => {
    module.exports = {
        userSignup: require('./signup'),
        userList: require('./userList'),
        userListById: require('./userListById'),
        userNormalList: require('./userNormalList'),
        userLogin: require('./login')
    };
})();