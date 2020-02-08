<template>
  <v-container>
    <v-sheet height="64">
      <!-- toolbar sheet  -->
      <v-toolbar flat color="white">
        <template>
          <v-btn class="ma-2" color="orange darken-2" to="/Calendar" dark>
            <v-icon dark left>mdi-arrow-left</v-icon>Back
          </v-btn>
        </template>
        <v-spacer></v-spacer>
        <v-toolbar-title class="titletext">{{ $route.query.fotitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-sheet>
    <v-sheet height="600">
      <!-- 570  -->
      <v-card class="mx-auto">
        <!-- この部分のデータを送信または取得 -->
        <div class="bottomdiv">
          <!-- Mainコンポーネントから日付と曜日取得 -->
          <p id="center_day">{{$route.query.foday}}</p>
          <p id="center_date">{{$route.query.fodate}}</p>
        </div>
        <v-row class="mb-6" no-gutters>
          <template v-for="n in 6">
            <v-col :key="`first-${n}`" :cols="2" align-self="center">
              <!-- 番号 -->
              <v-card class="pa3" outlined tile>
                <p class="number">{{ n }}</p>
              </v-card>
            </v-col>
            <v-col :key="`second-${n}`" :cols="4">
              <v-card class="pa3" outlined tile>
                <!-- 科目select -->
                <v-select :items="items" label="科目" class="pa3"></v-select>
              </v-card>
            </v-col>
            <v-col :key="`Third-${n}`" :cols="6">
              <!-- 科目ごとの備考欄 -->
              <v-card class="pa3" outlined tile>
                <v-text-field label="授業メモ" counter="10" maxlength="100"></v-text-field>
                <!--  :rules="[limit_length]"  -->
              </v-card>
            </v-col>
          </template>
          <v-card class="pa3" outlined tile width="100%" height="80px">
            <!-- 備考欄 -->
            <textarea
              class="textarea-size"
              placeholder="備考"
              maxlength="20"
              counter="200"
              
            ></textarea>
          <!-- :rules="[Remarkslimit_length]" -->
          </v-card>
        </v-row>
        <v-btn @click="SendTextdata" id="savebtn" color="primary">保存</v-btn>
        <!-- この部分のデータを送信または取得 -->
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script>

export default {
  // name: 'TimeTablepage',
  data: () => {
    return {
      inputJudgment: false,
      // text1: "",
      // 入力規則
      // required: value => !!value || "必ず入力してください", // 入力必須の制約
      // limit_length: value =>
      //   value.length <= 10 || "10文字以内で入力してください", // 文字数の制約
      // Remarkslimit_length: Rvalue =>
      //   Rvalue.length <= 10 || "10文字以内で入力してください", // 文字数の制約

      // //ここで科目取得してitemsに入れる
      items: ["default", "vertical", "国語", "数学"]
      // // type: $route.query.fotype,
    };
  },
  methods: {
    hoge: function() {
      this.a += 1;
      return this.a;
    },
    SendTextdata() {
      //ここでデータ送信
      // this.inputJudgment = false;
      console.log("aaaa");
      // if(this.value.length >= 10) {

      //   alert("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      // }else if (this.value.length <= 10) {
      //   // this.inputJudgment = true;
      //   alert("hogehoge");
      // }
    }
  },
};
</script>

<style>
.number {
  text-align: center;
  padding-top: 20px;
}

.pa3 {
  height: 70px;
  padding: 2px;
}

.textarea-size {
  width: 100%;
  height: 100%;
}

#savebtn {
  margin-left: 70%;
  margin-top: -13px;
  margin-bottom: 10px;
  height: 40px;
}

#center_day {
  /* margin-left: 177px; */
  text-align: center;
  font-size: 12px;
  margin-bottom: 2px;
  padding-top: 5px;
  padding-bottom: 0px;
}

.bottomdiv {
  margin-bottom: 0px;
}

#center_date {
  text-align: center;
  margin-bottom: 2px;
  font-size: 18px;
}

.card-sheet {
  min-height: 300px;
}

.titletext {
  margin-right: 9%;
}
</style>
