var studentmodels = require("../model/studentmodel")
const storage = require('node-persist');
storage.init( /* options ... */ );

// ADD STUDENT

exports.add_student = async (req, res) => {

    let { roll_no, standard, division } = req.body;


    try {

       let adminid = await storage.getItem('adminid')


        // Check if the student already exists
        let finddata = await studentmodels.find({ roll_no, standard, division , admin_id : adminid });

        if (finddata.length == 1) {
            return res.status(400).json({
                status: "Student already exists"
            });
        }
        else {

            if (standard <= 12 || (division == "A" || division == "B" || division == "C" || division == "D")) {
                if (standard <= 12) {
                    if (division == "A" || division == "B" || division == "C" || division == "D") {
                        let data = await studentmodels.create(req.body , {admin_id:adminid});
                        res.status(200).json({
                            status: "Student added successfully",
                            data
                        });
                    }
                    else {
                        res.status(200).json({
                            status: "error",
                            message: "Please enter the valid DIVISION A or B or C and D"
                        })
                    }
                }
                else {
                    res.status(200).json({
                        status: "error",
                        message: "Please enter the valid standard between 1 to 12"
                    })
                }
            }
            else {
                res.status(200).json({
                    status: "error",
                    message: "Please enter the valid standard and division..!"
                })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: Error,
        });
    }
};


exports.get_student = async (req, res) => {

    try {

       let adminid = await storage.getItem('adminid')

        let data = await studentmodels.find({admin_id : adminid});

        res.status(200).json({
            status: data
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

// MANAGE STUDENT

// DELETE

exports.delete_student = async (req, res) => {

    try {

        id = req.params.id


        let data = await studentmodels.findByIdAndDelete(id);

        res.status(200).json({
            status: "DATA DELETED"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

// UPDATE

exports.update_student = async (req, res) => {

    let { roll_no, standard, division } = req.body;

    try {

       let adminid = await storage.getItem('adminid')


        let finddata = await studentmodels.find({ roll_no, standard, division , admin_id : adminid});

        if (standard <= 12 || (division == "A" || division == "B" || division == "C" || division == "D")) {
            if (standard <= 12) {
                if (division == "A" || division == "B" || division == "C" || division == "D") {

                    id = req.params.id

                    let data = await studentmodels.findByIdAndUpdate(id, req.body);

                    res.status(200).json({
                        status: "DATA UPDATED"
                    })
                }
                else {
                    res.status(200).json({
                        status: "error",
                        message: "Please enter the valid DIVISION A or B or C and D"
                    })
                }
            }
            else {
                res.status(200).json({
                    status: "error",
                    message: "Please enter the valid standard between 1 to 12"
                })
            }
        }
        else {
            res.status(200).json({
                status: "error",
                message: "Please enter the valid standard and division..!"
            })
        }

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}



