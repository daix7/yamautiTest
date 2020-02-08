<template>
  <v-content>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">メニュー</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-group
            v-for="nav_list in nav_lists"
            :key="nav_list.name"
            no-action
            :append-icon="nav_list.lists ? undefined : ''"
          >
            <template v-slot:activator>
              <v-list-item :to="nav_list.link">
                <v-list-item-content>
                  <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer=!drawer">menu</v-app-bar-nav-icon>
      
    </v-app-bar>
    </v-content>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      nav_lists: [
        {
          name: "マイページ",
          link: "/mypage"
        },
        {
          name: "科目設定",
          link: "/SubjectSetting"
        },
        {
          name: "ログアウト",
          link: ""
        },
        {
          name: "カレンダー",
          link: "/Calendar"
        }
        /*
        {
          name: 'クラス管理'
        },*/
        /*{
          name: '授業管理',
          lists: [
            {
              name: '学期設定',
              link: '/MyPage'
            },
            
          ]
        },*/
      ]
    };
  }
};
</script>