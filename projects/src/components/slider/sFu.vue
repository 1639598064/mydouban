<template>
    <div class="allBox">
        <p>
            <b>影院热映</b>
            <a href="">更多</a>
        </p>
         <!-- <s-zi v-for="(v,i) in propsFu" :key="i" :imga="v.medium" :xiangqing="v."></s-zi> -->
          <s-zi v-for="(v,i) in propsFu" :key="i" :xiangqing="v.title"></s-zi>
        <s-zi></s-zi>
    </div>
</template>
<script>
import sZi from './sZi'
export default {
    components:{
        sZi
    },
    props:{
        propsFu:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
   .allBox{
       width: 100%;
   } 
   .allBox>p{
       display: flex;
       justify-content: space-between;
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