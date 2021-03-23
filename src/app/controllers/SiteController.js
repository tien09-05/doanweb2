const Watch = require('../models/Watch.js');
class SiteController {
    // [GET] /

    index(req, res, next) {
        // });

        Watch.find({}).lean()
            .then(watches => {
                res.render('home', { watches, formatter })
            })
            .catch(next)
    }
    admin(req, res, next) {

        Watch.find({}).lean()
            .then(watches => {
                res.render('admin', { watches })
            })
            .catch(next)
    }
    add(req, res) {
        res.render('add');
    }

    save(req, res) {
        const watch = new Watch(req.body)
        watch.save()
            .then(res => res.redirect('/'));
    }

    edit(req, res) {
        Watch.findById(req.params.id).lean()
            .then(watches => res.render('edit', watches))

    }

    //[PUT] /:id
    update(req, res) {
        Watch.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin'))

    }

    //[DELEE] /:id
    delete(req, res) {
        Watch.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))

    }

    //[GET] 
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
