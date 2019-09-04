<template>
    <div class="box">
        <a :href="titleurl" :style="{color:stylecolor}">{{title}}</a>
        <p>{{index}}</p>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        titleurl:{
            type:String,
            required:true
        },
        index:{
            type:String,
            required:true
        },
        stylecolor:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    .box{
        width: 33.3%;
    }
    a{
        font-size:.24rem;
    }
    p{
        font-size:.12rem;
        color:#999;
    }
</style>