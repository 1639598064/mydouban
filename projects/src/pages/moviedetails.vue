<template>
    <div>
        <div class="oneBox">
             <router-link-nav></router-link-nav>
        </div>
        <div class="twoBox">
            <open-app></open-app>
            <movie-xiangq></movie-xiangq>
            moviedetails-电影详情{{this.$route.query.id}}
        </div>  
    </div>
</template>
<script>
import routerLinkNav from '../components/nav/routerLinkNav'
import openApp from '../components/guangboAll/openApp'
import movieXiangq from '../components/slider/movieXiangq'

export default {
    components:{
        routerLinkNav,
        openApp,
        movieXiangq
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