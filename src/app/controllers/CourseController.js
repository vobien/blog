const { toObject, toObjects, generateSlug } = require('../../utils/mongoose');
const Course = require('../models/Course');

class CourseController {
    // [GET] /courses
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('courses', {
                courses: toObjects(courses),
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /courses/:slug
    async detail(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            res.render('courses/detail', { course: toObject(course) });
        } catch (err) {
            next(err);
        }
    }

    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // GET /courses/store
    async store(req, res, next) {
        try {
            let course = new Course(req.body);
            course.slug = generateSlug(course.name);
            await course.save();

            res.redirect('/courses');
        } catch (err) {
            next(err);
        }
    }

    // GET /courses/:id/edit
    async edit(req, res, next) {
        try {
            const course = await Course.findById(req.params.id);
            res.render('courses/edit', {
                course: toObject(course),
            });
        } catch (err) {
            next(err);
        }
    }

    // PUT /courses/:id
    async update(req, res, next) {
        try {
            await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect('back');
        } catch (err) {
            next(err);
        }
    }

    // PATCH /courses/:id/restore
    async restore(req, res, next) {
        try {
            await Course.restore({ _id: req.params.id });
            res.redirect('back');
        } catch (err) {
            next(err);
        }
    }

    // DELETE /courses/:id
    async delete(req, res, next) {
        try {
            const result = await Course.delete({ _id: req.params.id });
            console.log(result);
            res.redirect('/me/stored/courses');
        } catch (err) {
            next(err);
        }
    }

    // DELETE /courses/:id/force
    async forceDelete(req, res, next) {
        try {
            const result = await Course.deleteOne({ _id: req.params.id });
            console.log(result);
            res.redirect('back');
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CourseController();
