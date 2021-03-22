const Watch = require('../models/Watch.js');
class SiteController {
    // [GET] /

    index(req, res, next) {
        // Watch.find({}, function (err, course) {
        //     if (!err) {
        //         res.render('home', { course });
        //     } else {
        //         res.status(400).json({ error: 'ERROR' })
        //     }
        // });

        Watch.find({}).lean()
            .then(watches => {
                res.render('home', { watches })
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
}

module.exports = new SiteController();
