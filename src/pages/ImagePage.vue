
<template >
  <div>
    <v-progress-circular
      v-if="isloading"
      indeterminate
      color="purple"
      class="mt-16"
    ></v-progress-circular>
    <div v-else class="picture-wrapper">
      <span class="picture_title picture_common"
        ><span class="key">Название:</span> <span></span
        >{{ getPhoto.title }}</span
      >
      <span class="picture_url picture_common"
        ><span class="key">Cсылка:</span> <span></span>{{ getPhoto.url }}</span
      >
      <span class="picture_id picture_common"
        ><span class="key">Номер:</span> {{ getPhoto.id }}
      </span>
      <img :src="getPhoto.url" />
      <router-link class="back_btn text-decoration-none" to="/">
        <v-btn>Назад</v-btn></router-link
      >
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { delay } from "../../utils";
export default {
  data() {
    return {
      isloading: false,
    };
  },

  methods: {
    ...mapActions(["loadPhotoById"]),
  },
  computed: {
    ...mapGetters(["getPhoto"]),
  },
  async created() {
    this.isloading = true;
    delay(500);
    await this.loadPhotoById(this.$route.params.id);
    this.isloading = false;
  },
};
</script>
<style scoped>
.picture-wrapper {
  display: grid;
  max-width: 1000px;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 32px 32px 32px 32px 32px;
  margin: 100px auto 0;
  border: 1px solid grey;
  border-radius: 0.5em;
  padding: 0.5em;
  background: white;
}
img {
  width: 100%;
  grid-column: 8/10;
  grid-row: 1/6;
  height: 100%;
}

.key {
  font-weight: bold;
}
.picture_common {
  width: 100%;
  grid-column: 1/7;
  text-align: start;
  margin: 0 0 0 10px;
}
.picture_id {
  grid-row: 2/3;
}
.picture_url {
  grid-row: 3/4;
}
.picture_title {
  grid-row: 4/5;
  overflow: hidden;
}
.back_btn {
  grid-row: 5/6;
}
</style>