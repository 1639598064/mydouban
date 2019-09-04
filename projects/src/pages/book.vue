<template>
    <div>
        <div class="oneBox"> 
            <router-link-nav></router-link-nav>
        </div>
        <div class="twoBox">
            <div>
                <book-fu bookTitle="最受关注图书 | 虚构类" :propsFu="booka"></book-fu>
                <book-fu bookTitle="最受关注图书 | 非虚构类" :propsFu="bookb"></book-fu>
                <bookzhishu></bookzhishu>
                <div>
                   <f-fu fontTitle="发现好书" :fontFu="arr"></f-fu>
                </div>
                <div>
                    <classify-look></classify-look>
                </div>
            </div>
            <pablic-footer></pablic-footer>
        </div> 
    </div>
</template>
<script>
import routerLinkNav from '../components/nav/routerLinkNav'
import bookFu from '../components/slider/bookFu'
import pablicFooter from '../components/pablicFooter'
import bookzhishu from '../components/bookzhishu'
import  fFu from '../components/fontAll/fFu'
import  classifyLook from '../components/classifyLook'

export default {
    components:{
        routerLinkNav,
        bookFu,
        pablicFooter,
        bookzhishu,
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
        this.axios({
            url:"/books",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data.book)
            this.obj=ok.data.book;
        }),
        //发现好书的数据请求
       this.axios({
           url:"/goodBook",
           method:"get"
       }).then((ok)=>{
        //    console.log(ok.data.goodBook)
           this.arr=ok.data.goodBook;
           
       })
    },
    computed:{
         booka(){
             var demoa=this.obj.filter((v,i)=>{
                if(i<8){
                    return this.obj[i]
                }
            })
            return demoa
        },
        bookb(){
             var demoa=this.obj.filter((v,i)=>{
                if(i>8 && i<16){
                    return this.obj[i]
                }
            })
            return demoa
        },
        bookc(){
             var demoa=this.obj.filter((v,i)=>{
                if(i>16 && i>24){
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