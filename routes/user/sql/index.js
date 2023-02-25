(() => {
    module.exports = {
        create_user: require('./create_user'),
        view_user_list: require('./view_user'),
        view_user_by_id: require('./view_user_by_id'),
        view_normal_user: require('./view_normal_user'),
        loginUser: require('./loginUser')
    };
})();

