const Watch = require('../models/Watch.js');
const User = require('../models/User.js');
var localStorage = require('localStorage')

class SiteController {
    index(req, res, next) {
        Watch.find({}).lean()
            .then(watches => {
                res.render('home', { watches, formatter })
            })
            .catch(next)
    }
    dangnhap(req, res, next) {
        res.render('dangnhap')
    }

    dangky(req, res, next) {
        res.render('dangky')
    }
    logout(req, res, next) {
        localStorage.setItem('user', "");
        res.redirect('/')
    }
    admin(req, res, next) {
        res.render('admin')
    }
    adminWatch(req, res, next) {
        Watch.find({}).lean()
            .then(watches => {
                res.render('adminWatch', { watches })
            })
            .catch(next)
    }

    adminUsers(req, res, next) {
        User.find({}).lean()
            .then(users => {
                res.render('adminUsers', { users })
            })
            .catch(next)
    }
    sort(req, res) {
        let type = req.query.type;
        if (req.query.type && req.query.price) {
            if (req.query.price === "up") {
                Watch.find({ type: req.query.type }).sort({ price: "1" }).lean()
                    .then(watches => {
                        res.render('home', { watches, type })
                    })
            } else {
                Watch.find({ type: req.query.type }).sort({ price: "-1" }).lean()
                    .then(watches => {
                        res.render('home', { watches, type })
                    })
            }
        } else {
            if (req.query.type) {
                Watch.find({ type: req.query.type }).lean()
                    .then(watches => {

                        res.render('home', { watches, type })
                    })
            } else {
                if (req.query.price === "up") {
                    Watch.find().sort({ price: "1" }).lean()
                        .then(watches => {
                            res.render('home', { watches })
                        })
                } else {
                    Watch.find().sort({ price: "-1" }).lean()
                        .then(watches => {
                            res.render('home', { watches })
                        })
                }
            }
        }

    }

    adminWatchSearch(req, res, next) {
        Watch.find({ name: { $regex: '.*' + req.query.keyword + '.*' } }).lean()
            .then(watches => {
                res.render('adminWatch', { watches })
            })
            .catch(next)
    }
}
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})
module.exports = new SiteController();
