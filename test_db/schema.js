var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let issue = new Schema({
    id: Number,
    fromEmail: String,
    toEmail: String,
    num: Number,
    title: String,
    content: String,
    logDate: String,
    dueDate: String,
    state: String,
    // issue state = [ init, check, process, done, verified, fin, unable ]
    priority: Number,
    // issue priority = 0 ~ 9
    new: Number,
    tag01: String,
    tag02: String
})

const issueModel = mongoose.model('issueModel', issue, 'issue')

module.exports = issueModel