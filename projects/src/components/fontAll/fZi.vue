<template>
    <a>{{txt}}</a>
</template>
<script>
export default {
    // props:{
    //     txt:{
    //         type:String,
    //         required:true
    //     }
    // }
    props:["txt"]
}
</script>
<style scoped>
    a{
       white-space: nowrap;
        display: inline-block;
        font-size:.12rem;
        border:.01rem solid goldenrod;
        padding:.15rem .1rem;
        border-radius: .05rem;
        margin:.1rem .1rem .1rem 0;
    }
</style>