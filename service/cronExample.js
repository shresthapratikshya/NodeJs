const schedule = require('node-schedule');
const job = schedule.scheduleJob('* * * * * *', function () {
    console.log('Cron is working');
})