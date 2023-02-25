'use-strict';
const mysql = require('mysql2/promise');
((mysqlHelper) => {
  let dbClient = null;
  mysqlHelper.init = async () => {
    try {
      if (!dbClient) {
        dbClient = await mysql.createPool({
          user: process.env.MYSQL_DB_USER,
          password: process.env.MYSQL_DB_PASSWORD,
          host: process.env.MYSQL_DB_HOST,
          port: process.env.MYSQL_DB_MIGRATION_PORT,
          database: process.env.MYSQL_DB_NAME,
          waitForConnections: true,
          dateStrings: true,
        });
      }
      return dbClient;
    } catch (error) {
      throw error;
    }
  };

  // mysqlHelper.query = async (query, fields, metaData) => {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       dbClient.query(query, fields, (err, results) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(results);
  //         }
  //       });
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // };

  mysqlHelper.query = async (query, fields, metaData) => {
    try {
      let res = dbClient.query(query, fields);
      return res;
    } catch (error) {
      throw error;
    }

  };

  mysqlHelper.queryFormat = (query, values) => {
    try {
      return (dbClient.config.queryFormat = function (query, values) {
        if (!values) return query;
        return query.replace(
          /\:(\w+)/g,
          function (txt, key) {
            if (values.hasOwnProperty(key)) {
              return this.escape(values[key]);
            }
            return txt;
          }.bind(this)
        );
      });
    } catch (error) {
      logger.error({}, 'Error at mysql.database.helper.js mysqlHelper.queryFormat', error);
      throw error;
    }
  };
})(module.exports);
