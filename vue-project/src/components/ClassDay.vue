<template>
  <div>
    <!-- <TimeTable v-if="show"></TimeTable> -->
    
    <button v-on:click="changeShow">toggle</button>


    <TabItem v-if="!show"></TabItem>
    
  </div>
</template>

<script>
import TabItem from "./TabItem"

// # Vueインスタンス
export default {
  data: () => { 
    return {
      show: true
    }     
  },
  components: {
    TabItem
  },
  methods: {
    changeShow: function() {
      this.show = !this.show;
    }
  }
};
</script>

