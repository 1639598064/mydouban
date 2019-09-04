<template>
    <div class="box">
        <div class="oneBox">
            <h4>北京北京北京北京北京北京北京北京北</h4>
            <span>北京</span>
        </div>
        <img src="../../static/img/page.jpg">
        <div class="twoBox">
            <span>时间:</span>
            <p>
                <span>2019-25</span>
                <span>2018-11</span>
            </p>
        </div>
        <div class="twoBox">
            <span>地点:</span>
            <p>北京的高房价 </p>
        </div>
         <div class="twoBox">
            <span>费用:</span>
            <p>免费</p>
        </div>
         <div class="twoBox">
            <span>类型:</span>
            <p>展览</p>
        </div>
         <div class="threeBox">
            <span>起始时间:</span>
            <p>美术馆</p>
        </div>
        <div class="fourBox">
            <span>内容</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .box{
        margin:0 .1rem;
        font-size: .14rem;
    }
    .oneBox>h4{
        font-size:.16rem;
        margin-top:.3rem;
    }
    .box>img{
       width: 100%;
       height:auto;
       max-width: 2.2rem;
       margin-left:.4rem;
       margin-top:.3rem;
    }
    .oneBox>span{
        display: inline-block;
        width: .4rem;
        height:.21rem;
        text-align: center;
        border-radius: .03rem;
        color:#fff;
        background: #ff8263;
        font-size: .12rem;
    }
    .twoBox>span{
        color:#666;
        display:inline-block;
        margin-top:.06rem;
    }
    .twoBox>p{
        margin-left:.5rem;
        margin-top:-.16rem;
    }
     .twoBox>p>span{
         display: block;
         line-height: .14rem;
     }
      .threeBox>span{
        color:#666;
        display:inline-block;
        margin-top:.06rem;
    }
     .threeBox>p{
        margin-left:.7rem;
        margin-top:-.16rem;
        line-height: .14rem;
     }
    .fourBox{
        width: 2rem;
    }
     .fourBox>span{
         display: inline-block;
         background: #f5f5f5;
         border-radius: .5rem;
     }
</style>