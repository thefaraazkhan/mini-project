const mongoose = require('mongoose');


const assignmentSchema = new mongoose.Schema({
    title: String,
    details: String,
    fileURL: String,
    completedFile: String,
    isCompleted: {
        type: Boolean,
        default: false,
    },
    completedBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    marks: Number,
    dueDate: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    createdAt: { 
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Assignment', assignmentSchema);