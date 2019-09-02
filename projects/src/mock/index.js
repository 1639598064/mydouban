var Mock=require("mockjs");

//配置数据请求
Mock.mock("/shouye",'get',require("./json/newlist.json"));
Mock.mock("/movie",'get',require("./json/moviesData.json"));
