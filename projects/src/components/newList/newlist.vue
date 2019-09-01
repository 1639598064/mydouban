<template>
    <div class="allBox">
        <div class="box">
            <div class="leftBox">
                <h4>来加入小柒の圈子,体验有趣的北京玩乐故事</h4>
                <slot name="slota"></slot>
            </div>
            <img src="../../../static/img/page.jpg">
        </div>
        <p class="bomNet">
            <span>公益</span>
            <slot name="slotb"></slot>
        </p>
</div>
</template>
<script>

export default {

}
</script>
<style scoped>
    .allBox{
        width: 100%;
        border-bottom:0.01rem solid #aaa; 
        margin:.2rem .07rem 0;
    }
    .leftBox{
        width: 2rem;
    }
    .leftBox>h4{
         color:#494949;
        font-weight: 100;
        line-height: .16rem;
        line-height: .2rem;
    }
    .box{
        display: flex;
    }
    .bomNet{
        display: flex;
        justify-content:space-between;
    }
     .bomNet>span{
         color:#ccc;
         font-size:.1rem;
         line-height: .5rem;
         margin-left:.1rem;
     }
  img{
       width: .8rem;
       height:1rem ; 
   }
</style>