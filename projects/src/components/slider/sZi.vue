<template>
    <div class="allBox">
       <div class="centerBox">
            <div class="centera">
                <img :src="imga">
                <br>
                <span>{{xiangqing}}</span>
               <p>
                   <five-star :fivexx="fivestar"></five-star>
                   <span>{{obj.rating.average}}</span> 
               </p>
             </div>
       </div>
    </div>
</template>
<script>
import fiveStar from './fiveStar'
export default {
    props:{
        imga:{
            type:String,
            required:true
        },
        xiangqing:{
            type:String,
            required:true
        },
        fivestar:{
            type:Number,
            required:true
        },
        obj:{
            type:Object,
            required:true
        }
    },
    components:{ 
        fiveStar
    },
    //  methods:{
    //     goMovie(){
    //         console.log(this.obj)
    //          this.$router.push({
    //             path: "/moviedetails",
    //             query: {"id":this.id,"arr":this.obj}
    //          })  
    //     }
    // }
}
</script>
<style scoped>
   .allBox{
       width: 100%;
   } 
   .centerBox{
       display: flex;
       overflow: auto;
   }
   .centera{
       margin-right:.09rem;
       text-align: center;
   }
   .centera>p{
       display: flex;
   }
   .centera>span{
       display: inline-block;
       width: .9rem;
       white-space: nowrap;
       overflow:hidden;
       text-overflow: ellipsis;
   }
   .centera>p>span{
       font-size: .14em;
       margin-top:.05rem;
       margin-left:.1rem;
   }
   .centera>img{
       width: .9rem;
       height: 1.2rem;
   }
   .centera>span{
       font-size: .12rem;
       text-align: center;
   }
</style>