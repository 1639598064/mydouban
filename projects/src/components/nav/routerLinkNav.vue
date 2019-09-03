<template>
   <div class="box">
       <router-link to="/index">豆瓣</router-link>
       <router-link to="/movies">电影</router-link>
       <router-link to="/book">图书</router-link>
       <router-link to="/broadcast">广播</router-link>
       <router-link to="/group">小组</router-link>
      <router-link to="/change"><img src="../../../static/img/search.png"></router-link>
    
      
   </div>
</template>
   
<script>

export default {
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .box{
        width: 100%;
        height: .48rem;
        border-bottom: .01rem solid #f3f3f3;
        line-height: .48rem;
        background: #fff;
        position: fixed;
    }
    .box>a:nth-of-type(1){
        font-size: .24rem;
        color:#05B512;
        font-weight: 600;
        margin-left:.2rem;
    }
    .box>a:nth-of-type(2){
        font-size: .16rem;
        color:rgb(35, 132, 232);
         margin-left:.4rem;
    }
    .box>a:nth-of-type(3){
        font-size: .16rem;
        color:rgb(159, 120, 96);
        margin-left:.04rem;
    }
    .box>a:nth-of-type(4){
        font-size: .16rem;
        color:rgb(228, 168, 19);
        margin-left:.04rem;
    }
    .box>a:nth-of-type(5){
        font-size: .16rem;
        color: rgb(42, 184, 204);
        /* vertical-align: middle; */
        margin-left:.04rem;
    }
    a>img{
       width:.25rem;
       vertical-align: middle;
       margin-left:.04rem;
    }
</style>
