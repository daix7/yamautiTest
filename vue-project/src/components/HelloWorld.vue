<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12" class="display-4 text-center">Class Calendar</v-col>

      <v-col cols="12" class="text-center mb-10">
        <v-icon size="200" color="black">mdi-calendar-month-outline</v-icon>
      </v-col>

      <v-col cols="12" class="text-center mt-12">
        <v-btn color="#dd4b39" class="white--text" x-large :to="{name:'main'}">Googleアカウントでログイン</v-btn>
      </v-col>

      <v-col cols="12" class="text-center mt-12">
        <v-btn color="#dd4b39" class="white--text" x-large :to="{name:'TabItem'}">テストログイン</v-btn>
      </v-col>

      <v-col cols="12" class="text-center mt-12">
        <v-btn color="#dd4b39" class="white--text" x-large :to="{name:'CheckUpCalendar'}">テストDay</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>