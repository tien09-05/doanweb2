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
        if (req.query.type) {
            Watch.find({ type: req.query.type }).lean()
                .then(watches => {
                    res.render('home', { watches })
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
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})
module.exports = new SiteController();
