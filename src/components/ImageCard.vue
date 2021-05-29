<template >
  <div>
    <div class="img-container" @mouseover="mouseOver" @mouseleave="mouseOut">
      <img :src="url" />
      <router-link :to="`/${id}`">
        <v-btn v-if="currentId === url" class="btn">Подробнее</v-btn>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHovered: false,
      currentItem: 0,
    };
  },
  props: {
    id: { type: Number },
    url: { type: String },
    thumbUrl: { type: String },
    title: { type: String },
    currentId: { type: String },
  },
  methods: {
    mouseOver: function () {
      this.$emit("imagehover");
    },
    mouseOut() {
      this.$emit("imageout");
    },
  },
  computed: {
    btnClass() {
      return {};
    },
  },
};
</script>
<style scoped>
.img-container {
  position: relative;
  width: 100%;
}
img {
  width: 100%;
}
.btn {
  position: absolute;
  height: 20%;
  width: 80%;
  top: 40%;
  left: 10%;
}
</style>