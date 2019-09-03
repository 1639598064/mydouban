var Mock=require("mockjs");

//配置数据请求
Mock.mock("/shouye",'get',require("./json/newlist.json"));
Mock.mock("/movie",'get',require("./json/moviesData.json"));
Mock.mock("/faxianhaodianying",'get',require("./json/searchMovie.json"));
Mock.mock("/fenlan",'get',require("./json/fenlan.json"));
Mock.mock("/books",'get',require("./json/bookData.json"));

