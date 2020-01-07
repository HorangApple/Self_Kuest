<template>

  <v-app>
    <router-view></router-view>
    <v-content>
      <h1>Self Kuest</h1>
      <span>나는 오늘</span>
      <v-form>
        <v-text-field
            label="Regular"
          ></v-text-field>
      </v-form>
      <span>할 것이다.</span>
      <div>
        <router-link to="/mypage" exact>User</router-link>
      <v-btn @click="goMain" color="primary">Submit</v-btn>
      <v-btn  @click="goMain" color="primary">My Page</v-btn>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import router from '@/router'
export default {
  name: 'Start',

  components: {
  },

  data: () => ({
    //
  }),
  methods: {
    goMain(){
      router.push('/mypage')
    }
  }
};
</script>
