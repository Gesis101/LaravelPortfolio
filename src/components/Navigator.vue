<template>
  <div>
    <v-flex
      v-for="category in categories"
      :key="category.id"
    >
      <v-card>
        <router-link
          to="/"
        >
          <v-img
            :src="category.image"
          />
        </router-link>
      </v-card>
    </v-flex>
  </div>
</template>
<script>
var n
export default {
    name: 'HelloWorld',

    data: () => ({
         navs: 0,
        categories: [
            {
                "id": 0,
                "text": "Photography",
                "image": require("../../public/static/project5.png")
            },
            {
                "id": 1,
                "text": "Development",
                "image":  require("../../public/static/project5.png")
            },
            {
                "id": 2,
                "text": "Videography",
                "image": require("../../public/static/project5.png")
            }
        ]
        })
}
</script>
