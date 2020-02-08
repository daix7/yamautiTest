<template>
  <v-content>
    <v-app-bar color="primary" dark app>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-title>マイページ</v-toolbar-title>
      <v-app-bar-nav-icon class="toolbar-title" @click="logout">ログアウト</v-app-bar-nav-icon>
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>
    </v-content>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    logout() {
      alert("ahhhahhhahhahahhhahhaha");
    }
  }
};
</script>

<style>

.toolbar-title {
  margin-left: 89%;
}
</style>