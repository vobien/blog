const { toObjects } = require('../../utils/mongoose');
const Course = require('../models/Course');

class MeController {
    // [GET] /me/stored/courses
    async getCourses(req, res, next) {
        try {
            const deletedCount = await Course.countDocumentsDeleted({
                $or: [{ deleted: true }],
            });
            const courses = await Course.find({});
            res.render('me/stored-courses', {
                deletedCount,
                courses: toObjects(courses),
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /me/trash/courses
    async getDeletedCourses(req, res) {
        const courses = await Course.findDeleted({ $or: [{ deleted: true }] });
        console.log(courses);
        res.render('me/deleted-courses', {
            courses: toObjects(courses),
        });
    }

    // [GET] /me/stored/news
    getNews(req, res) {
        res.render('me/news');
    }

    // [GET] /me
    getProfile(req, res) {
        res.render('me');
    }
}

module.exports = new MeController();
