<template>
    <div class="box">
        <div class="boxTop">
            <span>取消</span>
            <h4>登录豆瓣</h4>
        </div>
        <div class="boxCenter">
            <input type="text" placeholder="邮箱" v-model="logemail">
            <div class="boxPasd">
                <input :type="bool?'password':'text'" placeholder="Token" v-model="logpswd">
                <span @click="fun()">
                    <img src="../../static/img/eye1.png" v-if="bool">
                    <img src="../../static/img/eye2.png" v-else>
                </span>
            </div>
            <button @click="loginBtn()">登录</button>
        </div>   
        <p>使用其他方式登录&nbsp;&nbsp;找回密码</p>  
        <div class="boxBottom">
             <!-- <span>注册豆瓣账号</span> -->
             <router-link to="/register">注册豆瓣账号</router-link>
             <a>下载豆瓣APP</a>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            bool:true,
            logemail:"",
            logpswd:""
        }
    },
    methods: {
        fun(){
            this.bool=!this.bool;
        },
        loginBtn(){
            if(!this.logemail==""&&!this.logpswd==""){
                let params =new URLSearchParams();
                params.append("logemail",this.logemail);
                params.append("logpswd",this.logpswd);
                this.axios({
                    url:"http://localhost:3000/login", 
                    method:"post",
                    data:params
                }).then((data)=>{
                    alert("登录成功")
                    localStorage.setItem("token",data.data.token);
                    console.log(data)
                })
            }else{
                console.log("用户输入为空");
                return 
            }
        }
    }
}
</script>
<style scoped>
  .box{
      width: 100%;
  }  
  .boxTop{
      width: 100%;
      height: .45rem;
     border-bottom:.001rem solid #eee;
     text-align: center;
     position: relative;
  }
   .boxTop>h4{
       display: inline-block;
       line-height: .45rem;
   }
   .boxTop>span{
      position: absolute;
      left:.16rem;
      top:.11rem;
       color:#42bd56;
       font-size: .14rem;
   }
   .boxCenter{
       width: 2.9rem;
       margin:0 auto;
   }
   .boxCenter>input{
       width: 2.9rem;
       height: .44rem;
       outline: none;
       border:none;
       border: .01rem solid #ccc;
       margin-top:.4rem;
       text-indent: .2rem; 
   }
   .boxPasd{
       position: relative;
   }
   .boxPasd>input{
      width: 2.9rem;
       height: .44rem;
       outline: none;
       border:none;
       border: .01rem solid #ccc;
       text-indent: .2rem;
   }
   .boxPasd>span{
       position: absolute;
       right:.1rem;
       top:.1rem;
   }
   .boxPasd>span>img{
        width: .2rem;
   }
   .boxCenter>button{
       width: 2.9rem;
       height: .44rem;
       background: #17aa52;
       color: #fff;
       outline: none;
       border:none;
       margin-top:.1rem;
       font-size: .16rem;
       border-radius: .02rem;
   }
   .box>p{
       color:#aaa;
       text-align: center;
       margin-top:.2rem;
       margin-bottom:.5rem;
   }
   .boxBottom{
       text-align: center;
   }
   .boxBottom>a{
       color:#42bd56;
       margin-right:.1rem;
   }
</style>