<template>
  <v-layout
    row
    justify-space-between
  >
    <v-flex
      lg4
      md4
      sm12
    >
      <about-me-component />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: "Creative"
        };
    },
    components: {
        AboutMeComponent: () => import("@/components/AboutMeComponent.vue")
    },
    data() {
        return {
            navs: 1
        };
    }
};
</script>
