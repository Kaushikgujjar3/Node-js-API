var usermodel = require("../model/adminmodel")
var blogmodel = require("../model/blogmodel")
const storage = require('node-persist');
storage.init( /* options ... */);
var logouts = 0;

exports.register_admin = async (req, res) => {

    try {

        let { email } = req.body;

        let finddata = await usermodel.findOne({ email });

        if (finddata) {
            res.status(200).json({
                status: "THIS EMAIL ALREDY REGISTER"
            })
        }
        else {

            let data = await usermodel.create(req.body);

            res.status(200).json({
                status: data,
            })
        }

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.login_admin = async (req, res) => {
    try {

        let { email, password } = req.body

        let data = await usermodel.find({ email })

        if (logouts == 0) {
            if (data.length == 1) {
                if (data[0].password == req.body.password) {
                    res.status(200).json({
                        status: "YOU ARE LOGIN SUCCESSFULLY"
                    })
                    logouts = 1;
                } else {
                    res.status(200).json({
                        status: "CHECK YOUR PASSWORD"
                    })
                }
            }
            else {
                res.status(200).json({
                    status: "CHECK EMAIL AND PASSWORD"
                })
            }

        } else {
            res.status(200).json({
                status: "YOU ARE ALREDY LOGIN"
            })
        }


    } catch (error) {

        res.status(200).json({
            status: error
        })
    }
}

exports.view_blog_user_wise = async (req, res) => {
    
    try {

        let fff = req.params.id; 

        console.log(fff)

        var datas = await blogmodel.find({fff});

        console.log(datas)

        res.status(200).json({
            status: 'success',
            data: datas,
        });

    } catch (error) {
        
        res.status(500).json({
            status: 'error',
            message: error.message, 
        }); 
    }
};

