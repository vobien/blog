const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, maxLength: 1000 },
        image: { type: String, default: '/images/default-course.jpg' },
        slug: { type: String },
    },
    {
        timestamps: true,
    }
);

// add query helper
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const sortType = ['asc', 'desc'].includes(req.query['type'])
            ? req.query['type']
            : 'asc';
        return this.sort({ [req.query.column]: sortType });
    }
    return this;
};

// add moongose soft delete plugin
CourseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
    use$neOperator: true,
});
module.exports = mongoose.model('Course', CourseSchema);
