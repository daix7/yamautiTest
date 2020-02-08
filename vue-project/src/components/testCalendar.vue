<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-spacer></v-spacer>
          <v-toolbar-title class="title_text">{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="570">
        <v-calendar
          v-model="focus"
          height="400"
          ref="calendar"
          color="primary"
          type="month"
          @click:date="viewDay"
          :now="today"
          @change="updateTitle"
        ></v-calendar>
      </v-sheet>
      <div>
        <router-view></router-view>
      </div>
    </v-col>
  </v-row>
</template>
<style>
#center_day {
  /* margin-left: 177px; */
  text-align: center;
  font-size: 12px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}



#center_date {
  text-align: center;
  margin-bottom: 2px;
}

.title_text {
  margin-left: 5%;
}
</style>


<script>
import moment from "moment";
import router from "../router";
// import Menu from "../components/Menu";

export default {
  data: () => {
    return {
      focus: "",
      today: undefined,
      focusmonth: "",
      title: "",
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false
    };
  },

  watch: {
    focusmonth: function(start) {
      this.updateTitle({start});
      console.log();
    }
  },
  components: {
    // Menu,
    // MypageToolbar
  },
  // },
  mounted() {
    this.$refs.calendar.checkChange();
    console.log(this.$refs);
    console.log(typeof this.today);
    var dt = moment(new Date().toString()); //文字列からオブジェクト生成
    console.log(moment(dt).month() + 1);
    this.focusmonth = moment(dt).month() + 1;
    console.log(dt.format("YYYY-MM-DD hh:mm:ss"));
    this.today = dt.format("YYYY-MM-DD hh:mm:ss");
  },
  methods: {
    viewDay({ date }) {
      // this.focus = date;
      const a = date.split("-");
      let split_month = a[1];
      let monthstr = this.splitMonth(split_month);
      this.title = `${a[0]}年 ${monthstr}月`;
      this.type = "day";
      var focusday = this.formatDate(date);
      var focusdate = moment(date).date();
      console.log(moment(date).month() + 1);
      this.focusmonth = moment(date).month() + 1;
      router.push({
        name: "timetable",
        query: {
          foday: focusday,
          fodate: focusdate,
          fotitle: this.title,
          fotype: this.type
        }
      });

      alert("クリックした日付は" + " " + focusday + "です");
    },
    prev() {
      console.log("83287917389278");
      this.$refs.calendar.prev();
      this.$refs.calendar.checkChange();
    },
    next() {
      this.$refs.calendar.next();
      this.$refs.calendar.checkChange();
    },
    //日付フォーマッター
    formatDate(date) {
      var getdatenum = moment(date).day();
      switch (getdatenum) {
        case 0:
          return "SUN";

        case 1:
          return "MON";

        case 2:
          return "TUE";

        case 3:
          return "WED";

        case 4:
          return "THU";

        case 5:
          return "FRI";

        case 6:
          return "SAT";
      }
    },
    updateTitle({ start, end }) {
    //   this.start = start;
    //   this.end = end;
      if (!start || !end) {
        return "";
      }
      console.log("skjbakdbaksdnaoskdm" + start);
      this.title = `${start.year}年 ${start.month}月`;
    },
    splitMonth(month) {
      let monthstr = month;
      let monthcheck = month.substr( 0, 1);
      if(monthcheck == "0") {
          monthstr = month.substr(1,1);
      }
      return monthstr;
    }
  }
};
</script>

