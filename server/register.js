var express=require("express");
var app=express();
var mongoose=require("mongoose");
var crypto=require("crypto");
var bodyParser=require("body-parser");
var uE=bodyParser.urlencoded({extended:false});
//创建集合
var dbCollection=mongoose.model("regs",{
    uname:String,
    pasw:String,
    uemail:String
});

//中间件
app.use(function(req,res,next){
    //解决cors跨域
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
});

app.post("/post",uE,function(req,res){
    //接收前端传来的数据
    var htmlUname=req.body.uname;
    var htmlPasw=req.body.pasw;
    var htmlEmail=req.body.uemail;
    console.log(htmlUname+"---"+htmlPasw+"---"+htmlEmail);

    //加密
    var newHtmlPasw=crypto.createHash('md5').update(htmlPasw).digest('hex');
    console.log(newHtmlPasw);
    //连接数据库
    mongoose.connect("mongodb://localhost:27017/bb",{useNewUrlParser:true},function(err){
        if(err){
            console.log("连接失败")
        }else{
            console.log("连接成功")

        //定义数据
           var uses=new dbCollection({
                uname:htmlUname,
                pasw:newHtmlPasw,
                uemail:htmlEmail
           })
        //开始存数据
           uses.save().then((ok)=>{
           res.send({"mes":"储存成功","status":200,"linkId":1});
           },(err)=>{
            res.send({"mes":"储存失败","status":200,"linkId":0});
               
           })
        
        }
    })


    // res.send("ok");
})
app.listen(3000);