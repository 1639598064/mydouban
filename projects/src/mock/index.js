var Mock=require("mockjs");

//配置数据请求
Mock.mock("/shouye",'get',require("./json/newlist.json"));
Mock.mock("/movie",'get',require("./json/moviesData.json"));
Mock.mock("/faxianhaodianying",'get',require("./json/searchMovie.json"));
Mock.mock("/fenlan",'get',require("./json/fenlan.json"));
Mock.mock("/books",'get',require("./json/bookData.json"));
Mock.mock("/xiaozua",'get',require("./json/groupa.json"));
Mock.mock("/xiaozub",'get',require("./json/groupb.json"));
Mock.mock("/xiaozuc",'get',require("./json/groupc.json"));
Mock.mock("/goodBook",'get',require("./json/goodBook.json"));
Mock.mock("/changedata",'get',require("./json/changeData.json"));

