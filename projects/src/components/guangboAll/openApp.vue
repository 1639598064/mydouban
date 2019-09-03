<template>
    <div>
        <div class="box">
            <img src="../../../static/img/bac.jpg">
            <p>
               <a>打开APP,浏览更多</a> 
               <b>急速下载</b>
               <span>打开</span>
            </p>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .box{
        width: 100%;
        position: relative;
    }
    .box>img{
        max-width: 100%;
    }
    .box>p{
        position: absolute;
        top:.3rem;
        left:.1rem;
    }
    .box>p>a{
        font-size:.14rem;
        color:#2ca532;
        margin-left:.25rem;
    }
    .box>p>b{
        display: inline-block;
        width: .7rem;
        height: .25rem;
        background: #42bd56;
        color:#fff;
        font-size:.12rem;
        text-align: center;
        line-height: .25rem;
        border-radius: .05rem;
        margin-left:.2rem;
    }
    .box>p>span{
        display: inline-block;
        width: .6rem;
        height: .24rem;
        border:.01rem solid #42bd56;
        border-radius: .05rem;
        color:#42bd56;
        text-align: center;
        line-height: .25rem;
        font-size: .12rem;
        font-weight: 600;
    }
</style>