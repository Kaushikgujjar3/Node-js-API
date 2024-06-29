var adminmodel = require('../model/usermodel')
var loginstatus = 0;

exports.user_register = async (req, res) => {

    try {

        var data = await adminmodel.create(req.body)

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

exports.view_user = async (req, res) => {

    try {

        var data = await adminmodel.find()

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

        let { email, password } = req.body

        var data = await adminmodel.find({ email })

        if (loginstatus == 0) {
            if (data.length == 1) {
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



exports.user_logout = async (req, res) => {

    loginstatus = 0;

    res.status(200).json({
        massage: "LOGOUT SUCCESSFULLY"
    })
}


exports.delete_user = async (req, res) => {

    try {

        ids = req.params.id

        var data = await adminmodel.findByIdAndDelete(ids)

        res.status(200).json({
            status:"DELETE USER"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.update_user = async (req, res) => {

    try {

        ids = req.params.id

        var data = await adminmodel.findByIdAndUpdate(ids, req.body )

        res.status(200).json({
            status:"UPDATE USER"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.single_user = async (req, res) => {

    try {

        ids = req.params.id

        var data = await adminmodel.findById(ids)

        res.status(200).json({
            status:data
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}


