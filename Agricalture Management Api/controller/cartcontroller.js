var productmodel = require('../model/productmodel')
var cartmodel = require("../model/cartmodel")
var usermodel = require("../model/usermodel")
const storage = require('node-persist');
storage.init( /* options ... */);

exports.add_cart = async (req, res) => {

    try {

        let adminids = await storage.getItem('userid')


        if (!adminids) { res.status(200).json({
            status: "USER LOGIN REQUIRE"
        }) }

        const users = await usermodel.findById(adminids)

        console.log(users)

      
        const productId = req.params.id;

        const product = await productmodel.findById(productId);

        const cart = await cartmodel.find({ product_id: productId, user_id: adminids })

        if (cart.length == 1) {

           await cartmodel.findByIdAndUpdate(cart[0].id, { qty: cart[0].qty + 1, price: cart[0].price += product.price })

            res.status(200).json({
                status: "ADD SUCCESS"
            })
        }
        else {
            let cartItem = await cartmodel.create({
                user_name:users.name,
                product_name: product.name,
                price: product.price,
                qty: 1,
                product_id: productId,
                user_id: adminids
            });

            res.status(200).json({
                status: cartItem,
                message: "Product added to cart"
            });
        }

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};


exports.remove_cart = async (req, res) => {

    try {

        let adminids = await storage.getItem('userid')

        if (!adminids) { res.status(200).json({
            status: "USER LOGIN REQUIRE"
        }) }
      
        const productId = req.params.id;

        const product = await productmodel.findById(productId);

        const cart = await cartmodel.find({ product_id: productId, user_id: adminids })

        if(cart[0].qty != 1)
        {

        if (cart.length == 1) {

           await cartmodel.findByIdAndUpdate(cart[0].id, { qty: cart[0].qty - 1, price: cart[0].price -= product.price })

            res.status(200).json({
                status: "REMOVE SUCCESS"
            })
        }
        else {
            let cartItem = await cartmodel.create({
                name: product.name,
                price: product.price,
                qty: 1,
                product_id: productId,
                user_id: adminids
            });

            res.status(200).json({
                status: cartItem,
                message: "Product added to cart"
            });
        }

    }else
    {
        await cartmodel.findByIdAndDelete(cart[0].id)

        res.status(200).json({
            status: "DELETE ITEM"
        })
    }
  


    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};


