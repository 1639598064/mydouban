<template>
    <div>
       <div class="oneBox">
            <router-link-nav></router-link-nav>
       </div>
       <div class="twoBox">
           <div class="movieBox">
                <movie-fu movieTitle="影院热映" :propsFu="moviea"></movie-fu>
                <movie-fu movieTitle="免费在线观影" :propsFu="movieb"></movie-fu>
                <movie-fu movieTitle="新片速递" :propsFu="moviec"></movie-fu>
             </div>
            <div>
                <f-fu fontTitle="发现好电影" :fontFu="arr"></f-fu>
            </div>
            <div>
                <classify-look></classify-look>
            </div>
            <pablic-footer></pablic-footer>
       </div>   
    </div>
</template>
<script>
import routerLinkNav from '../components/nav/routerLinkNav'
import movieFu from '../components/slider/movieFu'
import  pablicFooter from '../components/pablicFooter'
import  fFu from '../components/fontAll/fFu'
import  classifyLook from '../components/classifyLook'

export default {
    components:{
        movieFu,
        routerLinkNav,
        pablicFooter,
        fFu,
        classifyLook
    },
    data(){
        return{
            obj:[],
            arr:[]
        }
    },
    created() {
        //电影列表的数据请求
       this.axios({
           url:"/movie",
           method:"get" 
       }) .then((ok)=>{
        //    console.log(ok.data.movie)
           this.obj=ok.data.movie
       });
       //发现好电影的数据请求
       this.axios({
           url:"/faxianhaodianying",
           method:"get"
       }).then((ok)=>{
        //    console.log(ok.data.faxianhaodianying)
           this.arr=ok.data.faxianhaodianying;
           
       })
    },
    //计算属性处理数据
    computed:{
        moviea(){
             var demoa=this.obj.filter((v,i)=>{
                if(i<8){
                    return this.obj[i]
                }
            })
            return demoa
        },
        movieb(){
             var demoa=this.obj.filter((v,i)=>{
                if(i>8 && i<15){
                    return this.obj[i]
                }
            })
            return demoa
        },
        moviec(){
             var demoa=this.obj.filter((v,i)=>{
                if(i>16 && i<24){
                    return this.obj[i]
                }
            })
            return demoa
        }
    }
}
</script>
<style scoped>
    .oneBox{
        height: .5rem;
    }
    .twoBox{
        overflow-y: auto;
    }
</style>