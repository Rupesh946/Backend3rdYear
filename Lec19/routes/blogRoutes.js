const express = require("express");
const router = express.Router();  //small ----> application
const Blogs = require("../model/blog");
router.post("/",async(req,res)=>{
    let {title,body,userId}=req.body;
    let userExist=await user.findById(userId);
    if(userExist){
        let newBlog=new Blogs({
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    })
    await newBlog.save()
    userExist.blogs.push(newBlog._id);
    await userExist.save();
    res.json({
        success:true,
        data:newBlog,
        message:"blog added successfully"
    })
    }
})
router.get("/", async(req,res)=>{
    let allblog=await Blogs.find();
    res.json({
        success:true,
        data:allblog
    })
})
router.get("/:id",async(req,res)=>{
    let {id}=req.params;
    let blog=await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })

})
//delete blog
router.delete("/:blogId",async(req,res)=>{
    let {blogId} = req.params;
    let {userId} = req.body;
    let blogExist = await Blogs.findById(blogId);
    if(!blogExist){
        res.json({
            success:false,
            message:"Blog not found"
        })
    }if(blogExist.userId != userId){
            res.json({
                success:false,
                message:"You are not authorized to delete this blog"
            })
    }

    await Blogs.findByIdAndDelete(blogId);
    let userExist = await user.findById(userId);
    let blog = userExist.blogs.filter((id)=>id!=blogId);
    userExist.blogs = blog;
    await userExist.save();
    res.json({
        success:true,
        message:"Blog deleted successfully",
        data: userExist
    })
})

//update blog
router.put("/:blogId",async (req,res)=>{
    let {blogId} = req.params;
    let {title,body} = req.body;
    let blog = await Blogs.findById(blogId);
    if(!blog){
        return res.json({
            success:false,
            message:"Blog not found"
        })
    }
    if(blog.userId != req.body.userId){
        return res.json({
            success:false,
            message:"You are not authorized to update this blog"
        })
    }
    blog.title = title;
    blog.body = body;
    await blog.save();
    res.json({
        success:true,
        message:"Blog updated successfully",
        data:blog
    })
})

module.exports = router;  //exporting the router to use in index.js