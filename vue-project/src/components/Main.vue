<template>
  <v-app>
    <div>
      <v-sheet height="64">
        <Menu></Menu>
      </v-sheet>
      <router-view />
    </div>
  </v-app>
</template>

<style lang="scss">
</style>

<script>
import Menu from "../components/Menu";

// import Calendar from "../components/Calendar"

export default {
  data() {
    return {};
  },
  components: {
    Menu
  }
};
</script>
