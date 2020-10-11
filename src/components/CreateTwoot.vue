<template>
  <form
    class="user-profile__create-twoot"
    @submit.prevent="createNewTwoot"
    :class="{ maxed: newTwootCharacterCount > 180 }"
  >
    <label for="newTwoot"
      ><strong>New Twoot </strong>({{ newTwootCharacterCount }}/180)</label
    >
    <textarea
      name="newTwoot"
      id="newTwoot"
      placeholder="New Twoot"
      v-model="state.twoot.newTwootContent"
    ></textarea>
    <div class="user-profile__create-twoot-inline">
      <div class="user-profile__create-twoot-type">
        <label for="newTwootType">
          <strong>Type: </strong>
        </label>
        <select id="newTwootType" v-model="state.twoot.selectedTwootType">
          <option
            v-for="(option, index) in state.twootTypes"
            :value="option.value"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <button class="btn-twoot">Twoot</button>
    </div>
  </form>
</template>

<script>
import { computed, reactive } from "vue";
export default {
  // * composition api is setup()
  setup(props, context) {
    const state = reactive({
      twoot: {
        newTwootContent: "",
        selectedTwootType: "instant",
      },
      twootTypes: [
        {
          value: "draft",
          name: "Draft",
        },
        {
          value: "instant",
          name: "Instant Twoot",
        },
      ],
    });

    const newTwootCharacterCount = computed(
      () => state.twoot.newTwootContent.length
    );

    function createNewTwoot() {
      if (state.newTwootCharacterCount > 180) {
        return;
      }
      if (
        state.twoot.newTwootContent &&
        state.twoot.selectedTwootType !== "draft"
      ) {
        context.emit("add-twoot", state.twoot);
      }

      state.twoot.newTwootContent = "";
      state.twoot.selectedTwootType = "instant";
    }
    return {
      state,
      newTwootCharacterCount,
      createNewTwoot,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile__create-twoot {
  display: flex;
  width: 100%;
  flex-flow: column;
  margin-top: 50px;
  padding-top: 10px;
  background-color: #fff;
  padding: 20px;

  textarea {
    width: 100%;
    height: 100px;
    max-width: 100%;
    margin: 5px 0 10px;
    min-height: 100px;
    padding: 7px;
    &:focus {
      outline-color: #1b6edb;
    }
  }
  &.maxed {
    color: red;
    textarea {
      border-color: red;
      outline-color: red;
    }
  }
  &-inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-twoot {
    font-size: 1rem;
    border: 0;
    background-color: #1b6edb;
    color: #fff;
    padding: 5px 10px;
    outline: 0;
    transition: transform 0.1s ease;
    margin: 10px 0;
    border-radius: 5px;
    &:hover {
      background: darken($color: #1b6edb, $amount: 10%);
    }
    &:active {
      transform: scale(0.95);
    }
  }
}
</style>