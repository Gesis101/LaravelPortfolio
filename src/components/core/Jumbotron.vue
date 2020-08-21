<template>
  <v-img
    v-if="namespace === 'Home'"
    :height="'50vh'"
    gradient="to top, rgba(17,17,17, 10), rgba(10,10 , 10, .0)"
    src="/static/homebkg.jpg"
  >
    <v-container
      fill-height
      fluid
      :px-12="$vuetify.breakpoint.mdAndUp"
      class="text-center"
    >
      <v-row align-center>
        <v-slide-x-transition appear>
          <v-col>
            <h2
              style="letter-spacing: 4px;"
              class="text-uppercase font-weight-medium mb-5 text-white"
              :class="[$vuetify.breakpoint.xsOnly ? 'display-1' : 'display-3']"
              v-text="day"
            />
            <div
              class="mb-4 "
              :class="[$vuetify.breakpoint.xsOnly ? 'headline' : 'display-2 font-weight-medium']"
            >
              <h5
                class="text-uppercase text-white font-weight-medium mb-4 "
                style="letter-spacing: 1.5px;"
              >
                I'm Thabo
              </h5>
            </div>

            <v-responsive

              class="mb-5 justify-content-center"
              style="letter-spacing: 2px; font-size: 1.1em"
            >
              Junior Developer <span style="color: red;">&#9679; </span> Photography <span style="color: red;">&#9679; </span> Videography
            </v-responsive>
          </v-col>
        </v-slide-x-transition>
      </v-row>
    </v-container>
  </v-img>

  <v-sheet
    v-else
    :min-height="$vuetify.breakpoint.smAndDown ? '45vh' : '300px'"
    color="grey lighten-3"
    height="20vh"
  >
    <v-container fill-height>
      <v-row
        align-content="center"
        justify="center"
        class="fill-height"
      >
        <v-col cols="12">
          <h1
            class="display-2 text-center"
            v-text="title"
          />
        </v-col>

        <v-breadcrumbs
          :items="breadcrumbs"
          class="grey--text pb-0 px-3"
        />
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style>
.text-white {
    color: white;
}

</style>
<script>
  export default {
    computed: {
      breadcrumbs () {
        const home = { text: 'Home', to: '/' }

        switch (this.namespace) {
          case 'About': return [home, { text: 'About ' }]
          case 'Contact': return [home, { text: 'Contact ' }]
          case 'Portfolio': return [home, { text: 'Portfolio' }]
          default: return []
        }
      },
      namespace () {
        return this.$route.name
      },
      title () {
        switch (this.namespace) {
          case 'About': return 'About Me'
          case 'Contact': return 'Contact Me'
          case 'Work': return 'My Work'
          default: return ''
        }
      },
        day () {
            const Date1 = new Date()
            var hour = Date1.getHours();
            var min = Date1.getMinutes();
            var greeting;

            switch(true){
            case hour>=12 && hour<18:
                greeting = "Good Afternoon";
                break;
            case hour>=18 && hour<=23 && min < 59:
                greeting = "Good Evening";
                break;
            case hour>=0 && hour<12:
                greeting = "Good Morning";
                break;
            default :
                greeting = "Welcome";
            }

            return greeting
        }
    }
  }
</script>
