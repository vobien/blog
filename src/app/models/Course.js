const mongoose = require('mongoose');
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

module.exports = mongoose.model('Course', Course);
