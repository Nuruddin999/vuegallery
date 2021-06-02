<template>
  <div>
    <h1 class="mt-16">О нас</h1>
    <div class="d-flex align-center flex-wrap flex-md-nowrap justify-center">
      <img :src="getProfile.photo" />
      <div>
        <h3>{{ getProfile.name }}</h3>
        <h3>{{ getProfile.email }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "about",
    };
  },
  computed: {
    ...mapGetters(["getProfile"]),
  },
};
</script>