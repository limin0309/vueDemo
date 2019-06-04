<template>
  <div class="list">
<ul>
  <li v-for="(item,index) in pageLists" :key="index">{{item.title}}-{{item.content}}</li>
</ul>  </div>
</template>
<script>
import store from '@/store'
export default {
    name:'List',
    store,
    computed:{
      pageLists(){
        return store.state.lists
      }
    },
    methods:{

    }
}
</script>
<style scoped>
  
</style>
