<template>
  <div class="twoot-item">
    <div class="user-profile__twoot">
      <div class="twoot-item__user">@{{ username }}</div>
      <div class="twoot-item__content">{{ twoot.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    twoot: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>
.twoot-item {
  margin: 10px 0;
  background: #fff;
  width: 100%;
  padding: 20px;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &__user {
    font-weight: bold;
  }
  &__content {
    color: #777;
    margin-top: 10px;
  }
}
</style>