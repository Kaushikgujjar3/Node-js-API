var adminmodel = require('../model/productmodel')

exports.add_product = async (req, res) => {
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

exports.view_product = async (req, res) => {
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

exports.delete_product = async (req, res) => {
    try {

        id = req.params.id;

        var data = await adminmodel.findByIdAndDelete(id)
        res.status(200).json({
            status:"DELETE PRODUCT ... !",
            massage: "SUCCESS"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.update_product = async (req, res) => {
    try {

        id = req.params.id;

        var data = await adminmodel.findByIdAndUpdate( id , req.body)
        res.status(200).json({
            status:"DELETE UPDATED ... !",
            massage: "SUCCESS"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}
