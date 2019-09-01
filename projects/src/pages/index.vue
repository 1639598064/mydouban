<template>
    <div>
      <router-link-nav></router-link-nav>
       <router-link-center></router-link-center>
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import routerLinkCenter from '../components/routerLinkCenter'
export default {
    components:{
        routerLinkNav,
        routerLinkCenter
    }
}
</script>
<style scoped>
    
</style>