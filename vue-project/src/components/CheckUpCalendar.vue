<template>
  <v-app align="center">
    <v-flex>
      <v-card>
      <!-- <v-toolbar color="primary">
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar> -->
      <!-- <v-img src="../assets/cc_m.jpg" class="colku"> -->
          <h1 class="titile">Schedule</h1>
      <!-- </v-img> -->
      <v-col cols="6" md="3">
        <v-img src="../assets/calendar3.png"></v-img>
      </v-col>
      <br />
      <v-btn to="/entryconfirmed" class="button">ユーザ登録</v-btn>
      <br />
      <!--class text-capitalizeがないとv-btnの文字がすべて大文字になる-->
      <v-btn
        @click="login"
        class="button text-capitalize white--text"
        color="#dd4b39"
      >Googleアカウントでログイン</v-btn>
      </v-card>
    </v-flex>
  </v-app>
</template>

<script>
//   import {mapActions} from "vuex";
//   import firebase from 'firebase/app'
//   import 'firebase/app'
// import 'firebase/auth'

export default {
  // created() {
  //     firebase.auth().onAuthStateChanged(user =>{
  //         if(user){
  //             this.setLoginUser(user)
  //         }else{
  //             this.deleteLoginUser()
  //         }
  //     })
  // },
  // methods: {
  //     //storeから取得
  //     ...mapActions(['login','setLoginUser','logout','deleteLoginUser','entry']),
  // },
};
</script>

<style scoped lang="scss">
.button {
  position: relative;
  margin-top: 15px;
  width: 180pt;
  border: solid 2px silver;
  font-weight: 550;
}

// .calendar_icon {
//   width: 200px;
//   height: 150px;
// }

.img {
  margin-top: 30px;
}

.titile {
  margin-top: 100px;
  margin-bottom: 30px;
}

.colku {
  width: 200px;
  height: 100px;
}

</style>

