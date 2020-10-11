<template>
  <div id="nav">
    <router-link to="/" class="mr-auto">Twooter</router-link>
    <span class="mr-auto username" v-if="user">{{ user.username }}</span>
    <router-link to="/" class="my-2">Home</router-link> |
    <router-link to="/user/1" class="my-2">UserProfile</router-link> |
    <router-link to="/Admin" class="my-2">Admin</router-link> |
  </div>
  <router-view />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    return {
      user,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;

  .mr-auto {
    margin-right: auto;
  }

  .my-2 {
    margin: 0 10px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.username {
  color: #42b983;
  font-weight: bolder;
  padding: 5px 10px;
  background-color: #fff;
}
</style>
