<template>
    <div>
      <div class="box">
          <img src="../../../static/img/d.png">
         <div class="boxToP">
             <p>
                 <b>豆瓣</b>
                 <span>写了日记</span>
             </p>
             <span>2017-3-1&nbsp;&nbsp;19:30:41</span>
             <div class="boxCenter">
                 <h4>豆瓣App 4.12.0 主要更新</h4>
                 <span>
                     - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
                 </span>
             </div>
             <div class="boxBom">
                <p>
                    <span></span>
                    <b>4</b>
                    <span></span>
                    <b>0</b>
                    <span></span>
                    <b>1</b>
                </p>
                <span></span>
             </div>
         </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
     border-bottom:.01rem solid #ccc;
     margin-left:.15rem;
}
.box>img{
    width: .42rem;
    height: .42rem;
    border-radius: 50%;
    margin:.2rem .08rem;
}
.boxToP{
    margin-left: .63rem;
    margin-top: -.64rem;
}
.boxToP>p>span{
    color:#aaa;
    margin-left:-.02rem;
}
.boxToP>span{
    font-size:.14rem;
    color:#aaa;
    line-height: .1rem;
}
.boxCenter{
    width: 2rem;
    height: .9rem;
    border:.01rem solid #ccc;
    padding:.1rem;
    margin-top:.1rem;
}
.boxCenter>h4{
    font-weight: 100;
    color:#494949;
}
.boxCenter>span{
    display: inline-block;
    margin-top:.1rem;
    font-size: .1rem;
    color:#aaa;
    line-height: .19rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.boxCenter>p>div{
    display: flex;
    justify-content: space-between;
}
.boxBom{
    position: relative; 
}
.boxBom>p{
    margin-left:-.13rem;
    margin-top:.3rem;
    margin-bottom:.2rem;
}
.boxBom>p>span{
    display: inline-block;
    width:.23rem;
    height: .23rem;
    vertical-align: middle;
}
.boxBom>p>b{
    font-size: .12rem;
    font-weight: 100;
    color:#ccc;
    margin-right:.25rem;
    vertical-align: middle;
}
.boxBom>p>span:nth-of-type(1){
    background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg)
}
.boxBom>p>span:nth-of-type(2){
    background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg)
}
.boxBom>p>span:nth-of-type(3){
    background: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg)
}
.boxBom>span{
    display: inline-block;
    width:.25rem;
    height: .08rem;
    margin-left:1.85rem;
    position: absolute;
    top:.1rem;
    background: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg)
}
</style>