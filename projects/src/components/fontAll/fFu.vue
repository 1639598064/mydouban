<template>
    <div class="allBox">
        <p>
            <b>{{fontTitle}}</b>
            <a href="">更多</a>
        </p>
        <div class="centerBox">
             <f-zi v-for="(v,i) in fontFu" :key="i" :txt="v.title" :style="{color:v.color}"></f-zi>
        </div>
    </div>
</template>
<script>
import fZi from './fZi'
export default {
    components:{
        fZi
    },
    props:[ 
         "fontTitle","fontFu"
    ]  
}
</script>
<style scoped>
   .allBox{
       width: 100%;
   } 
   .centerBox{
       display: flex;
       overflow:auto;
        margin:.1rem .2rem  0 .2rem;
   }
   .allBox>p{
       display: flex;
       justify-content: space-between;
       margin:.1rem 0 0;
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