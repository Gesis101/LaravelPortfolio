<template>
  <div>
    <v-card
   
    >
      <v-card
        v-for="category in categories"
        :key="category.id"
      >
        <router-link
          to="/"
        >
          <v-img
            :src="category.image"
          />
        </router-link>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data: () => ({
        categories: [
            {
                "id": 0,
                "text": "Photography",
                "image": require("../../public/static/project5.png")
            },
            {
                "id": 1,
                "text": "Development",
                "image": require("../../public/static/project5.png")
            },
            {
                "id": 2,
                "text": "Videography",
                "image": require("../../public/static/project5.png")
            }
        ]
    }),
}
</script>
