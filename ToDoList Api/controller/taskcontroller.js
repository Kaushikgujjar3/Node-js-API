var adminmodel = require('../model/taskmodel')
const storage = require('node-persist');
storage.init( /* options ... */);

exports.add_task = async (req, res) => {

    try {
        let admin = await storage.getItem('adminowner')

        let { task_name } = req.body
        let accessadmin = { task_name, admin_access: admin }

        var data = await adminmodel.create(accessadmin)

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

exports.view_task = async (req, res) => {

    try {
        let admin = await storage.getItem('adminowner')

        let accessadmin = { admin_access: admin }

        var data = await adminmodel.find(accessadmin)

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

exports.delete_task = async (req, res) => {

    try {

        ids = req.params.id

        var data = await adminmodel.findByIdAndDelete(ids)

        res.status(200).json({
            status:"DELETE DATA"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.update_task = async (req, res) => {

    try {

        ids = req.params.id

        var data = await adminmodel.findByIdAndUpdate(ids, req.body )

        res.status(200).json({
            status:"UPDATE DATA"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }
}

exports.single_task = async (req, res) => {

    try {

        id = req.params.id

        var data = await adminmodel.findById(id)

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