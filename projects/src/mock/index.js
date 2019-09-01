var Mock=require("mockjs");

//配置数据请求
Mock.mock("/newa",'get',require("./json/newlist.json"));
