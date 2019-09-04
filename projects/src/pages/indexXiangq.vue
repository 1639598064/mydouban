<template>
    <div>
       <div class="oneBox">
           <router-link-nav></router-link-nav>
       </div>
       <div class="twoBox">
            <open-app></open-app>
            <index-connect></index-connect>
            <pablic-footer></pablic-footer>
       </div>
    </div>
</template>
<script>
import routerLinkNav from '../components/nav/routerLinkNav'
import openApp from '../components/guangboAll/openApp'
import  pablicFooter from '../components/pablicFooter'
import indexConnect from '../components/indexConnect'
export default {
    components:{
        routerLinkNav,
        openApp,
        pablicFooter,
        indexConnect
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