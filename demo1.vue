<template>
<div>
    <ul>
    <li v-for="(item,index) in lists" :key="index"
    @click="choose(index)"
    :class="{active:index==current && current!==''}"
    >{{item}}</li>
    </ul>
    <button type="button" @click="add()">
        添加
    </button>
    <ul>
        <li v-for="(item,index) in target" :key="index">
            {{item}}
        </li>
    </ul>
    <!--  :class="{active:index==current}" 当索引与当前点击项相等时，触发样式改变。即点击项样式样式 -->
    <!--   '' 和 ‘  ’不一样，切记  -->
</div>
</template>
<script>
export default {
name: "demo1",
data() {
    return {
    current:'',
    lists: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    target:[],
    };
},
methods: {
    choose(index){
        this.current=index
    },
    add(){
    if(this.current===''){return}
    this.target.push(this.lists[this.current])   
    this.current=''  // '' 和 ‘  ’不一样，切记
    }
}
};
</script>
<style scoped>
li.active{
    color:red;
    background: green
}
</style>
