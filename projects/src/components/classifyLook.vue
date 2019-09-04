<template>
    <div> 
        <div class="box">
            <p>分类浏览</p>
            <ul v-for="(v,i) in obj" :key="i">
                <li>
                    <a href="">{{obj[i].name}}</a> 
                    <span></span>
                </li>
             </ul>  
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:[]
        }
    },
    created() {
        this.axios({
            url:"/fenlan",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data);
            this.obj=ok.data;
        })
    },
}
</script>
<style scoped>
   .box{
        margin-left:1.2em;
    }
    .box>ul{
        display: inline-block;
    }
    .box>p{
        line-height: .7rem;
    }
   .box>ul>li{
        width: 1.45rem;
        height: .4rem;
        border-right:.009rem solid #ccc;
        border-top:.009rem solid #ccc;
        text-align: center;
        line-height: .4rem;
        display: flex;
        justify-content: space-around;
    }
    .box>ul>li>a{
        font-size: .14rem;
        color:#42bd56;
        margin-left:-.2rem;
    }
    .box>ul>li>span{
        font-weight: 700;
        display: inline-block;
        border-right: 0.01rem solid #ccc;
        border-bottom: 0.01rem solid #ccc;
        width: .1rem;
        height: .1rem;
        transform: rotate(-45deg);
        margin-top: .14rem;
        margin-right:-.2rem;

    }
</style>