<template>
    <div class="allBox">
        <img src="../../../static/img/loading_green.c0f9be0.gif" v-if="arr.length<=0">
        <div class="fuBox"  v-for="(v, i) in arr" :key="i" @click="Xiangq(v.id)" v-else>
            <div class="box">
                <div class="leftBox">
                    <h4>{{arr[i].title}}</h4>
                    <!-- <slot name="slota"></slot> -->
                    <p>{{fenge[i]}}</p>
                </div>
                <img :src="arr[i].image">
            </div>
            <p class="bomNet" >
                <span>{{arr[i].category_name}}</span>
                <!-- <slot name="slotb"></slot> -->
                <span>{{arr[i].tags}}</span>
            </p>
        </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            arr:[]
        }
    },
    // 字符串截取p中的内容
    computed: {
        fenge(){
            let obj=[];
            for(let i in this.arr){
               let temp=this.arr[i].content.split("<");
                temp=temp[0].substring(0,35);
                obj.push(temp);
            }
            return obj
        }
    },
    //发送请求，调取数据
    created() {
        setTimeout(()=>{
            this.axios({
                url:"/shouye",
                method:"get"   
            }).then((ok)=>{
                console.log(ok.data.shouye)
                this.arr=ok.data.shouye;
            })
        },1500)    
    },
    methods:{
        Xiangq(id){
            this.$router.push({
                path: "/indexXiangq",
                query: {"id":id,"arr":this.arr}
             })  
        }
    }
}
</script>
<style scoped>
    .allBox>img{
        width: .7rem;
        height:.7rem;
        margin-left:1.3rem;
        margin-top:.3rem;
    }
    .fuBox{
        border-bottom:0.01rem solid #e3e3e3;
        width: 100%;
        margin:.2rem .07rem 0; 
    }
    .leftBox{
        width: 2rem;
        margin-left:.17rem;
    }
    .leftBox>h4{
        color:#494949;
        font-weight: 100;
        font-size: .14rem;
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
        margin-left:.17rem;
    }
    p{
        font-size: .11rem;
        color:#aaa;
        line-height: .2rem;
        margin-top:.1rem;
    }
     .bomNet span:last-child{
         margin-right:.3rem;
     }
  img{
       width: .8rem;
       height:1rem ; 
       margin:0 .3rem;
   }
</style>