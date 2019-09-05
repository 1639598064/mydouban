<template>
    <div class="box">
        <div class="boxTop">
            <span @click="goBack()">关闭</span>
            <input type="text" @focus="bool=!bool" @blur="bool=!bool">
            <img src="../../../static/img/sou.png"  v-if="bool">
        </div>
        <div class="changeb">
            <tem v-for="(v, i) in fuProps" :key="i" :titleurl="v.url" :title="v.name" :index="v.des" :stylecolor="v.color"></tem>
        </div>
        <div class="centerBox">
            <p class="topb">
                <a href="#">注册账号</a>
                <a href="#">登录豆瓣</a>
            </p>
            <p>
                <a href="#">使用桌面版</a>
                <a href="#">使用豆瓣APP</a>
            </p>
        </div>
    </div>
</template>
<script>
import  tem from './tem'
export default {
    components:{
        tem
    },
    props:["fuProps"],
    data(){
        return{
            bool:true
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .box{
       width: 100%;
       margin-top:.2rem; 
    }
    .boxTop{
       height:.45rem;
       border-bottom:.001rem solid  #f3f3f3;  
       position: relative;
    }
    .boxTop>span{
        color:#42bd56;
        margin-left:.2rem;
    }
    .boxTop>input{
        display: inline-block;
        margin-left:.05rem;
        width: 2.42rem;
        height:.35rem;
        /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3 ; */
        border-radius: .03rem;
        /* background-size:.195rem; */
        background:#f3f3f3;
        border:none;
        font-size:.14rem;
    }
    .boxTop>img{
        width: .2rem;
        height:.2rem;
        position: absolute;
        left: 1.7rem;
        top: .07rem;
    }
    .centerBox>p{
        height: .5rem;
        border-bottom:.001rem solid  #f3f3f3;  
        display: flex;
        justify-content: space-around;
    }
    .centerBox>p>a{
        display: inline-block;
        height:.2rem;
        color:#42bd56;
        padding-right:.35rem;
        margin-top:.1rem;
    }
    .topb{
      border-top:.001rem solid  #f3f3f3;   
    }
    .centerBox>p>a:first-child{
        border-right:.001rem solid #ccc;
        margin-left:.3rem;
    }
    .changeb{
        display: flex;
        flex-wrap: wrap;
        margin-left:.4rem;
        margin-bottom:.3rem;
    }
</style>