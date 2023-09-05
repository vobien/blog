const Course = require('../models/Course');
const { toObjects } = require('../../utils/mongoose');

class SiteController {
    // [GET] /
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('home', {
                courses: toObjects(courses),
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
