var loginmodels = require("../model/Loginmodel")
const storage = require('node-persist');
storage.init( /* options ... */ );

exports.register_insert = async (req,res) => {

    try {

        let {email} = req.body;

        let finddata = await loginmodels.findOne({email});

        if(finddata)
        {
            res.status(200).json({
                status:"THIS EMAIL ALREDY REGISTER"
            })
        }
        else{

            let data = await loginmodels.create(req.body);

            res.status(200).json({
                status:data,
            }) 
        }

    } catch (error) {

        res.status(200).json({
            status:error,
        })
        
    }
}

exports.register_get = async (req,res) => {

    try {

        let data = await loginmodels.find();

        res.status(200).json({
            status:data
        })
        
    } catch (error) {

        res.status(200).json({
            status:error,
        })
    }
}

exports.login_data = async (req,res) => {
    try {

        let {email , password} = req.body

        let data = await loginmodels.find({email})

        if(data.length==1)
        {
            if(data[0].password==req.body.password)
            {
               var dakk = await storage.setItem('adminid',data[0].id)
                res.status(200).json({
                    status:"YOU ARE LOGIN SUCCESSFULLY"
                })
               
            }else   
            {
                res.status(200).json({
                    status:"CHECK YOUR PASSWORD"
                })
            }
        }
        else{
            res.status(200).json({
                status:"CHECK EMAIL AND PASSWORD"
            })
        }

    } catch (error) {

        res.status(200).json({
            status:error
        })
    }
}

