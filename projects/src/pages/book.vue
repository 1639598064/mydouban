<template>
    <div>
        <router-link-nav></router-link-nav>
        <div>
            <book-fu bookTitle:="最受关注图书 | 虚构类" :propsFu="obj"></book-fu>
        </div>
        <pablic-footer></pablic-footer>
    </div>
</template>
<script>
import routerLinkNav from '../components/nav/routerLinkNav'
import bookeFu from '../components/slider/bookFu'
import pablicFooter from '../components/pablicFooter'

export default {
    components:{
        routerLinkNav,
        bookeFu,
        pablicFooter
    },
    data(){
        return{
            obj:[]
        }
    },
    created() {
        this.axios({
            url:"/books",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data.books)
        })
    }
}
</script>
<style scoped>
    
</style>