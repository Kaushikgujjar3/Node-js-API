var adminmodel = require('../model/adminmodel')
const storage = require('node-persist');
storage.init( /* options ... */ );
var loginstatus = 0;



exports.admin_register = async (req, res) => {
    try {
        console.log(req.body)

        var data = await adminmodel.create(req.body)
        console.log(data)
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

exports.admin_login = async (req, res) => {

    try {

        let { email, password } = req.body

        var data = await adminmodel.find({ email })

        if (loginstatus == 0) {
            if (data.length == 1) {
                if (data[0].password == password) {
                    await storage.setItem('adminowner',data[0].id)
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
        else{

            res.status(200).json({
                status:"YOU ARE ALREDY LOGIN... ! "
            })
        }

        } catch (error) {

            res.status(200).json({
                status: error,
            })
        }

    }
