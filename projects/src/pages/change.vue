<template>
    <div>
        <tools :fuProps="obj"></tools>
    </div>
</template>
<script>
import tools from '../components/changeAll/tools'

export default {
    components:{
        tools
    },
    data(){
        return{
            obj:[]
        }
    },
    created() {
        this.axios({
            url:"/changedata",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data.changedata)
            this.obj=ok.data.changedata;
        })
    }
}
</script>
<style scoped>
    
</style>