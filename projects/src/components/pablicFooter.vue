<template>
    <div class="box">
        <div class="boxTop">
            <img src="../../static/img/logo.png">
            <a href="#">
                <b>豆瓣</b>
                <span>我们的精神角落</span>
            </a>
        </div>
        <p>
            <a href="#">去 App Store 免费下载 iOS 客户端</a>
        </p>
    </div>
</template>
<script>
export default {
      
}
</script>
<style scoped>
    div{
        width: 100%;
    }
    .box{
        margin:.4rem 0;
    }
    .boxTop{
        width: 2rem;
        margin:0 auto;
    }
    .boxTop>img{
        width: .5rem;
        height:.5rem;
        margin-left:.15rem;
    }
    .boxTop>a{
        display: inline-block;
        display: flex;
        flex-direction: column;
        margin-top:-.5rem;
        margin-left:.78rem;
    }
    .boxTop>a>b{
        font-size: .18rem;
        font-weight: 100;
        color:#111;
    }
    .boxTop>a>span{
        display: inline-block;
        color:#111;
        font-size: .12rem;
    }
     .box>p{
         margin-top:.2rem;
          text-align: center;
     }
    .box>p>a{
        color:#42bd56;
        font-size: .14rem;
    }
</style>