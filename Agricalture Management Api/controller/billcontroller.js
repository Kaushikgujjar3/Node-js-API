var billmodel = require("../model/billmodel")
var usermodel = require("../model/usermodel")
var cartmodel = require("../model/cartmodel")
const storage = require('node-persist');
storage.init( /* options ... */ );

exports.add_bill = async (req, res) => {

    try {

        let adminids = await storage.getItem('userid')

        if (!adminids) { res.status(200).json({
            status: "USER LOGIN REQUIRE"
        }) }

        userid = await storage.getItem('userid')

        console.log(userid)

        var findcart = await cartmodel.find({ user_id: userid }).select("qty price")
        var user = await usermodel.findById(userid)

        var totalQty = 0;
        var totalPrice = 0;

        findcart.forEach(item => {
            totalQty += item.qty;
            totalPrice += item.price;
        });

        var currentDate = new Date(); 
        var formattedDate = currentDate 

        var grandtotal = await billmodel.create({
            user_name: user.name,
            user_id: user._id,
            total_qty: totalQty,
            total_price: totalPrice,
            created_at: formattedDate
        })

        res.status(200).json({
            status: grandtotal,
            message: "SUCCESS"
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })
    }

}
