var blogmodel = require("../model/blogmodel")
var categorymodel = require("../model/categorymodel")
var likemodel = require("../model/likemodel")
var commentmodel = require("../model/commentmodel")
const storage = require('node-persist');
storage.init( /* options ... */ );



exports.add_cetegory = async (req, res) => {

    try {

        var data = await categorymodel.create(req.body)

        res.status(200).json({
            status: data,
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })

    }
}

exports.add_blog = async (req, res) => {


    try {
        
        // MULTER IMAGES UPLOAD
        let add_images = req.file.originalname;
        let { category, name, discription, title } = req.body

       let userid = await storage.getItem('useraccess')



       console.log(userid)


        var data = await blogmodel.create({ category, name, discription, title, image: add_images , user_id : userid})

        res.status(200).json({
            status: data,
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })

    }
}


exports.view_blog = async (req, res) => {


    try {

        var data = await blogmodel.find()
        res.status(200).json({
            status: data,
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })

    }
}

exports.delete_blog = async (req, res) => {

    try {

        ids = req.params.id

        var data = await blogmodel.findByIdAndDelete(ids)
        res.status(200).json({
            status: "DELETE DATA",
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })

    }
}

exports.update_blog = async (req, res) => {

    try {

        id = req.params.id

        var data = await blogmodel.findByIdAndUpdate(id, req.file)

        res.status(200).json({
            status: "UPDATE DATA",
        })

    } catch (error) {

        res.status(200).json({
            status: error,
        })

    }
}

exports.like_blog = async (req, res) => {

    try {

        id = req.params.id

        var blog = await blogmodel.findById(id)

        var l = await likemodel.find({ blog_id: blog.id });

        if (l.length == 1) {
            await likemodel.updateOne({blog_id:blog.id}, {like:l[0].like+1})
            res.status(200).json({
                status:"icrment like"
            })
        }   
        else {

            const addlike = await likemodel.create({ like: 1, blog_id: blog.id });

            res.status(200).json({
                status: addlike,
            })

        }

    } catch (error) {

        res.status(200).json({
            status: error,
        })

    }
}


exports.comment_blog = async (req, res) => {

    try {

        id = req.params.id

        var blog = await blogmodel.findById(id)


        if(blog)
        {

            let {comment} = req.body

            var commentblog = await commentmodel.create({blog_id:blog.id , comment})

            res.status(200).json({
                status: commentblog,
            })
        }
        else{
            res.status(200).json({
                status:"BLOG NOT FOUND",
            })
        }

    } catch (error) {

        res.status(200).json({
            status: error,
        })

    }
}



