<template>
  <div>
    <!-- <TimeTable v-if="show"></TimeTable> -->
    
    <button v-on:click="changeShow">toggle</button>


    <TabItem v-if="!show"></TabItem>
    <Timetable v-if="show"></Timetable>

  </div>
</template>

<script>
import Timetable from "./TimeTable"
import TabItem from "./TabItem"

// # Vueインスタンス
export default {
  data: () => { 
    return {
      show: true
    }     
  },
  components: {
    Timetable,
    TabItem
  },
  methods: {
    changeShow: function() {
      this.show = !this.show;
    }
  }
};
</script>

