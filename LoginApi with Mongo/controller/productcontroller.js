var product = require('../model/productmodel')


exports.add_product = async (req, res) => {

    req.body.image = req.file.originalname;
    
    var data = await product.create(req.body)

    res.status(200).json({
        status: 'success',
        data
    })
}