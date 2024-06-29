var resultmodels = require("../model/resultmodel")
const storage = require('node-persist');
storage.init( /* options ... */ );

exports.add_student_result = async (req, res) => {


    let { name, roll_no, standard, division, sub1, sub2, sub3, sub4, sub5} = req.body

    let alltotal = sub1 + sub2 + sub3 + sub4 + sub5;

    let persentage;


    if(sub1 > 33 && sub2 > 33 && sub3 > 33 && sub4 > 33 && sub5 > 33)
    {
        var allstatus = "PASS"
        persentage = alltotal/5;
    }
    else{
        var allstatus = "FAIL"
        persentage=0;
    }

    try {

       let adminid = await storage.getItem('adminid')
        

        let data = await resultmodels.create({
            name,
            roll_no,
            standard,
            division,
            sub1,
            sub2,
            sub3,
            sub4,
            sub5,
            total:alltotal,
            per:persentage,
            status:allstatus,
            admin_id : adminid
        });

        res.status(200).json({
            status: data
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.view_student_result = async (req,res) => {

    try {

       let adminid = await storage.getItem('adminid')

        let data = await resultmodels.find({admin_id : adminid});

        res.status(200).json({
            status:data
        })
        
    } catch (error) {

        res.status(200).json({
            status:error,
        })
    }
}

// DELETE RESULT

exports.delete_result = async (req,res) => {

    deleteid = req.params.id

    try {

       let adminid = await storage.getItem('adminid')

        let data = await resultmodels.findByIdAndDelete(deleteid , {adminid});

        res.status(200).json({
            status:"Result Delete"
        })
        
    } catch (error) {

        res.status(200).json({
            status:error,
        })
    }
}

// UPDATE RESULT

exports.update_result = async (req,res) => {

    updateid = req.params.id

    let { name, roll_no, standard, division, sub1, sub2, sub3, sub4, sub5} = req.body

    let alltotal = sub1 + sub2 + sub3 + sub4 + sub5;

    let persentage;

    if(sub1 > 33 && sub2 > 33 && sub3 > 33 && sub4 > 33 && sub5 > 33)
    {
        var allstatus = "PASS"
        persentage = alltotal/5;

    }
    else{
        var allstatus = "FAIL"
        persentage = 0;

    }

    try {

       let adminid = await storage.getItem('adminid')
        

        let data = await resultmodels.findByIdAndUpdate(updateid,{
            name,
            roll_no,
            standard,
            division,
            sub1,
            sub2,
            sub3,
            sub4,
            sub5,
            total:alltotal,
            per:persentage,
            status:allstatus,
            admin_id:adminid
        });

        res.status(200).json({
            status:"Result Update"
        })
        
    } catch (error) {

        res.status(200).json({
            status:error,
        })
    }
}



