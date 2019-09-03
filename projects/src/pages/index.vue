<template>
    <div>
        <div class="oneBox">
            <router-link-nav></router-link-nav>
        </div>
    
    <div class="twoBox">
        <router-link-center></router-link-center>
          <newlist>
              <!-- <cona slot="slota"></cona>
              <conb slot="slotb"></conb> -->
              
          </newlist>     
     </div>
    </div>
</template>
<script>
import routerLinkNav from '../components/nav/routerLinkNav'
import routerLinkCenter from '../components/nav/routerLinkCenter'
import newlist from '../components/newList/newlist'
import cona from '../components/newList/cona'
import conb from '../components/newList/conb'


export default {
    components:{
        routerLinkNav,
        routerLinkCenter ,
        newlist,
        cona,
        conb
    },
    data(){
       
    },
    created() {
        
    },
    
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