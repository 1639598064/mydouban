<template>
    <div class="box">
        <p>{{groupTitle}}</p>
        <group-zi v-for="(v, i) in propsFu" :key="i" :imgurl="v.images.small" :title="v.title" :cona="v.group_member" :conb="v.group_topic.time" :connect="v.group_topic.title"></group-zi>
        <div class="boxBom">{{groupBom}}</div>
    </div>
</template>
<script>
import groupZi from './groupZi'
export default {
    components:{
        groupZi
    },
     props:[ 
        "groupTitle","propsFu","groupBom"
    ]  

}
</script>
<style scoped>
    .box{
        width: 100%;
    }
    .box>p{
        font-size: .16rem;
        line-height: .17rem;
        margin-left:.2rem;
        margin-top:.3rem;    
    }
    .boxBom{
        text-align: center;
        color:#42bd56;
        line-height: .45rem;
        margin-bottom:.35rem;
    }
</style>