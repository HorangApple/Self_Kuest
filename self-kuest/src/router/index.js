import Vue from "vue";
import VueRouter from "vue-router";
import Help from '@/components/Help.vue'
import MyQuest from '@/components/MyQuest.vue'

Vue.use(VueRouter);

const routes = [
  { path: "/myquest", name: "MyQuest", component: MyQuest },
  { path: "/help", name: "help", component: Help },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router