<template>
    <div class="box">
        <div class="oneBox">
            <h4>{{num[0].title}}</h4>
            <span>{{num[0].loc_name}}</span>
        </div>
        <img :src="num[0].image">
        <div class="twoBox">
            <span>时间:</span>
            <p>
                <span>{{num[0].begin_time}}</span>
                <span>{{num[0].end_time}}</span>
            </p>
        </div>
        <div class="twoBox">
            <span>地点:</span>
            <p>{{num[0].address}}</p>
        </div>
         <div class="twoBox">
            <span>费用:</span>
            <p>{{num[0].price_range}}</p>
        </div>
         <div class="twoBox">
            <span>类型:</span>
            <p>{{num[0].category_name}}</p>
        </div>
         <div class="threeBox">
            <span>起始时间:</span>
            <p>{{num[0].subcategory_name}}</p>
        </div>
        <div class="fourBox">
            <span>当代</span>
            <span>艺术</span>
            <span>详情</span>
        </div>
        <div class="fiveBox">
            <h3>活动详情</h3>
            <p v-html="num[0].content"></p>
        </div>
    </div>
</template>
<script>
export default {
    props:["arr"],

    //计算属性处理数据,过滤显示内容
    computed: {
        num(){
            console.log(this.$route.query.arr)
        let num= this.$route.query.arr.filter((v,i)=>{
                if(v.id==this.$route.query.id){
                    return v
                }
            })
        return num
        }
    }
}
</script>
<style scoped>
    .box{
        margin:0 .1rem;
        font-size: .14rem;
    }
    .oneBox>h4{
        font-size:.16rem;
        margin-top:.3rem;
    }
    .box>img{
       width: 100%;
       height:auto;
       max-width: 2.2rem;
       margin-left:.4rem;
       margin-top:.3rem;
    }
    .oneBox>span{
        display: inline-block;
        width: .4rem;
        height:.21rem;
        text-align: center;
        border-radius: .03rem;
        color:#fff;
        background: #ff8263;
        font-size: .12rem;
    }
    .twoBox>span{
        color:#666;
        display:inline-block;
        margin-top:.06rem;
    }
    .twoBox>p{
        margin-left:.5rem;
        margin-top:-.185rem;
    }
     .twoBox>p>span{
         display: block;
         line-height: .14rem;
     }
      .threeBox>span{
        color:#666;
        display:inline-block;
        margin-top:.06rem;
    }
     .threeBox>p{
        margin-left:.7rem;
        margin-top:-.16rem;
        line-height: .14rem;
     }
    .fourBox{
        width: 2rem;
    }
     .fourBox>span{
         display: inline-block;
         background: #F5F5F5;
         border-radius: .1rem;
         padding:.05rem .1rem;
         margin-right:.1rem;
         margin-top:.2rem;
     }
     .fiveBox>h3{
         font-size: .16rem;
         margin-top:.2rem;
         color:#072;
     }
     .fiveBox>p{
         font-size:.14rem;
         margin-top:.1rem;
         line-height: .14rem;
     }
</style>