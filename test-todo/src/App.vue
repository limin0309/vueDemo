<template>
  <div id="app">
    <input type="text" v-model="inputValue">
    <button @click="handleSubmit">提交</button>
    <ul>
    <todo-item  v-for="(item,index) in lists" :key="index" :content="item"></todo-item>
    </ul>
  </div>
</template>

<script>
import Item from './components/Item.vue'
export default {
  components:{
    'todo-item':Item
  },
  data: function() {
    return {
      inputValue: "",
      lists: []
    };
  },
  methods: {
    handleSubmit() {
      this.lists.push(this.inputValue);
      this.inputValue=''
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
