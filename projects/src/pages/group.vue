<template>
    <div>
        <div class="oneBox">
           <router-link-nav></router-link-nav>
       </div>
       <div class="twoBox">
           <top-login></top-login>
           <group-fu groupTitle="租房找室友" groupBom="更多相关小组" :propsFu="arr"></group-fu>
           <group-fu groupTitle="來聊五块钱" groupBom="來聊五块钱" :propsFu="obj"></group-fu>
           <group-fu groupTitle="买买买" groupBom="更多相关小组" :propsFu="com"></group-fu>

           <pablic-footer></pablic-footer>
       </div>
    </div>
</template>
<script>
import routerLinkNav from '../components/nav/routerLinkNav'
import topLogin from '../components/guangboAll/topLogin'
import groupFu from '../components/groupAll/groupFu'
import  pablicFooter from '../components/pablicFooter'
export default {
    components:{
        routerLinkNav,
        topLogin,
        groupFu,
        pablicFooter
    },
    data(){
        return{
            arr:[],
            obj:[],
            com:[]
        }
    },
    created() {
        this.axios({
            url:"/xiaozua",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data.xiaozua)
            this.arr=ok.data.xiaozua;
        })
        this.axios({
            url:"/xiaozub",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data.xiaozub)
            this.obj=ok.data.xiaozub;
        })
         this.axios({
            url:"/xiaozuc",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data.xiaozuc)
            this.com=ok.data.xiaozuc;
        })
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