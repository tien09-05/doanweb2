const Watch = require('../models/Watch.js');
class SiteController {
    // [GET] /

    index(req, res) {
        Watch.find({}, function (err, course) {
            if (!err) {
                res.json(course);
            } else {
                res.status(400).json({ error: 'ERROR' })
            }
        });
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
