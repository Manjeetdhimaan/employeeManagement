const router = require('express').Router();
const Admin = require('../models/Admin');
const User = require('../models/User');
var MongoClient = require('mongodb').MongoClient;
var bcrypt = require('bcrypt');
router.post('/adminLogin', (req, res) => {
    MongoClient.connect(process.env.MONGODB, (err, db) => {
        if (err) throw err;
        var dbo = db.db("myFirstDatabase");
        dbo.collection("admin").findOne({
            email: req.body.email,
        }).then(user => {
            if(user){
                bcrypt.compare(req.body.password, user.password, function(err, result) {
                    if(err){
                        res.status(401).json({
                            error: 'Incorrect Password',
                            msg:"Auth Failed",
                            UserData:'',
                            status:'error'
                        })
                    }
                    if(result){
                     res.status(200).json({
                         msg:"User Login Successfully",
                         'UserData':user,
                         status:'success'
                        });
                    }else{
                        res.status(401).json({
                            error: 'Incorrect Password',
                            msg:"Auth Failed",
                            UserData:'',
                            status:'error'
                        })
                    }
                 });
            }
            else {
                res.status(401).json({
                    error: 'Incorrect email'
                })
            }
        }).catch(err => {
            res.status(500).json({
                error: err.message
            })
        })
    });


})

router.get('/', (req, res) => {
    MongoClient.connect(process.env.MONGODB, (err, db) => {
        if (err) throw err;
        var dbo = db.db("myFirstDatabase");
        dbo.collection("admin").findOne().then(user => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(401).json({
                    error: 'You are not Admin!'
                })
            }
        }).catch(err => {
            res.status(500).json({
                error: err.message
            })
        })
    });
});


router.post('/updateAdminCredentials/:id', (req, res) => {
    MongoClient.connect(process.env.MONGODB, (err, db) => {
        if (err) throw err;
        let dbo = db.db("myFirstDatabase");
        const credentials = {
            email: req.body.email,
            password: User.hashPassword(req.body.password)
        };

        if (!req.body.email) {
            delete credentials.email
        }
        if (!req.body.password) {
            delete credentials.password
        }
        dbo.collection("admin").updateOne({
            id: req.body.id
        }, {
            $set: credentials
        }, {
            new: true
        }, function(err, article) {
            if (err) return handleError(err);
            res.send(req.body);
        });
    })
})

module.exports = router;