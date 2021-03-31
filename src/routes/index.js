
const siteRouter = require('./site.js')
const watchRouter = require('./watch.js')
const userRouter = require('./user.js')
function route(app) {

    app.use('/', siteRouter);
    app.use('/watch', watchRouter);
    app.use('/users', userRouter);

}

module.exports = route;