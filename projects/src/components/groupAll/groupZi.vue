<template>
    <div>
       <div class="boxTop">
           <img :src="imgurl">
           <h4>{{title}}</h4>
           <span>{{cona}}人</span>
       </div>
       <div class="boxBom">
           <p>
               <b>{{conb}}</b>
               <span>{{connect}}</span>
           </p>
       </div>
    </div>
</template>
<script>
export default {
    props:{
        imgurl:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        cona:{
            type:String,
            required:true
        },
        conb:{
            type:String,
            required:true
        },
        connect:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
  .boxTop{
      margin-top:.2rem; 
      margin-left:.2rem;
  }
  .boxTop>img{
      width: .45rem;
      height: .45rem;
      vertical-align: middle;
  }  
  .boxTop>h4{
      display: inline-block;
      color:#111;
      font-weight: 100;
      margin-top:.1rem;
      vertical-align: middle; 
      margin-left:.05rem;
      width: 1.6rem;
      white-space: nowrap;
      overflow:hidden;
      text-overflow: ellipsis;
  }
  .boxTop>span{
      font-size: .14rem;
      color:#ccc;
      float:right;
      margin-right:.2rem;
      margin-top:.15rem;
  }
  .boxBom{
      width: 100%;
       margin-left:.2rem;
  }
  .boxBom>p{
      color:#ccc;
      font-size: .14rem;
      line-height: .55rem;
      border-bottom:.001rem solid #f2f2f2;
  }
  .boxBom>p{
      display: flex;
  }
  .boxBom>p>b{
      font-weight: 100;
  }
  .boxBom>p>span{
      display: inline-block;
      width: 1.9rem;
      white-space: nowrap;
      overflow:hidden;
      text-overflow: ellipsis;
      margin-right:.15rem;
  }
</style>