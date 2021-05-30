<template>
  <div class="gallery_container">
    <v-progress-circular
      v-if="isloading"
      indeterminate
      color="purple"
    ></v-progress-circular>
    <div
      v-for="category in getPhotos"
      :key="category.category"
      class="category_card"
    >
      <span class="category-title">Категория{{ category.category }}</span>
      <div class="gallery">
        <imageComp
          v-for="photo in category.photos"
          :key="photo.id"
          :url="photo.url"
          :currentId="currentItem"
          :id="photo.id"
          @imagehover="showButton(photo.url)"
          @imageout="showButton('')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import imageComp from "../components/ImageCard";
import { delay } from "../../utils";
export default {
  components: { imageComp },
  data() {
    return {
      isHovered: false,
      currentItem: "",
      isloading: false,
    };
  },

  computed: {
    ...mapGetters(["getPhotos", "getCategories"]),
  },
  methods: {
    ...mapActions(["loadPhotos"]),
    showButton(url) {
      this.currentItem = url;
    },
  },
  async created() {
    this.isloading = true;
    await delay(500);
    await this.loadPhotos();
    this.isloading = false;
  },
};
</script>
<style scoped>
.gallery_container {
  max-width: 1440px;
  margin: 100px auto 0;
}
.category_card {
  margin-top: 2.5em;
}
.category-title {
  font-size: 1.5em;
  font-weight: bold;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2em;
  margin-top: 1em;
}
</style>