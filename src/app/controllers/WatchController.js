const Watch = require('../models/Watch.js');
class WatchController {
    // [GET] /
    index(req, res, next) {

        Watch.find({}).lean()
            .then(watches => {
                res.json(watches)
            })
            .catch(next)
    }
    add(req, res) {
        res.render('addWatch');
    }

    save(req, res, next) {
        const watch = new Watch(req.body)
        watch.save()
            .then(() => res.redirect('/admin/watch'))
            .catch(next)

    }

    edit(req, res) {
        Watch.findById(req.params.id).lean()
            .then(watches => res.render('editWatch', watches))

    }

    //[PUT] /:id
    update(req, res) {
        Watch.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/watch'))

    }

    //[DELEE] /:id
    delete(req, res) {
        Watch.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))

    }
}
module.exports = new WatchController();
