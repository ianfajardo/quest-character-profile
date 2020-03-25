<template>
  <div class="form-page">
    <div class="form-page-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="form-page-form">
              <h1>Enter the scene</h1>
              <p>
                You can give your character as much detail as you want, but it
                helps to start with a few distinctive features. Imagine what people
                would notice when you first enter a room.
              </p>

              <p>
                As a starting point, imagine the world is filled with humanlike
                peoples who need the same things we do: food, safety, love, and
                fun. The features you choose may suggest a unique ancestry, but
                they don't separate you from others. Assume that peoples of the
                world are compatible in matters of family, labor, and society.
              </p>

              <p>
                You can choose any of the things from this list or create your
                own. The only rule is that features you choose to describe your
                character can't give them special powers.
              </p>

              <div class="form-page-preview">
                <div class="row">
                  <div class="col-md-12">
                    <div class="sheetRow">
                      When people seem me, they first notice my
                      <div class="featuresContainer">
                        <div class="fieldContainer fieldContainer-features">
                          <span id="body" class="sheetField">{{body}}</span>
                        </div>,
                        <span id="face" class="sheetField">{{face}}</span>,
                      </div>
                      <div class="featuresContainer">
                        and
                        <span id="vibe" class="sheetField">{{vibe}}</span>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="Body:" label-for="body-input">
                    <b-input-group>
                      <b-form-input id="body-input" class="input-body" v-model="body"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(bodyOption, index) in bodyOptions"
                            v-on:click="updateBody(bodyOption)"
                            v-bind:key="index"
                          >{{bodyOption}}</b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-form-group>
                </div>

                <div class="col-md-6">
                  <b-form-group id="input-group-3" label="Face:" label-for="face-input">
                    <b-input-group>
                      <b-form-input id="face-input" class="input-face" v-model="face"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown variant="primary" right>
                          <b-dropdown-item
                            v-for="(faceOption, index) in faceOptions"
                            v-on:click="updateFace(faceOption)"
                            v-bind:key="index"
                          >{{faceOption}}</b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-form-group>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-4" label="Vibe:" label-for="vibe-input">
                    <b-input-group>
                      <b-form-input id="vibe-input" class="input-vibe" v-model="vibe"></b-form-input>

                      <template v-slot:append>
                        <b-dropdown class="scrollable-menu" variant="primary" right>
                          <b-dropdown-item
                            v-for="(vibeOption, index) in vibeOptions"
                            v-on:click="updateVibe(vibeOption)"
                            v-bind:key="index"
                          >{{vibeOption}}</b-dropdown-item>
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
            <router-link to="/role" class="btn btn-lg btn-primary">
              <b-icon-arrow-left-short></b-icon-arrow-left-short>Previous: Choose Your Role
            </router-link>
          </div>
          <div class="col-md-4 text-md-center">
            <router-link to="/charactersheet" class="btn btn-lg btn-secondary">
              <i class="fas fa-binoculars"></i> &nbsp; Character Profile
            </router-link>
          </div>
          <div class="col-md-4 text-md-right">
            <router-link to="/style" class="btn btn-lg btn-primary">
              Next: Show Your Style
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
      bodyOptions: [
        "scales",
        "worn scars",
        "iridescent skin",
        "rack of muscles",
        "towering physique",
        "speckled complexion",
        "barrel-sized belly",
        "head of tentacles",
        "generous curves",
        "elongated limbs",
        "bumpy exterior",
        "willowy frame",
        "sculpted hair",
        "vestigial tail",
        "webbed fins",
        "rough hide"
      ],
      faceOptions: [
        "gaunt face",
        "sharp teeth",
        "fulsome cheeks",
        "large, pointy ears",
        "vestigial antennae",
        "knee-length",
        "beard",
        "devastating smile",
        "windswept face",
        "manicured fuzz",
        "ridged forehead",
        "triangular head",
        "timeworn face",
        "romantic eyes",
        "severe jawline",
        "skeptical eyes",
        "radiant smile",
        "burning eyes",
        "heavy brows"
      ],
      vibeOptions: [
        "long shadow",
        "sleepy mood",
        "sparkling gaze",
        "eternal grimace",
        "bursting energy",
        "an air of mystery",
        "gentle disposition",
        "androgynous vibes",
        "thousand-yard stare",
        "tightly wound energy",
        "brooding",
        "presence",
        "friendly demeanor",
        "meandering gaze",
        "graceful posture",
        "captivating grin",
        "raucous laugh",
        "flawless poise",
        "fiery temper"
      ]
    };
  },
  computed: {
    body: {
      get() {
        return this.$store.state.body;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "body",
          message: value
        });
      }
    },
    face: {
      get() {
        return this.$store.state.face;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "face",
          message: value
        });
      }
    },
    vibe: {
      get() {
        return this.$store.state.vibe;
      },
      set(value) {
        this.$store.commit("updateMessage", {
          name: "vibe",
          message: value
        });
      }
    }
  },
  methods: {
    updateFace: function(face) {
      this.face = face;
    },
    updateBody: function(body) {
      this.body = body;
    },
    updateVibe: function(vibe) {
      this.vibe = vibe;
    }
  }
};
</script>