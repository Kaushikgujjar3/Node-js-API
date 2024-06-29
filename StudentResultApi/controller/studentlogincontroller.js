var studentloginmodels = require("../model/resultmodel")
const storage = require('node-persist');
storage.init( /* options ... */ );

// VIEW RESULTS

exports.view_result = async (req, res) => {

    let { roll_no, standard, division } = req.body

    try {

       let adminid = await storage.getItem('adminid')

        let data = await studentloginmodels.find({ roll_no, standard, division , admin_id : adminid });

        if (data.length == 1) {
            res.status(200).json({
                status: data
            })
        }
        else {
            res.status(200).json({
                status: "Result Not Found"
            })
        }
        
    } catch (error) {
        res.status(200).json({
            status: error
        })
    }
}

// VIEW TOP 5 RESULTS

exports.view_Top5 = async (req, res) => {
    try {

       let adminid = await storage.getItem('adminid')

        let top5Documents = await studentloginmodels.find({admin_id : adminid}).sort({ total: -1 }).limit(5);

        res.status(200).json({
            status: "success",
            data: top5Documents
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}



