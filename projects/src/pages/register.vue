<template>
    <div class="box">
        <h2>欢迎加入豆瓣</h2>
        <div class="boxCenter">
            <input type="text" name="uemail" placeholder="邮箱" v-model="inputemail">
            <div class="boxBon">
                <input :type="bool?'password':'text'" name="pasw"  placeholder="密码" v-model="inputpasw">
                <span @click="funa()">
                    <img src="../../static/img/eye1.png" v-if="bool">
                    <img src="../../static/img/eye2.png" v-else>
                </span>
            </div>
            <input type="text" name="uname" placeholder="用户名" v-model="inputuname">
            <button @click="rerBtn()">立即注册</button>
            <p>点击&nbsp;&nbsp;[&nbsp;注册&nbsp;]&nbsp;&nbsp;代表你已经阅读并同意用户使用协议</p>
        </div>  
        <div class="boxBottom">
            下载豆瓣APP
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           bool:"true",
           inputemail:"",
           inputpasw:"",
           inputuname:""
        }
    },
    methods:{
        rerBtn(){
            // if(!this.inputemail==""&&!this.inputpasw==""&&!this.inputuname==""){
            //     let params =new URLSearchParams();
            //     params.append("uemail",this.inputemail);
            //     params.append("pasw",this.inputpasw);
            //     params.append("uname",this.inputuname);
            //     this.axios({
            //         // url:"http://localhost:3000/post",
            //         url:"http://localhost:3000/reg",

            //         method:"post",
            //         data:params
            //     }).then((data)=>{
            //         alert("注册成功");
            //         this.$router.push("/login");
            //         console.log(data.config.data)
            //     })
            //     // this.axios.post("http://localhost:3000/post",params).then((ok)=>{
            //     //     alert("注册成功")
            //     // })
            // }else{
            //     console.log("客户输入为空");
            //     return 
            // }
            this.$router.push("/login");
           
        },
        funa(){
            this.bool=!this.bool;
        }
    } 
}
</script>
<style scoped>
    .box{
        width:100%;
    }
   h2{
       padding-top:.3rem;
       padding-bottom:.5rem;
       font-size: .35rem;
       color:#42bd56;
       text-align: center;
       font-weight: 100;
   } 
   .boxCenter{
      width: 2.9rem;
      margin: 0 auto;
   }
   .boxCenter input:first-child{
       border-radius: .05rem .05rem 0  0;
   }
   .boxCenter>input{
      width:100%;
      height: .44rem;
      outline: none;
      border:none;
      border: .01rem solid #ccc;
      font-size: .14rem;
      text-indent: .2rem;
   }
   .boxCenter input::placeholder{
        color:#ccc;
    }
   .boxBon{
     width: 2.9rem;
     height: .44rem;
     border-left: .01rem solid #ccc;
     border-right: .01rem solid #ccc;
     margin:0 auto;
     line-height: .44rem;
   }
   .boxBon>input{
       outline: none;
       border:none;
       font-size: .14rem;
       text-indent: .2rem;
   }
    .boxBon input::placeholder{
        color:#ccc;
    }
   .boxBon>span{
       float: right;
       margin-right:.1rem;
   }
   .boxBon>span>img{
       width: .2rem;
   }
   .boxCenter>button{
       width: 2.9rem;
       height: .44rem;
       outline: none;
       border:none;
       background:#42bd56;
       font-size: .14rem;
       color:#fff;
       margin-top:.08rem;
       line-height:.44rem;
       border-radius: .02rem;
   }
   .boxCenter>p{
       color:#aaa;
       text-align: center;
       padding-top:.15rem;
       font-size:0.11rem;
   }
   .boxBottom{
       margin-top:.4rem;
       font-size: .13rem;
       color:#42bd56;
       text-align: center;
   }
</style>