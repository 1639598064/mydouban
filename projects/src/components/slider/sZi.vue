<template>
    <div class="allBox">
       <div class="centerBox">
            <div class="centera">
                <img src="../../../static/img/page.jpg">
                <br>
                <span>无闻东西</span>
                <p>oooo</p>
             </div>
       </div>
    </div>
</template>
<script>
export default {
    props:["imga","xiangqing"]
}
</script>
<style scoped>
   .allBox{
       width: 100%;
   } 
   .centerBox{
       display: flex;
       overflow: auto;
       margin:0 .2rem;

   }
   .centera{
       padding:0 .01rem;
   }
   .centera>img{
       width: .9rem;
       height: 1.3rem;
   }
   .centera>span{
       font-size: .14rem;
       text-align: center;
   }
</style>