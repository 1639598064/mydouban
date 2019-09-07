<template>
   <div class="com">
        <router-link to="/movies">影院热映</router-link>
        <router-link to="/broadcast">欧美新碟榜</router-link>
         <router-link to="/register">注册账号</router-link>
        <router-link to="/login">登录豆瓣</router-link>
   </div>

</template>
   
<script>

export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .com{
      width: 88%;
      margin:6%  6% 0;
      font-size: 0;
    }
    .com>a{
        display:inline-block;
        width: 50%;
        height: 0.5rem;
        background: #f6f6f6;
        color:#494949;
        text-align: center;
        line-height: .5rem;
       font-size: .14rem;
       border-radius: .01rem;
       border:.03rem solid #fff;
       box-sizing: border-box;
    }

</style>
