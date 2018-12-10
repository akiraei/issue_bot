var express = require('express');
var router = express.Router();
var util = require("./util")

const issueModel = require("../test_db/schema")

const valueInt = objOrg => {
    let obj = Object.assign(objOrg)
    Object.keys(obj).forEach( key => {
        if (typeof obj[key] === "object" && isArray(obj[key]) === false) {
            obj[key] = valueInt(obj[key])
        } else {
            obj[key] = isNaN(parseInt(obj[key])) ? obj[key] : parseInt(obj[key])
        }
    })
    return obj
}

router.get('/test', function(req, res, next) {
  res.send('hy')
});

router.all('/save', (req, res) => {
  let instance = new issueModel()


    Object.keys(req.body).forEach( e => {
        instance[e] = req.body[e]
    })

    instance.save( err => {if (err) {
     res.send("save err")
    return;
    }
    res.send('save cool')
    })
});





router.all('/find', (req, res) => {

    console.log('q', req.body)

    issueModel.find(valueInt(req.body), (err, docs) => {
        if (err) {
            res.send("find err")
            return;
        }
         res.send(docs)
        })
});





router.get('/highest-num', (req, res) => {
    issueModel.find({num: {$gte: 0}}, (err, docs) => {
        if(err) {
            res.send('num find fail')
            return;
        }
        const answer = docs.sort( (a, b) => {
            return parseInt(b.num) - parseInt(a.num)
        })[0].num

        res.send(answer.toString())
    })
});



module.exports = router;
