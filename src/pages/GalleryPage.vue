<template>
  <div></div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPhotos"]),
  },
  methods: {
    ...mapActions(["loadPhotos"]),
  },
  async created() {
    // this.photos = await this.$api.photos.getAll();
    // console.log(JSON.stringify(this.photos));
    await this.loadPhotos();
  },
};
</script>