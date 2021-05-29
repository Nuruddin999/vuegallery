
<template >
  <div>
    <div class="picture-wrapper">
      <h5>{{ getPhoto.title }}</h5>
      <span>id: {{ getPhoto.id }} </span>
      <img :src="getPhoto.url" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  methods: {
    ...mapActions(["loadPhotoById"]),
    showButton(index) {
      this.currentItem = index + 1;
      console.log(index);
    },
  },
  computed: {
    ...mapGetters(["getPhoto"]),
  },
  async created() {
    // this.photos = await this.$api.photos.getAll();
    // console.log(JSON.stringify(this.photos));
    await this.loadPhotoById(this.$route.params.id);
  },
};
</script>
<style scoped>
.picture-wrapper {
  display: grid;
  max-width: 720px;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 40px 40px 40px 40px;
  margin: 3em auto 0;
  border: 1px solid grey;
  border-radius: 0.5em;
  padding: 0.2em;
}
img {
  width: 100%;
  grid-column: 7/10;
  grid-row: 1/5;
  height: 100%;
}
span {
  width: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
}
h5 {
  width: 100%;
  grid-column: 1/7;
  grid-row: 3/4;
  margin: 0;
}
</style>