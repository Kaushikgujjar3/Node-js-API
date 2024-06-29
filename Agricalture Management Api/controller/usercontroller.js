var usermodel = require('../model/usermodel')
var productmodel = require('../model/productmodel')
const storage = require('node-persist');
storage.init( /* options ... */ );
var loginstatus = 0;

exports.user_register = async (req, res) => {
    try {

        var data = await usermodel.create(req.body)
        res.status(200).json({
            status: data,
            massage: "SUCCESS"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.user_login = async (req, res) => {

    try {

        let { email } = req.body

        let password = req.body.password

        var data = await usermodel.find({ email })

        if (loginstatus == 0) {
            if (data.length == 1) {
               await storage.setItem('userid',data[0].id)
                if (data[0].password == password) {
                    res.status(200).json({
                        status: "true",
                        massage: "SUCCESSFULLY LOGIN ... ! "
                    })
                    loginstatus = 1;
                }
                else {
                    res.status(200).json({
                        status: "false",
                        massage: "CHECK YOUR PASSWORD ... ! "
                    })
                }
            }
            else {
                res.status(200).json({
                    status: "false",
                    massage: "CHECK YOUR EMAIL AND PASSWORD ... ! "
                })
            }
        }
        else {

            res.status(200).json({
                status: "YOU ARE ALREDY LOGIN... ! "
            })
        }

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.log_out = async (req,res) => {

    await storage.removeItem('userid')
    loginstatus = 0;
    res.status(200).json({
        status:"YOU ARE LOG OUT"
    })

}

exports.view_product= async (req, res) => {
    try {
        var data = await productmodel.find()
        res.status(200).json({
            status: data,
            massage: "SUCCESS"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.view_single_product= async (req, res) => {
    try {

        id = req.params.id

        var data = await productmodel.findById(id)
        res.status(200).json({
            status: data,
            massage: "SUCCESS"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

