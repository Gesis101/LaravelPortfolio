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
      <Navigator />
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    metaInfo () {
      return {
        title: 'Creative'
      }
    },
  components: {
        Navigator: () => import('@/components/Navigator.vue')
      },
   data() {
        return {
            navs: 1
        }
   }
  }
</script>
