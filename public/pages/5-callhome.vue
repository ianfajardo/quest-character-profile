<template>
  <div class="form-page">
    <div class="form-page-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="form-page-form">
              <h1>Call home</h1>
              <p>
                Like the real world, the
                peoples of Quest are
                endlessly diverse. Use where
                you're from and what your
                people are known for as a
                starting point for how you
                relate to others in the world.
              </p>

              <div class="form-page-preview">
                <div class="row">
                  <div class="col-md-12">
                    <div class="sheetRow">
                      I'm from
                      <span id="home" class="style sheetField">{{home}}</span>, where my people are known for
                      <span
                        id="knownFor"
                        class="style sheetField"
                      >{{knownFor}}</span>.
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="Home:" label-for="home-input">
                    <b-input-group>
                      <b-form-input id="home-input" class="input-home" v-model="home"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(homeOption, index) in homeOptions"
                            v-on:click="updateHome(homeOption)"
                            v-bind:key="index"
                          >{{homeOption}}</b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-form-group>
                </div>

                <div class="col-md-6">
                  <b-form-group id="input-group-3" label="Known For:" label-for="knownFor-input">
                    <b-input-group>
                      <b-form-input id="knownFor-input" class="input-knownFor" v-model="knownFor"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(knownForOption, index) in knownForOptions"
                            v-on:click="updateKnownFor(knownForOption)"
                            v-bind:key="index"
                          >{{knownForOption}}</b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-form-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
        <div class="row py-5">
          <div class="col-md-4">
            <router-link to="/style" class="btn btn-lg btn-primary">
              <b-icon-arrow-left-short></b-icon-arrow-left-short>Previous: Show your style
            </router-link>
          </div>
          <div class="col-md-4 text-md-center">
            <router-link to="/charactersheet" class="btn btn-lg btn-secondary">
              <i class="fas fa-binoculars"></i> &nbsp; Character Profile
            </router-link>
          </div>
          <div class="col-md-4 text-md-right">
            <router-link to="/ideal-flaw" class="btn btn-lg btn-primary">
              Next: Believe in something
              <b-icon-arrow-right-short></b-icon-arrow-right-short>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeOptions: [
        "a great metropolis",
        "a remote village",
        "a frontier town",
        "a lonely island",
        "a capital city",
        "a seastead",
        "a remote stronghold",
        "a traveling caravan",
        "a hidden warren",
        "a working farm",
        "a roadside inn",
        "a ship at sea",
        "a place I can't name",
        "a subterranean city",
        "a forgotten nation",
        "a mountain town",
        "a city in the mist",
        "a homestead"
      ],
      knownForOptions: [
        "their steady pursuit of pleasure",
        "their easygoing temperament",
        "their unhurried sense of time",
        "treating strangers with love",
        "restoring justice to the land",
        "once ruling a vast empire",
        "creating a world wonder",
        "enduring a great tragedy",
        "their neutral rationality",
        "their warm hospitality",
        "a culture of secrecy",
        "non-hierarchical relationships",
        "plainly stating their intentions",
        "their sense of duty to each other",
        "resisting a brutal ruling order",
        "creating historic works of art",
        "strict adherence to the law",
        "their commercial success",
        "setting cultural trends",
        "their traditional ways",
        "inventing the future",
        "losing a great war"
      ]
    };
  },
  computed: {
    home: {
      get() {
        return this.$store.state.home;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "home",
          message: value
        });
      }
    },
    knownFor: {
      get() {
        return this.$store.state.knownFor;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "knownFor",
          message: value
        });
      }
    }
  },
  methods: {
    updateHome: function(home) {
      this.home = home;
    },
    updateKnownFor: function(knownFor1) {
      this.knownFor = knownFor1;
    }
  }
};
</script>