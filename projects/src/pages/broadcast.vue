<template>
    <div>
       <router-link-nav></router-link-nav>
       <open-app></open-app>
       <top-login></top-login>
       <guangbo></guangbo>
    </div>
</template>
<script>
import routerLinkNav from '../components/nav/routerLinkNav'
import guangbo from '../components/guangboAll/guangbo'
import openApp from '../components/guangboAll/openApp'
import topLogin from '../components/guangboAll/topLogin'

export default {
    components:{
        routerLinkNav,
        guangbo,
        openApp,
        topLogin
    }
}
</script>
<style scoped>
    
</style>