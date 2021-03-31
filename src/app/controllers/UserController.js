var localStorage = require('localStorage')
const Watch = require('../models/Watch.js');
const User = require('../models/User.js');
class UserController {
    // [GET] /
    index(req, res, next) {

        User.find({}).lean()
            .then(users => {
                res.json(users)
            })
            .catch(next)
    }


    // dang ky
    save(req, res, next) {
        req.body.role = "user";
        const user = new User(req.body)
        user.save()
            .then(() => {
                res.redirect('/dangnhap')
            })
            .catch(next)

    }

    // dang nhap user
    handledangnhap(req, res, next) {
        User.find({ name: req.body.name, password: req.body.password }).lean()
            .then(user => {
                if (user.length > 0) {
                    localStorage.setItem('user', JSON.stringify(user));
                    res.redirect('/')
                } else {
                    res.redirect('back')
                    return;
                }
            })
            .catch(next)
    }


    // tìm user cần edit theo id
    // edit(req, res) {
    //     User.findById(req.params.id).lean()
    //         .then(users => res.render('editUser', users))
    // }

    // update user
    //[PUT] /:id
    update(req, res) {
        User.updateOne({ _id: req.params.id }, { $set: { role: 'admin' } })
            .then(() => res.redirect('/admin/users'))
    }

    //[DELEE] /:id
    delete(req, res) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))

    }
}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})
module.exports = new UserController();
