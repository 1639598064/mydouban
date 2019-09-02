<template>
    <div>
        movies-电影
        <s-fu></s-fu>
    </div>
</template>
<script>
import sFu from '../components/slider/sFu'
export default {
    components:{
        sFu
    },
    created() {
       this.axios({
           url:"/movie",
           method:"get" 
       }) .then((ok)=>{
           console.log(ok)
          
       })
    }
}
</script>
<style scoped>
    
</style>