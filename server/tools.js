var express=require("express");
var app=express();
var mongoose=require("mongoose");
//引入加密模块
var crypto=require("crypto");
//引入post模块
var bodyParser=require("body-parser");

var path=require("path");
//引入模块
var jwt=require("jsonwebtoken");
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
//注册路由
app.post("/reg",uE,function(req,res){
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
   
           //查询注册的用户名是否存在
           dbCollection.find({uname:htmlUname}).then((ok)=>{
               //开始存数据
               if(ok.length>0){
                   res.send({"mes":"用户名已存在","status":200,"linkId":0})
               }else{
                   uses.save().then((ok)=>{
                       res.send({"mes":"注册成功","status":200,"linkId":1});
                       },(err)=>{
                        res.send({"mes":"注册失败","status":500,"linkId":0});
                           
                       });
               };    
           },(err)=>{
               res.send({"mes":"请求超时","status":200,"linkId":0})
           });     
           };   
       });
       // res.send("ok");
   });


//登录路由

//把这个解析模块注入到post的路由中
app.post("/login",uE,function(req,res){
 //开始接收数据
 console.log(req.body)
 var htmlPasw=req.body.logpswd;
 var htmlEmail=req.body.logemail;
 console.log(htmlPasw+"---"+htmlEmail);
 //加密当前密码
    var newHtmlPasw=crypto.createHash('md5').update(htmlPasw).digest('hex');
    console.log(newHtmlPasw);
 //数据库查询
    mongoose.connect("mongodb://localhost:27017/bb",{useNewUrlParser:true},function(err){
        if(err){
            console.log("err");
        }else{
            console.log("ok")
        }; 
        dbCollection.find({uemail:htmlEmail,pasw:newHtmlPasw}).then((ok)=>{
         // 在查询成功的时候可能有两种结果,第一种查出来值了 第二种没有查出来但是返回了一个空数组
         
         if(ok.length>0){
          
            var obj={
                loginOk:true,
                uemail:htmlEmail  //邮箱
            }
            var mi="zkxhcksdjhfkjhweljfku1233";
            var token=jwt.sign(obj,mi);
            
            res.send({"mes":"登录成功","status":200,"linkId":3,token});
            console.log(token)
         }else if(ok.length==0){
            res.send({"mes":"登录失败","status":200,"linkId":4});
         };
        },(err)=>{
            res.send({"mes":"请求响应超时","status":500,"linkId":5});
        });
    })
    // res.send("ok");
});


app.get("/index",function(req,res){

   var token=req.query.token;
   var mi="zkxhcksdjhfkjhweljfku1233";
   jwt.verify(token,mi,function(err,data){
       console.log(data);
    if(data.loginOk==true){
        res.send({status:200,mes:"用户已经登录",linkId:8,uname:data.uname})
    }else{
        res.send({status:500,mes:"没有登录",linkId:9})
    }
   });
   
})
app.listen(3000);

