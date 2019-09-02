<template>
    <div>
        <!-- <p>我叫小柒，一个爱玩儿豆瓣喜欢冒险的85后大龄女青年，朝九晚五</p> -->
        <p>{{con}}</p>
    </div>
</template>
<script>
export default {
   props:["con"]
}
       
</script>
<style scoped>
    p{
        font-size: .11rem;
        color:#aaa;
        line-height: .2rem;
        margin-top:.1rem;
    }
</style>