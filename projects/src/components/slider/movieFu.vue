<template>
    <div class="allBox">
        <p>
            <b>{{movieTitle}}</b>
            <a href="">更多</a>
        </p>
        <div class="centerBox">
            <div  v-for="(v,i) in propsFu" :key="i" @click="goMovie(i)">
                <s-zi :xiangqing="v.title" :imga="v.images.medium" :fivestar="v.rating.average"  :obj="v"></s-zi>
            </div>  
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
        "movieTitle","propsFu"
    ] ,
    data(){
        return{
            movieXq:[]
        }
    },
   methods: {
       goMovie(val){
           this.movieXq= this.propsFu.filter((v,i)=>{
                if(i==val){
                    return this.propsFu[i]
                }
            })
             this.$router.push({
                path: "/moviedetails",
                query: {arr:this.movieXq}
             })  
        }
   }
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