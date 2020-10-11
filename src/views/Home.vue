<template>
  <div class="home">
    <h1>Home</h1>
    <div class="users-list">
      <router-link
        v-for="user in users"
        :to="{ name: 'UserProfile', params: {userId: user.id} }"
        :key="user.id"
        class="break"
      >{{user.username}}</router-link> 
    </div>
  </div>
</template>

<script>
import {users} from '@/assets/users.js';
export default {

  setup(){
    return{
      users
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;
}
.break{
  display: block;
  margin: 10px 0;
}
</style>