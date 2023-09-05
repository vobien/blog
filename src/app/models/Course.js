const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema(
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

Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
    use$neOperator: true,
});
module.exports = mongoose.model('Course', Course);
