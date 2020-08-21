<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'black' "
    app
    elevate-on-scroll
  >
    <v-img
      class="shrink"
      max-width="70%"
      src="/static/100x100.png"
    />
    <v-spacer />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        class="text-capitalize subtitle-1 mx-1 "
        text

      >
        <span
          style="letter-spacing: 0.2px; font-size: 1.1em"
          v-text="item.text"
        />
      </v-btn>
    </template>
    <v-menu
      v-else
      transition="slide-x-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
          color="white "
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-card
        color="primary"
        dark
      >
        <v-list color="black">
          <v-list-item
            :key="i"
            v-for="(item, i) in items"
            :to="item.to"
          >
            <v-list-item-title v-text="item.text"/>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<style>
* {
    color: white;
}
a:hover {
    line-height: 1em;
    padding-bottom: 1rem;
    border-bottom: 2px solid #d50000;
    color: #d50000;
    transition: 0.6s; }
</style>
<script>
// Utilities
import {mapMutations} from "vuex"

export default {
data: () => ({
    isScrolling: false,
    items: [
        {
            to: "/",
            text: "Overview"
        },
        {
            to: "/portfolio",
            text: "Portfolio"
        },
        {
            to: "/book",
            text: "Book"
        },
        {
            to: "/about",
            text: "About Me"
        },

        {
            to: "/contact-me",
            text: "Contact "
        }
    ]
}),

methods: {
    ...mapMutations(["toggleDrawer"]),
    onScroll() {
        this.isScrolling = (window.pageYOffset ||
            document.documentElement.scrollTop || 0) > 20
    }
}
}
</script>
