<template>
    <div>
        <div class="oneBox">
             <router-link-nav></router-link-nav>
        </div>
        <div class="twoBox">
            <open-app></open-app>
            <div class="boxa">
                <div class="boxLeft">
                    <h3>{{bookF[0].title}}</h3>
                    <five-star :fivexx="bookF[0].rating.average"></five-star>{{bookF[0].rating.average}}<span>20000人评价</span>
                    <p>2018/剧情 /爱情 /战争 /王力宏 /章子怡 /李芳芳 /中国大陆</p>
                </div>
                <img :src="bookF[0].images.medium">
                <span>用APP查看影人资料</span>
                <div class="centerBox">
                    <span>想看</span>
                    <span>看过</span>
                </div>
                <b>{{bookF[0].title}}的简介</b>
                <div class="conBox">
                    斯诺登2004年应征入伍、后被派遣到伊拉克战场，因不幸在训练时双腿受伤，斯诺登退役回国后应聘加入中情局。之后，他又进入国安局工作，并意外发现政府在“9·11”事件后对公民电话和社交网络实施大规模监控计划，于是泄露了大量机密文件。事发后，斯诺登遭当局通缉，便逃到香港。此后，他几经辗转逃至俄罗斯寻求庇护。
                </div>
                <b>查看更多相关分类</b>
                <p>
                    <span>剧情</span>
                    <span>爱情</span>
                    <span>战争</span>
                </p>
                <b>{{bookF[0].title}}的图片</b>
                <div class="boxSlider">
                    <img :src="bookF[0].images.medium"  v-for="i in 4" :key="i">
                </div>
                <b>{{bookF[0].title}}的短评</b>
            </div>
            <div v-for="i in 3" :key="i">
                <guangbo></guangbo>
            </div>
            <div>
                <fFu fontTitle="推荐的书系" :fontFu="bb"></fFu>
            </div>
            <pablic-footer></pablic-footer>
        </div>  
    </div>
</template>
<script>
import routerLinkNav from '../components/nav/routerLinkNav'
import openApp from '../components/guangboAll/openApp'
import fiveStar from '../components/slider/fiveStar'
import guangbo from '../components/guangboAll/guangbo'
import fFu from '../components/fontAll/fFu'
import pablicFooter from '../components/pablicFooter'

export default {
    components:{
        routerLinkNav,
        openApp,
        fiveStar,
        guangbo,
        fFu,
        pablicFooter
    },
    data(){
        return{
            bookF:[]
        }
    },
     props:["arr","bb"],
    created() {
        if(this.$route.query.arr.length==15){
            this.$router.push("/book")
        }else{
            this.bookF=this.$route.query.arr;
            // console.log(this.$route.query.arr.length)
            this.axios({
                url:"/goodBook",
                method:"get"
            }).then((ok)=>{
                // console.log(ok.data.goodBook)
                this.bb=ok.data.goodBook
            })
        }  
    }
}
</script>
<style scoped>
.oneBox{
    width: 100%;
    height: .5rem;
}
.twoBox{
    overflow-y: auto;
}
.boxa{
margin: 0 .2rem;
font-size: .12rem;
}
.boxa>img{
    width: .8rem;
    height:1.1rem;
    float: right;
    margin-top:.2rem;
}
.boxa>span{
    display: inline-block;
    margin-top:.1rem;
}
.boxLeft{
    width: 1.9rem;
    float: left;
}
.boxLeft>h3{
    font-size: .18rem;
}
.boxLeft>div{
    display: inline-block;
    margin-top:.05rem;
    margin-bottom: .15rem;
}
.boxLeft>span{
    display: inline-block;
    margin-left:.2rem;
}
.boxa>span{
    font-size:.12rem;
    color:#0CBF06;
}
.centerBox{
    margin-top:.5rem;
    margin-left:.1rem;
}
.centerBox>span{
    display: inline-block;
    width: 1.2rem;
    height:.25rem;
    border:.001rem solid #FFBE28;
    color:#FFC84B;
    text-align: center;
    line-height: .25rem;
    margin-right:.1rem;
}
.boxa>b{
    font-weight: 100;
    color:#B8B8B8;
    font-size: .14rem;
    display: inline-block;
    margin-top:.2rem;
    border-radius: .05rem;
}
.conBox{
    line-height: .13rem;
    margin:.2rem 0 0;
}
.boxa>p{
    margin-top:.2rem;
}
.boxa>p>span{
    display: inline-block;
    padding:.04rem .13rem;
    background: #F5F5F5;
    border-radius: .08rem;
}
.boxSlider{
    display: flex;
    overflow: auto;
    margin:.1rem 0;
}
.boxSlider>img{
    width: 1.4rem;
    height:.85rem;
    margin-right:.1rem;
}
</style>