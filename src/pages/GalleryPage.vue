<template>
  <div class="gallery">
    <imageComp
      v-for="(photo, index) in getPhotos"
      :key="photo.id"
      :url="photo.url"
      :currentId="currentItem"
      :id="photo.id"
      @imagehover="showButton(index)"
      @imageout="showButton(-1)"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import imageComp from "../components/ImageCard.vue";
export default {
  data() {
    return {
      isHovered: false,
      currentItem: false,
    };
  },
  components: { imageComp },
  computed: {
    ...mapGetters(["getPhotos", "getCategories"]),
  },
  methods: {
    ...mapActions(["loadPhotos"]),
    showButton(index) {
      this.currentItem = index + 1;
      console.log(index);
    },
  },
  async created() {
    // this.photos = await this.$api.photos.getAll();
    // console.log(JSON.stringify(this.photos));
    await this.loadPhotos();
  },
};
</script>
<style scoped>
.gallery {
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  gap: 30px 55px;
  margin-top: 3em;
}
</style>