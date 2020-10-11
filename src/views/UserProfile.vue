<template>
  <div class="user-profile">
    <div class="user-profile__side-panel">
      <div class="user-profile__user-panel">
        <div class="user-profile__username">@{{ state.user.username }}</div>
   
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</div>
        <div class="user-profile__Follower-count">
          <strong>Followers: </strong>{{ state.followers }}
        </div>
      </div>
      <CreateTwoot @add-twoot="createTwoot" />
    </div>

    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "@/components/TwootItem";
import CreateTwoot from "@/components/CreateTwoot";
import {useRoute} from 'vue-router';
import { computed, reactive } from 'vue';
import {users} from '@/assets/users.js';

export default {


setup(){

  const route = useRoute();
  const userId = computed(()=> route.params.userId)

  const state = reactive({
      // user: {
      //   id: 1,
      //   username: "_anupshrestha1",
      //   firstName: "Anup",
      //   lastName: "Shrestha",
      //   email: "anupshrestha@gmail.com",
      //   isAdmin: true,
      //   twoots: [
      //     { id: 1, content: "this is new twoots of this era" },
      //     { id: 2, content: "this was old twoots of old era" },
      //   ],
      // },

      followers: 0,
      user: users[userId.value - 1] || users[0],
  })

  function createTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot.newTwootContent,
      });
  }



  return{
    state, 
    createTwoot,
    userId
  }

},
  components: {
    TwootItem,
    CreateTwoot,
  },
};
</script>
<style lang="scss" scoped>
.user-profile {
  display: flex;
  gap: 50px;
  width: 100%;
  padding: 50px;

  &__user-panel {
    background-color: #fff;
    padding: 10px 20px;
    width: 400px;
    min-width: 400px;
    line-height: 1.5rem;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    margin-bottom: auto;
  }

  &__username {
    font-size: 1.5rem;
    margin: 15px 0;
  }
  &__admin-badge {
    font-size: 0.8rem;
    font-weight: 600;
    background-color: rgb(79, 55, 214);
    padding: 2px 10px;
    color: #fff;
    border-radius: 5px;
    margin: 10px 0;
  }
  &__twoots-wrapper {
    width: 100%;
    display: flex;
    flex-flow: column;
  }
}
</style>