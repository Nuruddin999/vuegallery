<template >
  <div>
    <div class="img-container" @mouseover="mouseOver" @mouseleave="mouseOut">
      <img :src="url" />
      <router-link :to="`/${id}`">
        <v-btn v-if="currentId === id" class="btn">Подробнее</v-btn>
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
    currentId: { type: [Number, Boolean] },
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
  height: 300px;
}
img {
  width: 100%;
}
.btn {
  position: absolute;
  height: 20%;
  width: 40%;
  top: 40%;
  left: 30%;
}
</style>