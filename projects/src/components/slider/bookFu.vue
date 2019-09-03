<template>
    <div class="allBox">
        <p>
            <b>{{bookTitle}}</b>
            <a href="">更多</a>
        </p>
        <div class="centerBox">
             <s-zi v-for="(v,i) in propsFu" :key="i" :xiangqing="v.title" :imga="v.images.medium" :fivestar="v.rating.average" :obj="v"></s-zi>
        </div>
    </div>
</template>
<script>
import sZi from './sZi'
export default {
    components:{
        sZi
    },
    props:[ 
        "bookTitle","propsFu"
    ]  
}
</script>
<style scoped>
   .allBox{
       width: 100%;
   } 
   .centerBox{
        display: flex;
        overflow: auto;
        margin:.1rem .2rem  0 .2rem;
   }
   .allBox>p{
       display: flex;
       justify-content: space-between;
       margin:.1rem 0;
   }
   .allBox>p>b{
       font-size: .14rem;
       margin-left:.2rem;
   }
   .allBox>p>a{
       font-size: .14rem;
       color:#42bd56;
       margin-right:.3rem;
   }
</style>