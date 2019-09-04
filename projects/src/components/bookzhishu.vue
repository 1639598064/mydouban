<template>
    <div class="box">
        <p>
            <b>豆瓣纸书</b>
            <a href="#">更多</a>
        </p>
        <div class="boxAll">
            <div class="leftBox">
                 <img src="../../static/img/aa.jpg">
             </div>
            <div class="rightBox">
                <div>
                    <h4>造物</h4>
                    <span>￥26</span>
                </div>
                <p>内容内容内容内容内容内容内容内容内容内容</p>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .boxAll{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin:.2rem 0;
    }
    .box>p{
       display: flex;
       justify-content: space-between;
       margin:.1rem 0;
   }
   .box>p>b{
       font-size: .14rem;
       margin-left:.2rem;
       font-weight: 200;
   }
   .box>p>a{
       font-size: .14rem;
       color:#42bd56;
       margin-right:.3rem;
   }
    .leftBox>img{
        width: 1.15rem;
        height:1.45rem;
        margin-left:.2rem;
    }
    .rightBox>div>h4{
        font-size:.18rem;
        display: inline-block;
        font-weight: 100;
        color:#494949;
        margin:.2rem 0 .1rem -.155rem;
    }
    .rightBox>div>span{
        color:#e76648;
        margin-top:.2rem;
    }
    .rightBox>div{
        display: flex;
        justify-content: space-around;
    }
    .rightBox>p{
        font-size:.12rem;
        color:#9b9b9b;
        line-height: .2rem;
        margin:0 .3rem 0 .18rem;
    }
</style>