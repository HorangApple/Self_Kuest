<template>
  <v-app>
    <div>
      <v-app-bar color="">
        <v-toolbar-title>ㅇㅣㄹㅜㄹㅣ</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <div>
          김종민
        </div>
        <v-btn icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card height="400" width="200">
            <v-navigation-drawer class="deep-purple accent-4" dark permanent>
              <v-list>
                <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-col>

        <v-col cols="9">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// import router from "@/router";
export default {
  name: "App",

  components: {},

  data: () => ({
    items: [
      { title: "My Quest", icon: "mdi-clipboard-text", to:"myquest" },
      { title: "Help!", icon: "mdi-alert-decagram", to:"help" },
      { title: "Reward", icon: "mdi-briefcase-download", to:"reward" }
    ]
  }),
  methods: {
  }
};
</script>

<style scoped>
.sideSpace{
  width: 2rem;
}
</style>